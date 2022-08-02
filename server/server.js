const express = require('express');
const app = express();
const PORT = 5000;

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded());



//VARIABLES
let history = [];



//LOGIC:

//PERFORM CALCULATIONS



//AJAX OPERATIONS:
//1. RECEIVE POST INPUT OBJECT AND ADD TO ARRAY
//2. SEND CALCULATION HISTORY







app.listen(PORT, () => {
    console.log('listening on port', PORT)
});