-- CreateTable
CREATE TABLE "Volunteer" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "address" TEXT,
    "city" VARCHAR(50),
    "state" VARCHAR(50),
    "zipCode" VARCHAR(10),
    "dateOfBirth" TIMESTAMP(3),
    "availability" VARCHAR(100),
    "skills" TEXT,
    "interests" TEXT,
    "preferredLocation" VARCHAR(100),
    "comments" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Volunteer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Volunteer_email_key" ON "Volunteer"("email");
