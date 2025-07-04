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

  res.writeHead(200, { "Content-Type": "text/html" });

  if (pathname === "/about_me") {
    res.statusCode = 200;
    res.end(`
      <html>
        <body style="background-color: #f0f8ff; color: #333;">
          <h1 style="color: #4CAF50;">Hi! I am Vaishnavi Kaushik,</h1>
          <p style="font-size: 20px;">a future billionaire.</p>
        </body>
      </html>
    `);
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
