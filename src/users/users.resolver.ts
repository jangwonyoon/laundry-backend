import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  @Query((returns) => String)
  getAll() {
    return 'fff';
  }
}
