import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
  test() {
    return {message: "Hello World!"}
  }
}