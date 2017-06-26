const http = require('http');

const options = {
  hostname: '172.28.116.223',
  port: "3000",
  path: '/requeststop',
  method: 'GET'
}

module.exports = new Promise(function (resolve, reject) {
  http.request(options, (res) => {
    let dest
    res.on('data', (d) => {
      dest = d;
    });

    res.on('end', () => {
      resolve(dest);
    })

    res.on('error', (err) => {
      reject(err);
    });

  }).end();
});
