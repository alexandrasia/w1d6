var fs = require("fs");

// Asynchronous read
fs.readFile(process.argv[2], function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});