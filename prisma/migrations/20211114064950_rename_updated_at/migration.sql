/*
  Warnings:

  - You are about to drop the column `updateAt` on the `notes` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notes` DROP COLUMN `updateAt`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
