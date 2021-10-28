const inquirer = require('inquirer');
const mysql = require('mysql2');
const table = require("console.table");



const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'jbenak987',
      database: 'employeelist_db'
    },
    console.log(`Connected to the employeelist_db database.`)
  );

db.connect(function(err){
    if(err) throw err;
    mainQuestion();
})
  

const employeeRole = [
    {
        type: 'list',
        message: 'What would you like to add?',
        choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        name: 'choice',
    },
];

const departmentQuestions = [
    {
    type: 'input',
    message: 'What is your department name?',
    name: 'name',
    },

];

const roleQuestions = [
    {
        type: 'input',
        message: 'What is your role title?',
        name: 'title',
        },
    {
    type: 'input',
    message: 'What is your role salary?',
    name: 'salary',
    },
    {
    type: 'input',
    message: 'What is your department Id?',
    name: 'department_id',
    },
];

const employeeQuestions = [
    {
        type: 'input',
        message: 'What is your employees first name?',
        name: 'first_name',
        },
    {
    type: 'input',
    message: 'What is your employees last name?',
    name: 'last_name',
    },
    {
    type: 'input',
    message: 'What is your role Id?',
    name: 'role_id',
    },
];

const updateEmployeeRoleQs = [
    { 
        type: 'input',
        message: "Which employee's role would you like to update",
        name: 'update',

    },
    {
        type: 'input',
        message: 'Which role would you like to assign to the employee selected?',
        name: 'newRole',
    }

];


function mainQuestion() {
    inquirer.prompt(employeeRole).then(function(answers){
        if (answers.choice === 'View all Departments')
        viewAllDepartments();
        else if (answers.choice === 'View all Roles')
        viewAllRoles();
        else if (answers.choice === 'View all Employees')
        viewAllEmployees();
        else if (answers.choice === 'Add a Department')
        departmentQs();
        else if (answers.choice === 'Add a Role')
        roleQs();
        else if (answers.choice === 'Add an Employee')
        employeeQs();
        else if (answers.choice === 'Update an Employee Role')
        updateEmployeeRole();

    })
}

function departmentQs() {
    inquirer.prompt(departmentQuestions).then(function(answers){
        db.query('INSERT INTO department SET ?', answers, function(err, results) {
            if (err) throw err;
            console.log(results);
            mainQuestion();
        })
        
    })
}


function employeeQs() {
    inquirer.prompt(employeeQuestions).then(function(answers){
        db.query('INSERT INTO employees SET ?', answers, function(err, results) {
            if (err) throw err;
            console.log(results);
            mainQuestion();
        })
        
    })
}

function roleQs() {
    inquirer.prompt(roleQuestions).then(function(answers){
        db.query('INSERT INTO role SET ?', answers, function(err, results) {
            console.log(results);
            if (err) throw err;
            mainQuestion();
        })
        
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        if (err) throw err;
        mainQuestion();
      });
}

function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        if (err) throw err;
        mainQuestion();
    });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        if (err) throw err;
        mainQuestion();
    });
}

function updateEmployeeRole() {
    inquirer.prompt(updateEmployeeRoleQs).then(function(answers){
        db.query('UPDATE employees SET role_id=? WHERE first_name= ?', [answers.newRole, answers.update], function(err, results) {
            if (err) throw err;
            console.table(results);
            mainQuestion();
        });
    });
}