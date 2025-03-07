-- Seed Users
INSERT INTO tblUser (name, surname, email) VALUES ("Carlo", "Rossi", "carlorossi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Luca", "Verdi", "lucaverdi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Sandra", "Neri", "sandraneri@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Alice", "Bianchi", "alicebianchi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Marco", "Rossi", "marcorossi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Matteo", "Verdi", "matteoverdi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Emilia", "Bianchi", "emiliabianchi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Vania", "Verdi", "vaniaverdi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Giovnni", "Neri", "giovannineri@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Cassandra", "Rossi", "cassandrarossi@email.com");
INSERT INTO tblUser (name, surname, email) VALUES ("Davide", "Bianchi", "davidebianchi@email.com");

-- Seed Intervals

INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (1, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (1, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (2, "2025-10-01", "2025-10-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (2, "2025-05-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (2, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (2, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (2, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (4, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (3, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (3, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (5, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (6, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (7, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (8, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (9, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (10, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (11, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (11, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (7, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (9, "2025-06-01", "2025-07-24");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (10, "2025-12-01", "2025-12-31");
INSERT INTO tblInterval (user_id, start_date, end_date) VALUES (8, "2025-06-01", "2025-07-24");

-- Seed Goals

INSERT INTO tblGoal (description, interval_id) VALUES ("Focus on your breathing.", 1);
INSERT INTO tblGoal (description, interval_id) VALUES ("Relax your muscles", 2);
INSERT INTO tblGoal (description, interval_id) VALUES ("Experience tranquillity.", 3);
INSERT INTO tblGoal (description, interval_id) VALUES ("Find your balance.", 5);
INSERT INTO tblGoal (description, interval_id) VALUES ("Meditate for 15 minutes.", 10);
INSERT INTO tblGoal (description, interval_id) VALUES ("Meditate for 45 minutes.", 7);
INSERT INTO tblGoal (description, interval_id) VALUES ("Focus on concentration.", 4);
INSERT INTO tblGoal (description, interval_id) VALUES ("Experience balance.", 8);
INSERT INTO tblGoal (description, interval_id) VALUES ("Meditate for 30 minutes.", 6);
