const inquirer = require('inquirer')
const EmployeeDb = require('./db/')

const options = [
    "View all Deparments", 
    "View All Roles", 
    "View All Employees",
    "Add Department",
    "Add Role",
    "Add Employee",
    "Update Employee Role",
    "Quit",
];