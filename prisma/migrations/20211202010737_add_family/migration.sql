-- CreateTable
CREATE TABLE `Family` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `relation` ENUM('SPOUSE', 'FIRST_CHILD', 'SECOND_CHILD', 'THIRD_CHILD') NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FamilyToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FamilyToUser_AB_unique`(`A`, `B`),
    INDEX `_FamilyToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Family` ADD CONSTRAINT `Family_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FamilyToUser` ADD FOREIGN KEY (`A`) REFERENCES `Family`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FamilyToUser` ADD FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
