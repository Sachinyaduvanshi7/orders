const express = require("express");
const PORT = 3001;

const app = express();

app.get("", (req, res) => {
  res.send("Message from order service-2");
});

app.listen(PORT, () => console.log("ORDER SERVICE STARTED"));
