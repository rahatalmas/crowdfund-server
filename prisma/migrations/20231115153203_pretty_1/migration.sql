-- CreateTable
CREATE TABLE `UserData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `education` VARCHAR(191) NOT NULL,
    `occupation` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `cardnumber` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserData_email_key`(`email`),
    UNIQUE INDEX `UserData_number_key`(`number`),
    UNIQUE INDEX `UserData_cardnumber_key`(`cardnumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BusinessCard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `headline` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,
    `pitch` VARCHAR(191) NOT NULL,
    `valuation` VARCHAR(191) NOT NULL,
    `raised` VARCHAR(191) NOT NULL,
    `minInvest` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InvestedCard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BusinessCard` ADD CONSTRAINT `BusinessCard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InvestedCard` ADD CONSTRAINT `InvestedCard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `UserData`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
