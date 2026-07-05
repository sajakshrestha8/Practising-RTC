// Log builder

const app = require("express")();
const PORT = 8080;
const cors = require("cors");

const buildLogs = require("./buildlog");

app.use(cors());

app.get("/", (_request, response) => response.json("Hello!!"));

app.get("/startBuild", (_request, response) => {
  response.setHeader("Content-Type", "text/event-stream");

  let index = 0;

  const sendNextLog = () => {
    if (index >= buildLogs.length) {
      response.end();
    }

    const responseMessage = buildLogs[index].message;

    response.write(`data: ${responseMessage}\n`);

    index += 1;

    setTimeout(sendNextLog, buildLogs[index].delay);
  };

  sendNextLog();
});

app.listen(PORT, () => console.log("Server is running in port: ", PORT));
