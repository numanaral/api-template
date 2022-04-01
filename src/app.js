const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');

const app = express();

app.set('json spaces', '\t');
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Halo 👋' }));

module.exports = app;
