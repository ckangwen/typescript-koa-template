import { Body, JsonController, Post } from "routing-controllers";

import { isPlainObject } from "../../helpers/index";

@JsonController()
export class LoginController {
  @Post("/login")
  login(@Body() body: any) {
    console.log("body", body);

    return {
      status: 1,
      message: "success",
      data: {
        token: "TEST_TOKEN",
        ...(isPlainObject(body) ? body : {}),
      },
    };
  }
}
