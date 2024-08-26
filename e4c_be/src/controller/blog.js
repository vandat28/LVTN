const con = require("../configdb/connectDB");

class BlogController {
  async findAll(req, res) {
    try {
      const blogs = await findAll();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    function findAll() {
      return new Promise((resolve, reject) => {
        con.query(`SELECT * from blog`, function (error, result, fields) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        });
      });
    }
  }

  async findOneById(req, res) {
    try {
      const blog = await getBlogById(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    function getBlogById(id) {
      return new Promise((resolve, reject) => {
        con.query(
          `SELECT * from blog where id = ${id}`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result[0]);
          }
        );
      });
    }
  }

  async create(req, res) {
    try {
      await createBlog(req.body);
      res.status(200).json("success ");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

    function createBlog(blog) {
      return new Promise((resolve, reject) => {
        con.query(
          ` insert into blog(title, description, content, img) value('${blog.title}','${blog.description}','${blog.content}', '${blog.img}');`,
          function (error, result, fields) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result[0]);
          }
        );
      });
    }
  }
}

module.exports = new BlogController();
