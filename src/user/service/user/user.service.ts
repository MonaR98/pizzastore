import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { User } from '../../entity/user.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRespository: typeof User,
  ) {}
  public users: UserDto[] = [];

  create(user: UserDto): UserDto {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<UserDto[]> {
    return this.usersRespository.findAll<User>();
  }
}
