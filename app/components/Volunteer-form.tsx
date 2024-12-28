"use client";

import React, { useState } from "react";
import Card from "@/app/components/Card";
import bg from '@/public/bg.svg'
export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    availability: "",
    skills: "",
    interests: "",
    preferredLocation: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Volunteer successfully added!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          dateOfBirth: "",
          availability: "",
          skills: "",
          interests: "",
          preferredLocation: "",
          comments: "",
        });
      } else {
        alert("Failed to add volunteer. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4" style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',}}>
      <div className="max-w-4xl w-full bg-slate-100 bg-opacity-50 rounded p-5">
        <div className="my-4">
        <Card backgroundColor="bg-[#3BDE3B]" textColor="text-white">
          <h1 className="text-3xl font-bold  text-center px-1">Volunteer Registration</h1>
        </Card>
        </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-white">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-white">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-white">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-white">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-white">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              />
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-medium text-white">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-medium text-white">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              />
            </div>

            {/* Skills */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white">Skills</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-blue-500 bg-slate-100"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-full ">
            <Card backgroundColor="bg-[#3BDE3B]" textColor="text-white">
            <button
              type="submit"
              className="col-span-full bg-[#3BDE3B] text-white px-96 mx-3 py-2 rounded  "
            >
              Submit
            </button>
            
            </Card>
            </div>
          </form>
        
      </div>
    </div>
  );
}
