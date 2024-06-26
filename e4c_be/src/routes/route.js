const level = require("../routes/level");
const topic = require("../routes/topic");
const user = require("../routes/user");
const blog = require("../routes/blog");

function route(app) {
  app.use("/api/level", level);
  app.use("/api/topic", topic);
  app.use("/api/user", user);
  app.use("/api/blog", blog);
}

module.exports = route;
