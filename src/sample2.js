// ①requireオブジェクトでhttpオブジェクトを生成する
// ②require関数でfsオブジェクトを生成
var http = require("http");
var fs = require("fs");

// ②httpオブジェクトのareateServerオブジェクトでサーバオブジェクトを生成する
// ③サーバにリクエストがあった際に動作するコールバック関数を定義する
// ③fsオブジェクトのreadFileメソッドでhtmlファイルを読み込み
var server = http.createServer((_, res) => {
  fs.readFile("./temp.html", "utf-8", (_, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // writeメソッドでhttpコンテンツを書き出す
    res.write(data);
    // endメソッドで出力を完成させる
    res.end();
  });
});

// ④ポート番号を指定してサーバを待ち受け状態にする
server.listen(3000, () => console.log("サーバを起動しました"));
