import { NextResponse } from "next/server";
import {db} from "@/lib/db"; // Make sure to configure your Prisma client in `lib/prisma.ts`

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate input if needed
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      dateOfBirth,
      availability,
      skills,
      interests,
      preferredLocation,
      comments,
    } = data;

    // Save to the database using Prisma
    const volunteer = await db.volunteer.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zipCode,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        availability,
        skills,
        interests,
        preferredLocation,
        comments,
      },
    });

    return NextResponse.json({ message: "Volunteer added successfully!", volunteer });
  } catch (error) {
    console.error("Error saving volunteer:", error);
    return NextResponse.json(
      { error: "Failed to save volunteer. Please try again." },
      { status: 500 }
    );
  }
}
