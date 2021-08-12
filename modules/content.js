const chalk = require("chalk");
const data = require("./about");
const boxen = require("boxen");

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.title}`,
    ``,
    `${chalk.bold("Twitter:")}   ${data.twitter}`,
    `${chalk.bold("GitHub:")}    ${data.github}`,
    `${chalk.bold("Discord:")}   ${data.discord.username}`,
    `${chalk.bold("Contact:")}   ${data.contact}`,
    ``,
    `${chalk.white("My inbox is always open. Whether you have a")}`,
    `${chalk.white("question or just want to say hi, I will try ")}`,
    `${chalk.white("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

module.exports = () => console.log(me);
