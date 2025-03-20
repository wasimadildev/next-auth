"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const onSignup = async () => {
    }
    
    
  

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {/* Logo or Brand Name */}
        <div className="fixed top-8 left-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Brand
          </h1>
        </div>
  
        <Card className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
          <CardHeader className="space-y-3 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>
            <p className="text-sm text-gray-600">
              Enter your details below to create your account
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label 
                htmlFor="name" 
                className="text-sm font-semibold text-gray-800"
              >
                Full Name
              </Label>
              <Input 
                id="name"
                placeholder="John Doe" 
                type="text"
                className="w-full h-11 text-black border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                autoComplete="off"
                name="username"
                aria-label="Username"
                // how to log the value of the input
              

          
              />
            </div>
            
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-semibold text-gray-800"
              >
                Email
              </Label>
              <Input 
                id="email"
                placeholder="john@example.com" 
                type="email"
                className="w-full h-11 text-black border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                name="email"
                aria-label="Email"
                
              />
            </div>
            
            <div className="space-y-2">
              <Label 
                htmlFor="password" 
                className="text-sm font-semibold text-gray-800"
              >
                Password
              </Label>
              <Input 
                id="password"
                type="password"
                className="w-full h-11 text-black border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
                name="password"
                aria-label="Password"
                
              />
            </div>
  
            <div className="space-y-2">
              <Label 
                htmlFor="confirmPassword" 
                className="text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </Label>
              <Input 
                id="confirmPassword"
                type="password"
                className="w-full h-11 text-black border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                autoComplete="off"
                name="confirmPassword"
                aria-label="Confirm Password"
                
              />
            </div>
          </CardContent>
  
          <CardFooter className="flex flex-col space-y-4 pt-4">
            <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base"
            onClick={onSignup}
            >
              Sign Up
            </Button>
            
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
  
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link 
                href="/login" 
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
  
       
      </div>
    )
}


