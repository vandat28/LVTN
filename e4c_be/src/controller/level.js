const con = require("../configdb/connectDB");

class LevelController {
  async findAll(req, res) {
    try {
      const data = await findAll();
      // Sử dụng Promise.all để đợi tất cả các promises trong map hoàn thành
      const newData = await Promise.all(
        data.map(async (item) => ({
          ...item,
          topics: await findTopicOfLevel(item.id),
        }))
      );
      res.status(200).json({ result: newData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    function findAll() {
      return new Promise((resolve, reject) => {
        con.query(`SELECT * from level;`, function (error, result, fields) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        });
      });
    }

    function findTopicOfLevel(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `select * from topic where levelId = ${id}`,
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

module.exports = new LevelController();
