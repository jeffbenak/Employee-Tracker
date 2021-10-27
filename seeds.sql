INSERT INTO department (name)
VALUES ("Sales"),
VALUES ("Engineering"),
VALUES ("Finance"),
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", "100000", "1"),
VALUES ("Salesperson", "80000", "2"),
VALUES ("Lead Engineer", 150000, 3),
VALUES ("Software Engineer", 120000, 4),
VALUES ("Account Manager", 160000, 5),
VALUES ("Accountant", 125000, 6),
VALUES ("Legal Team Lead", 250000, 7),
VALUES ("Lawyer", 190000, 8),
VALUES ("Sales Lead", 100000, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
VALUES ("Mike", "Chan", 2, 1),
VALUES ("Ashley", "Rodriguez", 3, null),
VALUES ("Kevin", "Tupik", 4, 3),
VALUES ("Kunal", "Singh", 5, null),
VALUES ("Malie", "Brown", 6, 5),
VALUES ("Sarah", "Lourd", 7, null),
VALUES ("Tom", "Allen", 8, 7),
VALUES ("Sam", "Kash", 9, 3);

