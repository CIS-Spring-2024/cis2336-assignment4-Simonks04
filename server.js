//server.js
const express = require('express');
const app = express();
const PORT = 3000;

//Body parser middleware to handle from dat
app.use(express.static('public'));

//GET request to server to order form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

//POST request to handle from submission
app.post('/submit', (req, res) => {
    const { item1, item2, item3 } = req.body;

    const total = parseInt(item1) + parseInt(item2) + parseInt(item3);

    res.send(`Total: $${total}`);
});

//Server listing 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
