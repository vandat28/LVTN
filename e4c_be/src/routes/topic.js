var express = require("express");
var router = express.Router();

const topicController = require("../controller/topic");

router.get("/questions/:id", topicController.getQuestionsOfTopic);
router.get("/list/:id", topicController.getTopicsSameLevel);
router.get("/:id", topicController.getTopic);

module.exports = router;
