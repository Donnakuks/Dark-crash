// Import the required modules
const express = require("express");
const app = express();

// Set the port from the environment variable or a default value
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
