// Using Inquirer and connection
const inquirer = require('inquirer');
const db = require("./db/connection")


//  Questions prompt with avialble options

function getInfo() {
    inquirer.prompt([
        // Start questoin prompt
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
                // switch cases for each prompt option
                case "New Department":
                    addDepartment();
                    break;
                case "New Role":
                    addRole();
                    break;
                case "New Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "View Departments":
                    viewDepartment();
                    break;
                case "View Employees":
                    viewEmployees();
                    break;
                case "View Roles":
                    viewRoles();
                    break;
                default:
                    // end databse connection
                    db.end()
                    process.exit(0)
            }
        })
};


// Department Questions
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the Name of the Department",

        },
        // Takes the question answer and using it to query.
    ]).then((answers) => {
        db.query("INSERT INTO department(name) VALUES (?)", [answers.department], function (err, data) {
            if (err) throw err;
            console.table(data)
            getInfo()
        })


    })
};

// Role questionaire
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Title ",

        },
        {
            type: "input",
            name: "salary",
            message: "What is the Roles Salary?",

        },
        {
            type: "list",
            choices: [
                {
                    name: 'Technology',
                    value: 1
                },
                {
                    name: "Legal",
                    value: 2
                },
                {
                    name: "Marketing",
                    value: 3
                }
            ],
            name: "department_id",
            message: "What is the Name of the Department ID?",

        }

    ]).then((answers) => {
        db.query("INSERT INTO roles(title,salary,department_id) VALUES(?,?,?)", [answers.title, answers.salary, answers.department_id],
            function (err, data) {
                if (err) throw err;
                console.table(data)
                getInfo()
            })

    })

}

// Employee question list
function addEmployee() {
    
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the Employee's First Name",

        },
        {
            type: "input",
            name: "last_name",
            message: "What is the Employee's Last Name",

        },
        {
            type: "list",
            choices: [
                
                {
                    name: '1: Manager',
                    value: 1
                },
                {
                    name: '2:Team Leader',
                    value: 2
                },
                {
                    name: '3: Intern',
                    value: 3
                }
            ],
            name: "role_id",
            message: "What is the Employee's Role ID number?",

        },
        {
            type: "list",
            choices: [
                {
                    name: 'Not Applicable',
                    value: null
                },
                {
                    name: "John Jones",
                    value: 1
                },
                {
                    name:"Derrick Fisher",
                    value: 3
                },
                {
                    name: "Homer Simpson",
                    value: 5
                }
            ],

            name: "manager_id",
            message: "What is the Employee's Manager ID?",

        }
       
    ]).then((answers) => {
        db.query("INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES(?,?,?,?)", [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
            function (err, data) {
                if (err) throw err;
                console.table(data)
                getInfo()
            })
    })
};

// Query to Show all departments
function viewDepartment() {
    db.query("SELECT * FROM department",
        function (err, data) {
            if (err) throw err;
            console.table(data)
            getInfo()
        })
};

// Query to Show all roles
function viewRoles() {
    db.query("SELECT * FROM roles",
        function (err, data) {
            if (err) throw err;
            console.table(data)
            getInfo()
        })
};

// Query to Show all Employees
function viewEmployees() {
    db.query("SELECT * FROM employee",
        function (err, data) {
            if (err) throw err;
            console.table(data)
            getInfo()
        })
};

// Function to update employees roles
function updateRole() {
    inquirer.prompt([
        {
            type: "list",
            choices: [
                {
                    name: "John Jones",
                    value:1
                },
                {
                    name:"Tim Thomas",
                    value:2
                },
                {
                    name:"Derrick Fisher",
                    value:3
                },
                {
                    name:"Nick House",
                    value:4
                },
                {
                    name:"Homer Simpson",
                    value:5
                },
                {
                    name:"Bart Simpson",
                    value:6
                },
            ],
            name: "employee",
            message: "What employee are you updating?",
    },
    {
        type: "list",
        choices: [
          {
                name: '1: Manager',
                value: 1
            },
            {
                name: '2: Leader',
                value: 2
            },
            {
                name: '3: Intern',
                value: 3
            }
        ],
        name: "role_id",
        message: "What is the Employee's New Role ID number?",

    }
    ]).then((answers) => {
        // Querying for employees list to update the roles id or that employee
    db.query("UPDATE employee SET role_id = ? WHERE id = ?", [answers.role_id, answers.employee], (err,data) =>{
        if(err) throw err;
        console.table(data)
        getInfo()
    })
})
};


// Function to start prompt
getInfo()