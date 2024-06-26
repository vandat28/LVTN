var express = require("express");
var router = express.Router();

const blogController = require("../controller/blog");

router.get("/list", blogController.findAll);
router.get("/:id", blogController.findOneById);

module.exports = router;
