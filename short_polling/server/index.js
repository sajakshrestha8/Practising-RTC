const express = require("express");
const app = express();
let count = 0;
const cors = require("cors");

app.use(cors());
const PORT = 8080;

setInterval(() => {
  count += 1;
}, 5000);

app.get("/count", (req, res) => {
  res.send(count);
});

app.listen(PORT, () => console.log(`server in running in port ${PORT}`));
