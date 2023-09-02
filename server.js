const http = require("http");

const server = http.createServer((req, res) => {});

server.listen(3000, "localhost", () => {
  console.log("server running");
});
