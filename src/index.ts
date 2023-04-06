import { APP } from "./appInstance";
import { PORT } from "./configurations";
import { createDbConnection } from "./dbInstance";
import { authMiddleware } from "./middlewares/authMiddleware";

import appRoutes from "./routes/index";

APP.listen(PORT, () =>
  console.log(
    `Server connected at port: ${PORT}`,
    `URL is 'http://localhost:${PORT}'`
  )
);
createDbConnection();

APP.use(authMiddleware);

APP.use("/api", appRoutes);
