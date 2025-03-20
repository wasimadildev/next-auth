import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/db/db";

import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      await connectDB(); // Ensure DB connection

      const { name, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create and save user
      const newUser = new User({ name, email, password });
      await newUser.save();

      return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      return res.status(500).json({ message: "Server error", error });
    }
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
