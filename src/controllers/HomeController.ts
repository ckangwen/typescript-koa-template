import HomeService from "../services/HomeService";
import { KoaContext } from "../types";

class HomeController {
  private homeService: HomeService;

  constructor() {
    this.homeService = new HomeService();
  }

  index = (context: KoaContext) => {
    this.homeService.log();
    console.log(context);
  }
}

const controller = new HomeController();

export default controller;
