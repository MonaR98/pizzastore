import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @Post('/')
  async create(@Body() userdto: UserDto): Promise<UserDto> {
    return this.userService.create(userdto);
  }
}
