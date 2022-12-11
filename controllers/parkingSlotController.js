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
  console.log('[NEW REQUEST]  : POST request..');
  query = req.query;
  console.log('[PROCESSING]   : processing query data');
  console.log(`[DATA]         :`);
  console.log(query);

  body = req.body;
  console.log('[PROCESSING]   : processing body data');
  console.log(`[DATA]         : ${req.body}`);
  console.log(body);

  const newHistory = await History.create({
    slot_1: req.body.slot_1,
    slot_2: req.body.slot_2,
    slot_3: req.body.slot_3,
  });

  // const newHistory = await History.create({
  //           slot_1: req.query.slot_1,
  //           slot_2: req.query.slot_2,
  //           slot_3: req.query.slot_3,
  //      });

  await Status.deleteOne({ slot_1: { $gte: 0 } });

  const newStatus = await Status.create({
    slot_1: req.body.slot_1,
    slot_2: req.body.slot_2,
    slot_3: req.body.slot_3,
  });
  console.log("     #######[SUCCESS]#######");  
  res.status(200).json({
    status: 'success',
    data: body,
  });
});

