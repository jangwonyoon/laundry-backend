import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  @Query((_) => Boolean)
  getAll() {
    return true;
  }
}
