USE employeeDB;

INSERT INTO department(name)
VALUES ("Technology"), ("Legal"), ("Marketing");

INSERT INTO roles(title,salary,department_id)
VALUES("Manager",8910,1 ),("Team Lead",4579,2),("Intern",4562,3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("John","Jones", 1, NULL), ("Tim","Thomas", 2, 1),("Derick","Fisher", 1, NULL), ("Nick","House", 3, 2), ("Homer","Simpson",1,NULL ),("Bart","Simpson",3,5);

