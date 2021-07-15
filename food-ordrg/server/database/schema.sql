DROP DATABASE IF EXISTS food;

CREATE DATABASE food;

USE food;

CREATE TABLE restaurent (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) ,
  imageUrl varchar(250) ,
  PRIMARY KEY (ID)
);

CREATE TABLE sandwichMc(
    id int NOT NULL AUTO_INCREMENT,
  name varchar(50) ,
  imageUrl varchar(250) ,
  price varchar(50) ,
  PRIMARY KEY (ID)
);

CREATE TABLE sandwichKfc(
    id int NOT NULL AUTO_INCREMENT,
  name varchar(50) ,
  imageUrl varchar(250) ,
  price varchar(50) ,
  PRIMARY KEY (ID)
);

INSERT INTO restaurent (name, imageUrl) VALUES ("McDonalds","https://www.retaildetail.eu/sites/default/files/news/shutterstock_1181606473.jpg");
INSERT INTO restaurent (name, imageUrl) VALUES ("KFC","https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg");


INSERT INTO sandwichMc (name, imageUrl,price) VALUES ("burger","https://www.verdictfoodservice.com/wp-content/uploads/sites/31/2020/03/McDonald%E2%80%99s-11thMarch.jpg","400DTN");
INSERT INTO sandwichMc (name, imageUrl,price) VALUES ("cheeseburger","https://recipes.net/wp-content/uploads/2020/03/original-mcdonald-cheeseburger.jpg","250DTN");


INSERT INTO sandwichKfc (name, imageUrl,price) VALUES ("chicken","https://rachnacooks.com/wp-content/uploads/2018/04/kfchickendrumsticks3-500x500.jpg","30DTN");
INSERT INTO sandwichKfc (name, imageUrl,price) VALUES ("popcorn chicken","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/popcorn-chicken-1586187101.jpg","10DTN");

--  *    mysql -u root -p < server/database-mysql/schema.sql

