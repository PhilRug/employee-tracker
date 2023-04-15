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
//start everything
async function launch() {
    answers = await inquirer.prompt([{
        type: 'list',
        message: 'What would you like to do?',
        name: 'choices',
        choices: options
    }]);
//choices in node
    switch(answers.choices) {
        case options[0]: viewDepartments();
        break;
        case options[1]: viewRoles();
        break;
        case options[2]: viewEmployees();
        break;
        case options[3]: addDepartments();
        break;
        case options[4]: addRole();
        break;
        case options[5]: addEmployee();
        break;
        case options[6]: updateRole();
        break;
        case options[7]: quit();
        break;
    }
}