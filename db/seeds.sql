USE employeeDB;

INSERT INTO department(name)
VALUES ("HR"), ("Marketing");

INSERT INTO roles(title,salary,department_id)
VALUES("Manager",8910,1 ),("Team Lead",4579,1)

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("John", "Jones", 1, NULL), ("Tim", "Thomas", 2, 1), ("Nick", "House", 3, 1)