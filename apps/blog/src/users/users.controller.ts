import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('test')
  test() {
    // console.log('Hi');
    return this.usersService.test();
  }
}
