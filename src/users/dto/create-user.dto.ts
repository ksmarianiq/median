// src/users/dto/create-user.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';
//import { RolesGuard } from 'src/auth/roles.guards';

export class CreateUserDto {
  role: Role;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
