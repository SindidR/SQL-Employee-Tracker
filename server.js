const express = require('express');
const mysql = require('mysql2');
const inquirer = import("inquirer");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = mysql.createConnection(
  {
    port: 3001,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

function prompt() {
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
    });
};
    function viewDepartments() {
        db.query('select * from department', function (err, results){
            console.log(results);
        })
    }
    function viewRoles() {
        db.query('select * from role', function (err, results){
            console.log(results);
        })
    }
    function viewEmployees() {
        db.query('select * from employee', function (err, results){
            console.log(results);
        })
    }
    function addDepartment() {
        inquirer.prompt ({
            name: "department",
            type:"input",
            message: "What department would you like to add?"
        }) 
        .then(function(response){
            db.query('INSERT INTO departments (name) VALUES(?)', function (err, results) {
            console.log(results);
        })
    },

    function addRole(title, salary, department_id) {
        inquirer.prompt ({
            name: "title",
            type:"input",
            message: "What is the title of the new role?"
        },
        {
        name: "salary",
        type:"input",
        message: "What is the salary of the new role?"
        },
        {
        name: "departmentId",
        type:"input",
        message: "What is the department of the new role?"
    }) 
    .then(function(response){
        db.query('INSERT INTO departments (name) VALUES(?)', function (err, results) {
        console.log(results);
    })
        })

    },
   // function addEmployee() {
      //  inquirer.prompt ({
     //       name: "employee",
     //       type:"input",
     //       message: "What department would you like to add?"
     //   },
        
     //   ) 
       // .then(function(response){
      //     db.query()
     //   });
        )};
prompt();