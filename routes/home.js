  const express = require('express');
  const router = express.Router();

  // Home route
  router.get("/", (req, res) => {
    res.send('This is the home directory solo el slash');
  });

  module.exports = router;