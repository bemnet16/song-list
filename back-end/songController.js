const songModel = require("./songModel");

const createSong = async (req, res) => {
  try {
    const song = new songModel(req.body);
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: "Could not create the song." });
  }
};

const allSongs = async (req, res) => {
  try {
    const songs = await songModel.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve songs." });
  }
};

const singleSong = async (req, res) => {
  try {
    const song = await songModel.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ error: "Song not found" });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: "Could not retrieve the song" });
  }
};

const updateSong = async (req, res) => {
  try {
    const song = await songModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: "Could not update the song." });
  }
};

const deleteSong = async (req, res) => {
  try {
    await songModel.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: "Could not delete the song." });
  }
};

module.exports = { createSong, allSongs, singleSong, updateSong, deleteSong };
