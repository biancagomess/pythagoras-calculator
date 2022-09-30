// import the express
const express = require('express');

//init the express
const app = express();

// define which port starts the server
const PORT = process.env.PORT || 8080;

// define the path of directory
app.use(express.static(__dirname + '/dist/pythagoras-calculator'));

// all requisition call the index.html
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/pythagoras-calculator/index.html');
});

// start the server
app.listen(PORT, () => {
  console.log("The Server starts in port " + PORT);
});
