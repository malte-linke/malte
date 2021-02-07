#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const data = require('./about');
const boxen = require('boxen');
const open = require("open");
const prompt = inquirer.createPromptModule();
console.clear();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open(`mailto:${data.email}`);
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: `Join my ${chalk.magentaBright.bold("Discord")}?`,
                value: () => {
                    open(`http://discord.gg/${data.discord}`);
                    console.log("\nDone, see you soon at Discord.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Bye.\n");
                }
            }
        ]
    }
];

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.title}`,
        ``,
        `${chalk.bold("Twitter:")}   ${data.twitter}`,
        `${chalk.bold("GitHub:")}    ${data.github}`,
        `${chalk.bold("Contact:")}   ${data.contact}`,
        ``,
        `${chalk.white("My inbox is always open. Whether you have a")}`,
        `${chalk.white("question or just want to say hi, I will try ")}`,
        `${chalk.white("my best to get back to you!")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);


prompt(questions).then(answer => answer.action());;