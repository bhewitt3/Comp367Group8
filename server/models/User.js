const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  subscription:{
    type: String,
    enum: ['free', 'premium'],
    default: 'free',
  },
  
  subscriptionEndDate: { type: Date },
  paymentMethod: {
    cardType: String,
    last4: String,
    expMonth: Number,
 },
  subscriptionStatus: {
    type: String,
    enum: ['active', 'cancelled', 'past_due', 'inactive'],
    default: 'inactive',
  },//for subscription management and specific user messages
  isPaidUser: { type: Boolean, default: false }, //for permission checks after 3 summary generations and flashcard generation
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;

