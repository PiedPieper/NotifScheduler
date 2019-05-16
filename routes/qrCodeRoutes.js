const dynamoDB = require("../services/dynamoDB");
module.exports = app => {
  // Our QR Code API returns an object in JSON form with the
  // Location and level of the placed QR Code
  // Must query dynamo-db
  app.get("/qr", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    console.log(req.query);

    const loc_info = await dynamoDB.dynamo_lookup_loc(req.query.qr_code);

    res.send(loc_info);
  });
};
