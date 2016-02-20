CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  `ID` int(240) NOT NULL AUTO_INCREMENT UNIQUE,
  `text` varchar(240) NOT NULL,
  `userID` int(10) NOT NULL,
  `roomID` int(10) NOT NULL,
  PRIMARY KEY (`ID`)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE `users` (
  `ID` int(10) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (`ID`)
);

CREATE TABLE `rooms` (
  `ID` int(10) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(25) NOT NULL UNIQUE,
  PRIMARY KEY (`ID`)
);


ALTER TABLE `messages` ADD CONSTRAINT `messages_fk0` FOREIGN KEY (`userID`) REFERENCES `users`(`ID`);

ALTER TABLE `messages` ADD CONSTRAINT `messages_fk1` FOREIGN KEY (`roomID`) REFERENCES `rooms`(`ID`);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

