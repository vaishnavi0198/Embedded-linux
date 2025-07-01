const http = require("http");
const url = require("url");

const motivationalQuotes = [
  "Rich.",
  "Rich.",
  "Rich.",
  "Rich.",
  "Rich.",
  "Rich.",
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/plain");

  if (pathname === "/about_me") {
    res.statusCode = 200;
    res.end("Hi! I am Vaishnavi Kaushik, a future billionaire.");
  } else if (pathname === "/motivation") {
    const quote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
    res.statusCode = 200;
    res.end(`${quote}`);
  } else if (pathname === "/time") {
    const now = new Date().toLocaleString();
    res.statusCode = 200;
    res.end(`${now}`);
  } else if (pathname === "/") {
    res.statusCode = 200;
    res.end(
      "This is a simple Node.js web server running on a Raspberry Pi. Endpoints for About, Motivation, and Time."
    );
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
