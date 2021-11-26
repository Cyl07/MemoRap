-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `artiste` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `line` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  artiste_id int null,
  text VARCHAR(500),
  foreign key (artiste_id) references artiste(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `round` (
  id int not null auto_increment primary key,
  st_line_id int null,
  nd_line_id int null,
  foreign key (st_line_id) references `line`(id),
  foreign key (nd_line_id) references `line`(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into artiste (name) values 
("eminem"),
("tupac");

insert into `line` (artiste_id, text) values
(1, "À l'étranger, t'es un étranger, ça sert à rien d'être raciste (simple)"),
(1, "Les mecs les plus fous sont souvent les mecs les plus tristes (basique)"),
(2, "Faut jamais céder à la pression du groupe"),
(2, "D'tfaçons, quand tu fais du mal, au fond, tu ressens du doute");

insert into `round` (st_line_id, nd_line_id) values
(1, 2),
(3, 4);
