#! /usr/bin/env node
import inquirer from "inquirer";
 import chalk from "chalk";

 let todoList = [];
 let conditions = true;

 console.log(chalk.magenta.italic("\n \t welcome to CodewithFarwa - Todo-List Application\n "));

 while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message:chalk.blueBright ("Enter your New Task : ")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List Successfully`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellow("Do you want to add more task ?"),
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmore       
 }
 console.log("Your updated Todo-List:" , todoList);
 
 
 