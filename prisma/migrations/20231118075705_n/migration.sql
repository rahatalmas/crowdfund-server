-- CreateTable
CREATE TABLE "UserData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "cardnumber" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BusinessCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "headline" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "pitch" TEXT NOT NULL,
    "valuation" TEXT NOT NULL,
    "raised" TEXT NOT NULL,
    "minInvest" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "BusinessCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "InvestedCard" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "InvestedCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_email_key" ON "UserData"("email");
