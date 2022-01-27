const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const open = require("open");
const data = require("./about");
const chalk = require("chalk");

const options = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open(`mailto:${data.email}`);
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: `Contact me on ${chalk.magentaBright.bold("Discord")}?`,
        value: () => {
          open(`https://discord.com/users/${data.discord.id}`);
          console.log("\nDone, see you soon at Discord.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Bye.\n");
        },
      },
    ],
  },
];

module.exports = () => prompt(options).then((answer) => answer.action());
