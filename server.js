const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ZA_AI Backend Online");
});

app.post("/webhook", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    status: "received"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando");
});
