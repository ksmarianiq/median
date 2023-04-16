import { SetMetadata } from '@nestjs/common';
import { ERoles } from './roles.enum';
//import { Role } from '@prisma/client';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ERoles[]) => SetMetadata(ROLES_KEY, roles);
