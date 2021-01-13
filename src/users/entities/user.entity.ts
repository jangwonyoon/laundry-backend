import {} from '@nestjs/typeorm';
import { Entity, Column } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Field,
  ObjectType,
  registerEnumType,
  InputType,
} from '@nestjs/graphql';
import { IsString, IsEnum } from 'class-validator';

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
  @IsString()
  email: string;

  @Column()
  @Field((type) => String)
  @IsString()
  username: string;

  @Column()
  @Field((type) => String)
  @IsString()
  password: string;

  @Column()
  @Field((type) => String)
  @IsString()
  phone: string;

  @Column({ type: 'enum', enum: UserRole })
  @Field((type) => UserRole)
  @IsEnum(UserRole)
  role: UserRole;
}
