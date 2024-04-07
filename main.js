#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; // npm i chalk (terminal command for import)
let todoList = [];
let condition = true;
// \n mean Next line
// \t mean Title case
//print welcome message
console.log(chalk.yellowBright.bold("\n \t  Welcome to Siddiqa Badar Todo-shopping-list App \n"));
//Updated Todo-List
//Arrow function
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.magenta("select an option you want to do"),
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-List",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// function to add new task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.redBright("Enter your new task:"),
        },
    ]);
    todoList.push(newTask.task);
    console.log(chalk.blue(`\n ${newTask.task} Task added successfully in your Todo-List`));
};
// Funtion to view all todo-list task
let viewTask = () => {
    console.log(chalk.bgCyanBright.bold("\n Your Todo-List: \n"));
    todoList.forEach((task, index) => {
        console.log(chalk.green(`${index + 1}: ${task}`));
    });
};
// function to delete task
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.magenta("Enter the 'index no.' of the task you want to delete:"),
        },
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(chalk.blue(`\n ${deleteTask} this task is successfully delete`));
};
// function to update task
let updateTask = async () => {
    await viewTask();
    let updateTask = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.magenta("Enter the 'index no.' of the task you want to update:"),
        },
        {
            name: "newTask",
            type: "input",
            message: chalk.magenta("Now Enter new task name"),
        },
    ]);
    todoList[updateTask.index - 1] = updateTask.newTask;
    console.log(chalk.gray(`\n Task at index no. ${updateTask.index - 1} updated successfully [for updated list Check option: "View Todo-List"]`));
};
main();
//simple Todo-List
// while (condition) {
//   let addItem = await inquirer.prompt([
//     {
//       name: "list",
//       type: "input",
//       message: chalk.magenta("Enter your new item"),
//     },
//   ]);
//   todoList.push(addItem.list);
//   console.log(
//     chalk.blue.bold(`${addItem.list} Item added in Todo-List successfully`)
//   );
//   let addMoreItem = await inquirer.prompt([
//     {
//       name: "addmore",
//       type: "confirm",
//       message: chalk.greenBright("Do you want to add more item?"),
//       default: "false",
//     },
//   ]);
//   condition = addMoreItem.addmore;
// }
// console.log("Your updated Todo-list:" , todoList);
