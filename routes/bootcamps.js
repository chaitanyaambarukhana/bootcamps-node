const express = require("express");
const router = express.Router();

const {
  getBootCamp,
  getBootCamps,
  updateBootcamp,
  createBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootCamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootCamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
