const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ShopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
      },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});


  const shopModel = mongoose.model('shop', ShopSchema);
module.exports = shopModel;