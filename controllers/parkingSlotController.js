const catchAsync = require('../utils/catchAsync');
const ApiFeatures = require('./../utils/apiFeatures');
const Status = require('./../models/parkingSlotModel');
const History = require('./../models/historyModel');

exports.getSlotStatus = catchAsync(async (req, res, next) => {
  const status = await Status.find();
  
  res.status(200).json({
    status: 'success',
    data: status,
  });
});

exports.slotStatusHistory = catchAsync(async (req, res, next) => {

  
  query=req.query;

  const newHistory = await History.create({
            slot_1: req.query.slot_1,
            slot_2: req.query.slot_2,
            slot_3: req.query.slot_3,
       });

  await Status.deleteOne({ slot_1: {$gte : 0} });

  const newStatus = await Status.create({
    slot_1: req.query.slot_1,
    slot_2: req.query.slot_2,
    slot_3: req.query.slot_3,

});

  res.status(200).json({
    status: 'success',
    data: query,
  });
});

