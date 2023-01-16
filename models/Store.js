const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a stor name',
  },
  slug: String,
  description: {
    type: String,
    trim: String,
  },
  tags: [String],
});

storeSchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  next();
  // TODO: make more resilient; to handle stores with a common name
});

module.exports = mongoose.model('Store', storeSchema);
