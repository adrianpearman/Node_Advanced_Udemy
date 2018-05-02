// unlike the default function calls, libuv deligates these tasks to the OS as it has no default way fo applying with the thread pool 

const https = require('https')

const start = Date.now()

doRequest = () => {
  https.request('https://www.google.com', res => {
    res.on('data', ()=> {})
    res.on('end', ()=> {
      console.log(Date.now() - start)
    })
  }).end()
}

doRequest()
doRequest()
doRequest()
doRequest()
doRequest()
doRequest()