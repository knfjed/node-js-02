var http = require("http");
var fs = require("fs");

var server = http.createServer((req, res) => {
  var target = "";
  switch (req.url) {
    case "/":
      target = "./index.html";
      break;

    case "/next":
      target = "./next.html";
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("err");
      return;
  }

  fs.readFile(target, "utf-8", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

server.listen(1234);
console.log("サーバが起動しました！");
