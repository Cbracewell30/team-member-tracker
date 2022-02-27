-- Tells system with database to use
USE employeeDB;

-- adding values into the department
INSERT INTO department(name)
VALUES ("Technology"), ("Legal"), ("Marketing");

-- Adding values to the roles
INSERT INTO roles(title,salary,department_id)
VALUES("Manager",8910.45,1 ),("Team Lead",4579.22,2),("Intern",4562.99,3);

-- Adding employees to the table
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("John","Jones", 1, NULL), ("Tim","Thomas", 2, 1),("Derick","Fisher", 1, NULL), ("Nick","House", 3, 3), ("Homer","Simpson",1,NULL ),("Bart","Simpson",3,5);

