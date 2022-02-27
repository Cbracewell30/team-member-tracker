-- Deleting the database if it exsit
DROP DATABASE IF EXISTS employeeDB;
-- creating a new database
CREATE DATABASE employeeDB;
-- Using the newly created database
USE employeeDB;

-- Creating department table
CREATE TABLE department (
    -- setting the items of the tables. ID is the primary key that auto increases
   id INTEGER AUTO_INCREMENT PRIMARY KEY,
   -- name can have 30 characters
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
        -- title can have 30 characters
     title VARCHAR(30) NOT NULL,
     -- Salary allows ten character and 2 decimals
     salary DECIMAL(10,2),
     -- Department Id is the foreign key that connects to department table by the ID
    department_id INTEGER references department(id)
);

CREATE TABLE employee(
    
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
     -- name can have 30 characters
    first_name VARCHAR(30) NOT NULL,
     -- name can have 30 characters
    last_name VARCHAR(30) NOT NULL,
    -- role Id is the foreign key that connects to roles table by the ID
    role_id  INTEGER references roles(id),
    -- Manager Id is the foreign key that connects back to employee table to show what manager the employees is under
    manager_id INTEGER references employee(id) on Delete set NULL
);


