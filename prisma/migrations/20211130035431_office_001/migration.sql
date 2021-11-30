-- DropIndex
DROP INDEX `Office_userId_key` ON `office`;

-- AddForeignKey
ALTER TABLE `Office` ADD CONSTRAINT `Office_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
