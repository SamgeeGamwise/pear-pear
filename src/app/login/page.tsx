"use client";

import React, { useState } from "react";
import Card from "@/components/Card";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", form);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card>
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Email" name="email" type="email" onChange={handleChange} required />
          <Input label="Password" name="password" type="password" onChange={handleChange} required />
          <Button variant="primary" fullWidth>Login</Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
