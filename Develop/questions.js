const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const employeeList = [];

function managerFirst() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fullName",
        message: "please enter manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "please enter manager's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "please enter manager's email:",
      },
      {
        type: "input",
        name: "officeNum",
        message: "please enter manager's office number:",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.fullName,
        answers.id,
        answers.email,
        answers.officeNum
      );
      let addEmployee = employeeList.push(manager);
      return addEmployee;
    });
}

function newEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fullName",
        message: "please enter engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "please enter engineer's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "please enter engineer's email:",
      },
      {
        type: "input",
        name: "officeNum",
        message: "please enter engineer's office number:",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.fullName,
        answers.id,
        answers.email,
        answers.officeNum
      );
      let addEmployee = employeeList.push(engineer);
      return addEmployee;
    });
}

function newIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "fullName",
        message: "please enter intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "please enter intern's ID:",
      },
      {
        type: "input",
        name: "email",
        message: "please enter intern's email:",
      },
      {
        type: "input",
        name: "officeNum",
        message: "please enter intern's office number:",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.fullName,
        answers.id,
        answers.email,
        answers.officeNum
      );
      let addEmployee = employeeList.push(intern);
      return addEmployee;
    });
}

function addEmployee() {
  inquirer.prompt([{}]);
}
