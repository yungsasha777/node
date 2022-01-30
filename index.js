const config = require('./config.json');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
let i = 0;

const filePath = path.join(__dirname, 'assets', 'text.txt');
fs.appendFileSync(filePath, `${config.products.toString().replace(/,/g, '\n')}`);