const mongoose = require('mongoose');

const historyScheama = new mongoose.Schema({
  slot_1: { type: Number, required: [true, 'Required  field Title Missing'] },
  slot_2: { type: Number, required: [true, 'Required  field Title Missing'] },
  slot_3: { type: Number, required: [true, 'Required  field Title Missing'] },
});

const History = mongoose.model('History', historyScheama);

module.exports = History;