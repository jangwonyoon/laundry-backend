import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query((returns) => String)
  getAll() {
    return 'fff';
  }
}
