const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const app = express();

const PORT = process.env.PORT || 5000;

app.set('view engine', 'pug');
app.use(morgan('tiny'));
app.use(express.static('public'))

// app.get('/', (req, res) => {

// })

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
