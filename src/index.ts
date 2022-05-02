import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import homeController from "./controllers/HomeController";

const app = new Koa();
const router = new Router();
router.post("/webhook", homeController.index);

const PORT = 3000;
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`Server is running on port ${PORT}`);
