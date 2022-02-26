const Iquirer = require('inquirer');
const db= require("./db/connection")

// creating empty arrays
let departmentArray = []
let rolesArray = []
let employeesArray = []

//  Questions prompt with avialble options

function getInfo() {
    inquirer.prompt([
        {
            type: "list",
            name: "userMenu",
            message: "What would you like to do?",
            choices: ["New Department", "New Role", "New Employee", "Update Employee Role", "View Departments", "View Employees", "View Roles", "Exit Application"]
        }

    ])
        // depending on the answer the application follows the correct path
        .then((answers) => {
            switch (answers.userMenu) {
                case "New Department":
                    addDepartment();
                    break;
                case "New Role":
                    addRole();
                    break;
                case "New Employee":
                    addemployee();
                    break;
                case "Update Employee's Role":
                    updateRole();
                case "View Departments":
                    viewDepartment();
                case "View Employees":
                    viewEmployees();
                case "View Roles":
                    viewRoles();
                default:
                    // end databse connection
                    db.end()
                    process.exit(0)
            }
        })
};


// Manger questionaire 
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Employee's Name",

        },
        {
            type: "input",
            name: "id",
            message: "What is the Employee's ID number?",

        },
        {
            type: "input",
            name: "email",
            message: "What is the Employee's email address?",

        },
        {
            type: "input",
            name: "office",
            message: "What is the Employee's office number?",

        },
        // create manager object with answers
    ]).then((answers) => {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.office)
        managerArray.push(newManager);
        getInfo()
    })
}

// Engineer questionaire

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's Name",

        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID number?",

        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?",

        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?",

        },
        // create engineer object with answers
    ]).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        engineerArray.push(newEngineer);
        getInfo()
    })

}

//Intern questionaire
function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's Name",

        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID number?",

        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?",

        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school name?",

        },
        // create intern object with answers
    ]).then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        internArray.push(newIntern);

        getInfo()
    })
}