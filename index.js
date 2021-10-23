const inquirer = require('inquirer');
const mysql = require('mysql2');



const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
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
    {
    type: 'input',
    message: 'What is your managers Id?',
    name: 'manager_id',
    },
];



function mainQuestion() {
    inquirer.prompt(employeeRole).then(function(answers){
        if (answers.choice === 'View all Departments')
        viewAllDepartments();
        else if (answers.choice === 'View all Roles')
        viewAllRoles();
        else if (answers.choice === 'View all Employees')
        viewAllEmployees();


    })
}

function departmentQs() {
    inquirer.prompt(departmentQuestions).then(function(answers){
        db.query('INSERT INTO department SET ?', answers, function(err, results) {
            console.log(results);
            mainQuestion();
        })
        
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        mainQuestion();
      });
}

function viewAllRoles() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        mainQuestion();
    });
}

function viewAllEmployees() {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        mainQuestion();
    });
}