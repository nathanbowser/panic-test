var http = require('http')
  , fs = require('fs')

http.createServer(function (req, resp) {
  if (req.url === '/c') {
    setTimeout(function () {
    fs.createReadStream('./soft-drinks.csv').pipe(resp)

    }, 2000)
  } else if (req.url === '/j') {
    fs.createReadStream('./soft-drinks.json').pipe(resp)
  } else if (req.url === '/large') {
    fs.createReadStream('./large.csv').pipe(resp)
  } else if (req.url === '/5xx') {
    resp.statusCode = '5xx'
    resp.end('Fail')
  }
}).listen(1337, 'dash-dev.com') 
