const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const songRouter = require("./songRouter");
const app = express();
const PORT = 5000;

mongoose.connect(
  "mongodb+srv://deva:1310@nodeexpresscluster.hhsyciv.mongodb.net/musics?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/songs", songRouter);
