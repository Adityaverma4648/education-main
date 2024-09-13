const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  time: { type: String, required: true },
  human: { type: String, required: true },
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
