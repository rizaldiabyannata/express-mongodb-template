const express = require("express");
const router = express.Router();

// import routes
router.use("/test", (req, res) => {
  res.send("Test route is working");
});

module.exports = router;
