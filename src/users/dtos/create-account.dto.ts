import { PickType, ObjectType, InputType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { MutationOutput } from 'src/common/dtos/output.dto';

@InputType()
export class CreateAccountInput extends PickType(User, [
  'email',
  'password',
  'role',
  'phone',
  'username',
]) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {}
