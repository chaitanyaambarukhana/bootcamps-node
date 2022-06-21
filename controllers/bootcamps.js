const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");

// @ desc get all bootcamps
// @route GET /api/v1/
//@access PUBLIC
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @ desc get single bootcamp
// @route GET /:id
//@access PUBLIC
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp Not found with id: ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(
      new ErrorResponse(`Bootcamp Not found with id: ${req.params.id}`, 404)
    );
  }
};

// @ desc Create new bootcamp
// @route POST /
//@access admin
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Update a bootcamp details
// @route PUT /:id
// @access Owner
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "Bootcamp not found" });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: "Bootcamp Not found" });
    }
    res
      .status(200)
      .json({ success: true, data: { message: "successfully deleted" } });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
