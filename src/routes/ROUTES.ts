import login from "./auth/login";
import posts from "./posts/index";
import signUp from "./auth/signUp";

export const ROUTES = [
  {
    endpoint: "login",
    path: login,
  },
  { endpoint: "signup", path: signUp },
  { endpoint: "posts", path: posts },
];
