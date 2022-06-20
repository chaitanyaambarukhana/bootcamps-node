const express = require("express");
const router = express.Router();

const {
  getBootCamp,
  getBootCamps,
  updateBootcamp,
  createBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootCamps).post(createBootcamp);
router.route("/:id").get(getBootCamp).put(updateBootcamp);

module.exports = router;
