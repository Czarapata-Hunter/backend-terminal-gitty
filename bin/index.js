const chalk = require("chalk");
const prompt = require("prompt-sync")();
const fetch = require("cross-fetch");
const cookie = require("cookie");

require("dotenv").config();

const { signInUser } = require("../auth-utils");

// async function loadPrompts() {
//   console.log(chalk.green("Welcome to Gitty!"));

//   let validUser = false;
//   let cookieInfo;
//   while (!validUser) {
//     const email = prompt(chalk.red("Hello! What is your Email? "));
//     console.log(chalk.green(`Hello ${email}`));
//     const password = prompt.hide("What is your password? ");
//   }
// }
const name = prompt(chalk.red("Welcome, what is your name? "));
console.log(
  chalk.green("Hello! ") +
    chalk.white(`${name} `) +
    chalk.green("what is your email?")
);
const email = prompt(chalk.red());
console.log(
  chalk.green("Thank you ") +
    chalk.white(`${name}`) +
    chalk.green(", you said '") +
    chalk.white(`${email}`) +
    chalk.green("', is this correct?")
);

const yesNo = prompt(
  chalk.yellow("(") +
    chalk.green("y") +
    chalk.yellow("/") +
    chalk.red("n") +
    chalk.yellow(")")
);
