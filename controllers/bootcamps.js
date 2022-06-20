// @ desc get all bootcamps
// @route GET /api/v1/
//@access PUBLIC
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({ success: true, data: "List all the bootcamps." });
};

// @ desc get single bootcamp
// @route GET /:id
//@access PUBLIC
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `get datails of bootcamp ${req.params.id}` });
};

// @ desc Create new bootcamp
// @route POST /
//@access admin
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: "Create a new bootcamp" });
};

// @desc Update a bootcamp details
// @route PUT /:id
// @access Owner
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, data: `update bootcamp ${req.params.id}` });
};
