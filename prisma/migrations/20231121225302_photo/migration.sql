/*
  Warnings:

  - Added the required column `photo` to the `BusinessCard` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BusinessCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "pitch" TEXT NOT NULL,
    "valuation" TEXT NOT NULL,
    "raised" TEXT NOT NULL,
    "minInvest" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "BusinessCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BusinessCard" ("headline", "id", "minInvest", "pitch", "raised", "reason", "title", "userId", "valuation") SELECT "headline", "id", "minInvest", "pitch", "raised", "reason", "title", "userId", "valuation" FROM "BusinessCard";
DROP TABLE "BusinessCard";
ALTER TABLE "new_BusinessCard" RENAME TO "BusinessCard";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
