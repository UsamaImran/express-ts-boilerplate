import { Request, Response } from "express";

import { ROUTER } from "../../appInstance";
import { User } from "../../schema/User";

import bcrypt from "bcrypt";

ROUTER.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).send({ error: "Username already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: passwordHash });
    await newUser.save();

    res.status(200).send({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default ROUTER;
