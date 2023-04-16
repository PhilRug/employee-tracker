const inquirer = require('inquirer')
const EmployeeDb = require('./db/')

//options for node
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
        case options[3]: addDepartment();
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

//view employee_db department table
async function viewDepartments() {
    const answer = 'SELECT * FROM  department';
    res = await db.query(answer);    
    console.table(res);
    launch();
}

//view employee_db role table
async function viewRoles() {
    const answer = 'SELECT role.id, role.title, role.salary, department.name AS department_name FROM role INNER JOIN department ON role.department_id=department.id';
    res = await db.query(answer);
    console.table(res);
    launch();
}

//view employee_db employee table
async function viewEmployees() {
    const answer = 'select emp.id, emp.first_name, emp.last_name, role.title as job_title, department.name as department_name, role.salary as salary, emp.manager_id from employee as emp inner join role on emp.role_id=role.id inner join department on role.department_id=department.id';
    res = await db.query(answer);
    console.table(res);
    launch();
}

//add department in employee_db
async function addDepartment() {
    const answer = await inquirer.prompt ([{
        name: 'name',
        type: 'input',
        message: 'Enter Department Name',
        validate: (name) => {return name != ''}
    }]);
    const sql = 'INSERT INTO department SET ?';
    await db.query(sql,
        {
            name: answers.name
        }
    );
    console.log('\nAdded department ' + answer.name + ' to the database\n');
    launch();
}

//add role in employee_db
async function addRole() {
    const departments = await db.query(`SELECT id, name FROM department`);
    const dept_list = departments.map(function (x) { return x.name });
    const answer = await inquirer.prompt ([
        {
        name: 'name',
        type: 'input',
        message: 'Enter Role Name',
        validate: (name) => {return name != ''}
        },
        {
        name: 'salary',
        type: 'input',
        message: 'Enter salary',
        validate: (answer) => {
            const num = RegExp('/^\d+$/');
            if(!num.test(answer)) {
                return 'not valid!';
            }}
        },
        {
        name: 'choice',
        type: 'list',
        message: 'Enter a department for this role:',
        choices: dept_list
        }
]);
    const sql = 'INSERT INTO department SET ?';
    await db.query(sql,
        {
            title: answers.name,
            salary: parseFloat(answers.salary),
            department_id: getRecordId(departments, 'name', answers.choice)
        }
    );
    console.log('\nAdded Role ' + answer.name + ' to the database\n');
    launch();
}
//add employee in employee_db
async function addEmployee() {
    const roless = await db.query(`SELECT id, name FROM role`);
    const role_list = roles.map(function (x) { return x.name });
}