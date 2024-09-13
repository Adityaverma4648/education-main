const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversation');

// Save conversation
router.post('/conversation', async (req, res) => {
  try {
    const { time, human } = req.body;
    const newConversation = new Conversation({ time, human });
    await newConversation.save();
    res.status(201).json(newConversation);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save conversation' });
  }
});

// Get all conversations
router.get('/conversations', async (req, res) => {
  try {
    const conversations = await Conversation.find();
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
});

module.exports = router;
