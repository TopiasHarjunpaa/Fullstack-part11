const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("client/dist"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/hello", (request, response) => {
  response.json({ message: "Hello Persons!" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
