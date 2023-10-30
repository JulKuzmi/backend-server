const getUsers = require("./modules/users");
const http = require("http");

const server = http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const query = url.searchParams;

  if (query.toString() !== "") {
    if (query.has("hello")) {
      const name = query.get("hello");
      if (name) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(`Hello, ${name}!`);

        return;
      } else {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.end("Enter a name");

        return;
      }
    } else {
      response.writeHead(500);
      response.end();

      return;
    }
  }

  if (url.pathname === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(getUsers());

    return;
  }

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!");
});

server.listen(3003, () => {
  console.log("Server was started at http://127.0.0.1:3003");
});
