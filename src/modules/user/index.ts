import { Body, JsonController, Post } from "routing-controllers";

@JsonController("/user")
export class UserController {
  @Post("/info")
  login(@Body() body: { userId: string }) {
    console.log("body", body);

    return {
      status: 1,
      message: "success",
      data: {
        userId: body.userId || 0,
        username: "TEST_USERNAME",
        avatar: "https://s2.loli.net/2023/01/12/a4ImQMsgHkbxtJL.jpg",
      },
    };
  }
}
