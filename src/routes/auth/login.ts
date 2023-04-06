import { Request, Response } from "express";

import { ROUTER } from "../../appInstance";
import { User } from "../../schema/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

ROUTER.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "secret_key",
      {
        expiresIn: "1h",
      }
    );

    res.send({ token, user: { id: user.id, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default ROUTER;
