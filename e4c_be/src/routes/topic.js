var express = require("express");
var router = express.Router();

const topicController = require("../controller/topic");

router.get("/", topicController.getAllTopic);
router.get("/questions/:id", topicController.getQuestionsOfTopic);
router.get("/list", topicController.getTopicsSameLevel);
router.get("/:id", topicController.getTopic);

module.exports = router;
