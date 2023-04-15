USE employee_db;

INSERT INTO department (name)
VALUES ("floor employee"),
       ("management");
       
INSERT INTO role (title, salary, department_id)
VALUES ("sales associate", 30000.00, 1),
       ("customer service", 34000.00, 1),
       ("store manager", 40000.00, 2),
       ("stocker", 32000.00, 1),
       ("regional manager", 60000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Johnson", 1, 3),
       ("Michael", "Lee", 2, 3),
       ("Emily", "Davis", 3, 5),
       ("Juan", "Rodriguez", 4, 3),
       ("Aisha", "Patel", 5, NULL);