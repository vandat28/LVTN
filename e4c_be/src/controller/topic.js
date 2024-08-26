const con = require("../configdb/connectDB");

class TopicController {
  async getAllTopic(req, res) {
    try {
      const topics = await findAllTopic();
      res.status(200).json(topics);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    function findAllTopic() {
      return new Promise((resolve, reject) => {
        con.query(
          `SELECT a.*, b.name as levelName FROM topic a ,level b  where b.id = a.levelId`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }
  }

  async getTopic(req, res) {
    try {
      const topic = await findTopic(req.params.id);
      res.status(200).json({
        result: topic[0],
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    function findTopic(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `select * from topic where id = ${id}`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }
  }
  async getTopicsSameLevel(req, res) {
    try {
      const topics = await findTopicsSameLevel(
        req.query.id,
        req.query.username
      );
      res.status(200).json({
        result: topics,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    function findTopicsSameLevel(id, username) {
      return new Promise((resolve, reject) => {
        con.query(
          `SELECT * 
            FROM topic 
            LEFT JOIN process ON topic.id = process.topicId AND process.username = '${username}' 
            WHERE topic.levelId = ${id}`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }
  }

  async getQuestionsOfTopic(req, res) {
    try {
      const topic = await findTopic(req.params.id);
      const questions = await findQuestions(topic[0].id);
      const data = await Promise.all(
        questions.map(async (item) => ({
          ...item,
          answers: await findAnswersOfQuestion(item.id),
        }))
      );
      res.status(200).json({
        topic: topic[0],
        questions: data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    function findQuestions(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `select a.*, b.name as typeName from question a, question_type b where topicId = ${id} and a.typeId = b.id order by id`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }

    function findAnswersOfQuestion(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `select * from answer where questionId = ${id}`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }

    function findTopic(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `select * from topic where id = ${id}`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          }
        );
      });
    }
  }
}

module.exports = new TopicController();
