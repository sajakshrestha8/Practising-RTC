// Log builder

const app = require("express")();
const PORT = 8080;
const cors = require("cors");

const buildLogs = require("./buildlog");

app.use(cors());

app.get("/", (_request, response) => response.json("Hello!!"));

let index = 0;

app.get("/startBuild", (_request, response) => {
  response.setHeader("Content-Type", "text/event-stream");

  const sendNextLog = () => {
    if (index > buildLogs.length - 1) {
      response.status(204).end();
      return;
    }

    const log = buildLogs[index];

    const responseMessage = buildLogs[index].message;

    response.write(`data: ${responseMessage}\n\n`);

    index += 1;

    setTimeout(sendNextLog, log.delay);
  };

  sendNextLog();
});

app.listen(PORT, () => console.log("Server is running in port: ", PORT));
