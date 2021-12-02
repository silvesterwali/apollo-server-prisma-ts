/*
  Warnings:

  - You are about to drop the `_familytouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_familytouser` DROP FOREIGN KEY `_familytouser_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_familytouser` DROP FOREIGN KEY `_familytouser_ibfk_2`;

-- DropTable
DROP TABLE `_familytouser`;
