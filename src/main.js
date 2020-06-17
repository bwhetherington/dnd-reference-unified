const express = require("express");
const path = require("path");

let subDirectory = null;

const app = express();

const subProject = (app, dir) => {
  const router = new express.Router();
  router.use((req, res, next) => {
    subDirectory = dir;
    next();
  });
  return router;
};

// const view = new express.Router();
// view.use(express.static("dnd-reference/build"));

app.use("/view", express.static("dnd-reference/build"));
app.use("/spellbook", express.static("dnd-spellbook-2/dist"));
app.use("/tracker", express.static("init-tracker/build"));

// app.use("/view", express.static(path.join(__dirname, "/view")));
// app.use("/spellbook", express.static("dnd-spellbook-2/public"));
// app.use("/tracker", express.static("init-tracker/build"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
