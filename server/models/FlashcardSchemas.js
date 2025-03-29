const mongoose = require('mongoose');

// Define the Flashcard schema
const flashcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  deckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FlashcardDeck',
    required: true,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Define the FlashcardDeck schema
const flashcardDeckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  extractedText: {
    type: String, // Add the extractedText field to store the raw input text
    required: true,
  },
  flashcards: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flashcard', // References flashcards for this deck
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create Mongoose models from the schemas
const Flashcard = mongoose.model('Flashcard', flashcardSchema);
const FlashcardDeck = mongoose.model('FlashcardDeck', flashcardDeckSchema);

module.exports = { Flashcard, FlashcardDeck };
