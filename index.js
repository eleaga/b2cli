const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('b2cli', { horizontalLayout: 'full' })
  )
);

// console.log(chalk.red('error msg'));
