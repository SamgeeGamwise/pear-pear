"use client";

import React, { useState } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";
import DarkModeToggle from "@/components/DarkModeToggle";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", form);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-background dark:bg-darkBackground">
      <DarkModeToggle />
      <Card>
        <h2 className="text-xl font-bold text-center mb-4 text-text dark:text-darkText">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" name="email" type="email" onChange={handleChange} required />
          <Input label="Password" name="password" type="password" onChange={handleChange} required />
          <Input label="Confirm Password" name="confirmPassword" type="password" onChange={handleChange} required />
          <Button variant="primary" fullWidth>Register</Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
