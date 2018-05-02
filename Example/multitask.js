process.env.UV_THREADPOOL_SIZE = 10;

const https = require("https");
const crypto = require("crypto");
const fs = require('fs')
const start = Date.now();

// calculates the time it takes for a request to google
doRequest = () => {
  https.request("https://www.google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log('HTTPS Response Time:', Date.now() - start);
      });
    }).end();
};

// calculates the time for the crypto function to complete
doHash = () => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
}

doRequest()

// reads the contents of the page
fs.readFile('multitask.js', 'utf8', () => {
  console.log('FS:', Date.now() - start)
})

doHash()
doHash()
doHash()
doHash()