const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const db = require('./db');  // Assumes you have a database setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to handle forget password
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  // Check if email exists in the database
  const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (!user.length) {
    return res.status(400).send('Email does not exist');
  }

  // Generate a secure token
  const token = crypto.randomBytes(32).toString('hex');
  const expiryTime = Date.now() + 3600000; // Token valid for 1 hour

  // Store the token and expiry time in the database
  await db.query('UPDATE users SET reset_token = ?, token_expiry = ? WHERE email = ?', [token, expiryTime, email]);

  // Set up email
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or any other email service
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const resetLink = `${process.env.BACKEND_URL}reset-password?token=${token}&email=${email}`;

  // Send the email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Password Reset Request',
    html: `
      <h2>Password Reset</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send('Password reset email sent');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

// POST route to handle password reset
app.post('/reset-password', async (req, res) => {
  const { email, token, newPassword } = req.body;

  // Validate token and check if it has expired
  const user = await db.query('SELECT * FROM users WHERE email = ? AND reset_token = ?', [email, token]);
  if (!user.length || user[0].token_expiry < Date.now()) {
    return res.status(400).send('Invalid or expired token');
  }

  // Update password and clear the token
  await db.query('UPDATE users SET password = ?, reset_token = NULL, token_expiry = NULL WHERE email = ?', [newPassword, email]);

  res.send('Password has been reset');
});

app.listen(3000, () => console.log('Server running on port 3000'));
