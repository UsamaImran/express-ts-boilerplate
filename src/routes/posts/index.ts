import { Request, Response } from "express";
import { ROUTER } from "../../appInstance";
import { Post, PostDoc } from "../../schema/Posts";
import { User } from "../../schema/User";

ROUTER.get("/posts", async (_: Request, res: Response) => {
  const posts = await Post.find({}).populate("userId", "-password");
  res.send({ posts });
});

ROUTER.get(
  "/posts/:postId",
  async (req: Request<{ postId: string }>, res: Response) => {
    try {
      const { postId } = req.params;

      const currentPost = await Post.findById({
        _id: postId,
      }).populate("userId");
      if (!currentPost) throw "POST NOT FOUND";

      res.send(currentPost);
    } catch (err) {
      res.send(err);
    }
  }
);

ROUTER.post("/post", async (req: Request<{}, {}, PostDoc>, res) => {
  try {
    const { title, description, userId } = req.body;
    const user = await User.findOne({ _id: userId });

    if (user) {
      const newPost = new Post({ title, description, userId });
      const savedPost = await newPost.save();

      res.json({ post: savedPost, message: "New Post Created" });
    } else {
      throw "INVALID USER";
    }
  } catch (err) {
    res.send({ err });
  }
});

ROUTER.put("/post", () => {});

export default ROUTER;
