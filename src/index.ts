import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import "reflect-metadata";
import { createKoaServer } from "routing-controllers";

import { LoginController } from "./modules/login";
import { UserController } from "./modules/user/index";

const PORT = 3000;

function createApp() {
  const app = createKoaServer({
    routePrefix: "/api",
    controllers: [LoginController, UserController],
  });

  app.use(logger());
  app.use(bodyParser());
  app.use(cors());
  app.listen(PORT);
  console.log(`Server started on port ${PORT}`);
}

createApp();
