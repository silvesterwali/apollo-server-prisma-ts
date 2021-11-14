/*
  Warnings:

  - You are about to drop the column `craetedAt` on the `notes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `notes` DROP COLUMN `craetedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
