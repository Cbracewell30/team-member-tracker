const Iquirer = require('inquirer');


// creating empty arrays
let departmentArray = []
let rolesArray = []
let employeesArray = []

//  Questions prompt with avialble options

function getInfo(){
    inquirer.prompt([
        {
            type:"list",
            name:"userMenu",
            message: "What would you like to do?",
            choices: ["Add Department","Add Role", "Add Employee", "Update Employee Role","View Departments","View Employees","View Roles","Exit Application"]
        }

  ])
  // depending on the answer the application follows the correct path
  .then((answers) => {
      switch(answers.userMenu){
         case "Add Department":
              addManager();
              break;
       case "Add Role":
                addEngineer();
                break;
        case "Add Employee":
                    addIntern();
                    break;
             default :
            createDoc();
      }
  })
};


// Manger questionaire 
function addManager() {
inquirer.prompt([
    {
        type:"input",
        name:"name",
        message: "What is the Employee's Name",
        
    },
    {
        type:"input",
        name:"id",
        message: "What is the Employee's ID number?",
        
    },
    {
        type:"input",
        name:"email",
        message: "What is the Employee's email address?",
        
    },
    {
        type:"input",
        name:"office",
        message: "What is the Employee's office number?",
        
    },
    // create manager object with answers
]).then((answers) => {
    let newManager = new Manager(answers.name,answers.id,answers.email,answers.office)
    managerArray.push(newManager);
    getInfo()
})
}

// Engineer questionaire

function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message: "What is the Engineer's Name",
            
        },
        {
            type:"input",
            name:"id",
            message: "What is the Engineer's ID number?",
            
        },
        {
            type:"input",
            name:"email",
            message: "What is the Engineer's email address?",
            
        },
        {
            type:"input",
            name:"github",
            message: "What is the Engineer's GitHub username?",
            
        },
        // create engineer object with answers
    ]).then((answers) => {
        let newEngineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
        engineerArray.push(newEngineer);
       getInfo()
    })
    
}
    
//Intern questionaire
    function addIntern() {
        inquirer.prompt([
            {
                type:"input",
                name:"name",
                message: "What is the Intern's Name",
                
            },
            {
                type:"input",
                name:"id",
                message: "What is the Intern's ID number?",
                
            },
            {
                type:"input",
                name:"email",
                message: "What is the Intern's email address?",
                
            },
            {
                type:"input",
                name:"school",
                message: "What is the Intern's school name?",
                
            },
            // create intern object with answers
        ]).then((answers) => {
            let newIntern = new Intern(answers.name,answers.id,answers.email,answers.school)
            internArray.push(newIntern);
           
           getInfo()
        })
    }