import {} from '@nestjs/typeorm';
import { Entity, Column } from 'typeorm';
import { CoreEntity } from 'src/common/core.entity';
import { Field } from '@nestjs/graphql';
import { string } from 'joi';

/* 로그인시 확인 역할  */

enum UserRole {
  USER = 'user',
  OWNER = 'owner',
  Rider = 'rider',
}

/* user DB */
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field((type) => string)
  email: string;

  @Column()
  @Field((type) => string)
  username: string;

  @Column()
  @Field((type) => string)
  password: string;

  @Column()
  @Field((type) => string)
  phone: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field((type) => UserRole)
  role: UserRole;
}
