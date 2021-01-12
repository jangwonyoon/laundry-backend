import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.users.find();
  }

  async createAccount({
    email,
    password,
    role,
    phone,
    username,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    // 1. check that email does not exist
    // 2. create user & hasing the password

    try {
      /* 메일이 존재 하는 지 확인 */
      const exist = await this.users.findOne({ email });
      if (exist) {
        // exist Account , make error
        return { ok: false, error: '계정이 존재합니다.' };
      }

      await this.users.save(
        this.users.create({
          email,
          password,
          username,
          phone,
          role,
        }),
      );
      return { ok: true };
    } catch (error) {
      return {
        error,
        ok: false,
      };
    }
  }
}
