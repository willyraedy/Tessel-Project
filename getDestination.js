const https = require('https');

function urlGen(str) {
    const query = strParser(str.trim());
    return "/maps/api/geocode/json?address=" + query + "&key=AIzaSyC48wuJycPskG7D0PG0Ssq4TPGXMJC3pbM";
}

function strParser(str) {
    return str.replace(/\s+/g, "_").replace(/\W/g, '');
}





module.exports = function(str) {
    const path = urlGen(str);
    const options = {
        hostname: "maps.googleapis.com",
        port: "443",
        path: path,
        method: 'GET'
    }

    return new Promise(function (resolve, reject) {

        /*const req = */https.request(options, (res) => {
            let chunks = new Buffer([])
            res.on('data', (d) => {
                chunks = Buffer.concat([chunks, d]);
            });

            res.on('end', () => {
                var data = JSON.parse(chunks.toString("utf8"));
                resolve(data.results[0].geometry.location);
            })

            res.on('error', (err) => {
                reject(err);
            });

        }).end();
    })
}
