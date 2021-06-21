const chalk = require("chalk")

const validator = require("validator")

console.log(chalk.blue("Hi Arif"))

const res = validator.isEmail("arif@gmail.com")
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));