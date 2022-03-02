-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: posterr
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `following`
--

DROP TABLE IF EXISTS `following`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `following` (
  `KeyUser` int NOT NULL,
  `KeyFollowing` int NOT NULL,
  PRIMARY KEY (`KeyUser`,`KeyFollowing`),
  KEY `KeyFollowing` (`KeyFollowing`),
  CONSTRAINT `following_ibfk_1` FOREIGN KEY (`KeyUser`) REFERENCES `user` (`KeyUser`),
  CONSTRAINT `following_ibfk_2` FOREIGN KEY (`KeyFollowing`) REFERENCES `user` (`KeyUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following`
--

LOCK TABLES `following` WRITE;
/*!40000 ALTER TABLE `following` DISABLE KEYS */;
INSERT INTO `following` VALUES (3,1),(1,3),(1,4),(3,4),(3,5);
/*!40000 ALTER TABLE `following` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `KeyPost` int NOT NULL AUTO_INCREMENT,
  `KeyUser` int NOT NULL,
  `Post` varchar(777) NOT NULL,
  `DatePost` datetime NOT NULL,
  `Repost` tinyint(1) NOT NULL,
  `KeyUserRespost` int DEFAULT NULL,
  `KeyPostRespost` int DEFAULT NULL,
  `QuotePost` varchar(777) DEFAULT NULL,
  PRIMARY KEY (`KeyPost`),
  KEY `KeyUser` (`KeyUser`),
  KEY `KeyUserRespost` (`KeyUserRespost`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`KeyUser`) REFERENCES `user` (`KeyUser`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`KeyUserRespost`) REFERENCES `user` (`KeyUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,1,' Post 1 of user1, xxxxxxxxxxxxxx,yyyyyyyyyyyyyy','2022-03-01 22:05:17',0,NULL,NULL,NULL),(2,1,' Post 2 of user1, xxxxxxxxxxxxxx,yyyyyyyyyyyyyy','2022-03-01 22:07:22',0,NULL,NULL,NULL),(3,1,' Post 3 of user1, xxxxxxxxxxxxxx,yyyyyyyyyyyyyy','2022-03-01 22:08:06',0,NULL,NULL,NULL),(4,3,' Post 1 of user2, xxxxxxxxxxxxxx,yyyyyyyyyyyyyy','2022-03-01 22:17:59',0,NULL,NULL,NULL),(5,3,' Post 2 of user2, ssssssssssssssssssss,ffffffffffffffffffffff','2022-03-01 22:18:41',0,NULL,NULL,NULL),(6,4,' Post 1 of user3, ggggggggggggggggggggg.llllllllllllllllllllllllllllllllllllllll','2022-03-02 00:16:01',0,NULL,NULL,NULL),(7,1,' Post 1 of user1, xxxxxxxxxxxxxx,yyyyyyyyyyyyyy','2022-03-02 01:55:44',1,1,1,'QuotePost 1, user 1');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `KeyUser` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(14) NOT NULL,
  `Joined` datetime NOT NULL,
  `password` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`KeyUser`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'user1','2022-03-01 17:19:00','123456'),(3,'user2','2022-03-01 17:29:29','123456'),(4,'user3','2022-03-01 17:29:34','123456'),(5,'user4','2022-03-01 17:29:39','123456');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-02 19:33:07
