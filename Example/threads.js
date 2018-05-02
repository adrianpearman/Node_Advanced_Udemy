// This will only utilize 2 of the 4 threads available in the thread pool
process.env.UV_THREADPOOL_SIZE = 2

const crypto = require('crypto')

const start = Date.now()

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

// both functions will be invoked at the same time
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

// due to Node not being completely single threaded, the response from the functions are the same; where if node was single threaded, the response times would be double as the first function would run then the second function
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});