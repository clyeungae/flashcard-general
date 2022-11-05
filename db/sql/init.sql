START TRANSACTION;

CREATE DATABASE IF NOT EXISTS `dev`;

USE `dev`;

CREATE TABLE IF NOT EXISTS `flashcard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hint` varchar(255) NOT NULL,
  `answer` varchar(1000) NOT NULL,
  `ctime` int(10) NOT NULL,
  `utime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

COMMIT;
