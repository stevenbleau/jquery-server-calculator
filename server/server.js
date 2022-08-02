const express = require('express');
const app = express();
const PORT = 5000;

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded());







app.listen(PORT, () => {
    console.log('listening on port', PORT)
});