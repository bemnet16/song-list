const {
  allSongs,
  createSong,
  deleteSong,
  singleSong,
  updateSong,
} = require("./songController");

const express = require("express");
const songRouter = express.Router();

songRouter.post("/", createSong);
songRouter.get("/", allSongs);
songRouter.get("/:id", singleSong);
songRouter.put("/:id", updateSong);
songRouter.delete("/:id", deleteSong);

module.exports = songRouter;
