const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer");
const { compileFunction } = require('vm');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

function initPrompt() {
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Manage",
            "Exit"
        ]

}])
    .then(function (response) {
        switch (response.task) {
            case "View Departments":
                viewDepartments();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
                break;
            case "Add Department":
                addDepartment();
                break;  
            case "Add Role":
                addRole();
                break;              
            case "Add Employee":
                addEmployee();
                break;
            case "Manage":
                manage();
                break;
            case "Exit":
                console.log("See You Later Alligator!");
                connection.end();
                break;
 
        }
    })
}
