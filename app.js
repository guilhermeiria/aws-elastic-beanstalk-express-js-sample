const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('F0r4 80z0 e ozoto!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
