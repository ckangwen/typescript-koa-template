import homeController from "./controllers/HomeController";

export default [
  {
    path: "/webhook",
    method: "get",
    action: homeController.index,
  },
];
