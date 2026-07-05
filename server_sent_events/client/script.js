const eventSource = new EventSource("http://localhost:8080/startBuild");
const logMessage = document.getElementById("logMessage");

eventSource.onmessage = (event) => {
  const breakline = document.createElement("br");
  logMessage.append(event.data, breakline);

  document.body.append(logMessage);
};

console.log(eventSource.readyState);

if (eventSource.readyState === EventSource.CLOSED) {
  eventSource.close();
}
