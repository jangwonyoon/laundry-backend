import {} from '@nestjs/typeorm';
import { Entity, Column } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Field,
  ObjectType,
  InputType,
  registerEnumType,
} from '@nestjs/graphql';

/* 로그인시 확인 역할  */

enum UserRole {
  USER,
  OWNER,
  RIDER,
}

/* GraphQL enum 등록 */
registerEnumType(UserRole, { name: 'UserRole' });

/* user DB */

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field((type) => String)
  email: string;

  @Column()
  @Field((type) => String)
  username: string;

  @Column()
  @Field((type) => String)
  password: string;

  @Column()
  @Field((type) => String)
  phone: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field((type) => UserRole)
  role: UserRole;
}
