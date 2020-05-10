// // learned ConfigStore from https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
// const Configstore = require("configstore");
// const conf = new Configstore("ginit");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//array for all the answers
const employeeList = [];
//you will alway first need to input the one manager
managerFirst();
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
      //pushing the varibale into the array
      let addEmployee = employeeList.push(manager);
      return addEmployee;
    })
    //after than no more manager input
    .then(() => {
      addNewPerson();
    });
}

function addEngineer() {
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
    })
    .then(() => {
      //goes to the addNewPerson() and user has a choice if they want to add a new employee
      addNewPerson();
    });
}

function addIntern() {
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
    })
    //goes to the addNewPerson() and user has a choice if they want to add a new employee
    .then(() => {
      addNewPerson();
    });
}
// after every intern or engineer cli is answered it will alway come back to this function and you can choose to add a new person or render the input

function addNewPerson() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "add new employee",
        name: "addNewEmployee",
        choices: ["intern", "engineer", "done"],
      },
    ])
    //object destructuring
    .then(({ addNewEmployee }) => {
      //ternay operator
      return addNewEmployee === "intern"
        ? addIntern()
        : addNewEmployee === "engineer"
        ? addEngineer()
        : // im frustrated on how to connect all this to the htmldifhiasduh CHBvcujxYgvbuiadfshgyaiusdbgv
          render(employeeList);
    });
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct  classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
