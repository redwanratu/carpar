const mongoose = require('mongoose');

const parkingSlotScheama = new mongoose.Schema({
  slot_1: { type: Number, required: [true, 'Required  field Title Missing'] },
  slot_2: { type: Number, required: [true, 'Required  field Title Missing'] },
  slot_3: { type: Number, required: [true, 'Required  field Title Missing'] },
});

const Status = mongoose.model('Status', parkingSlotScheama);

module.exports = Status;
