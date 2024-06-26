var express = require("express");
var router = express.Router();

const userController = require("../controller/user");

router.get("/:username", userController.getUser);
router.post("/", userController.createUser);
router.post("/login", userController.checkAccount);
// router.put("/:id", userController);

module.exports = router;
