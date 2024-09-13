
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require('express-session');

const connectDB = require("./Config/DB");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(passport.initialize());


// Set up the session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,   
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  // Set to true if using HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

app.get("/protected", (req, res) => {
  res.send("You are authorized to access this route!");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(process.env.PORT, () =>
      console.log(`SERVER STARTED AT ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(`Connection failed: ${error}`);
  }
};

start();
