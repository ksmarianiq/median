// src/articles/articles.module.ts

import { Module } from '@nestjs/common';
import { DesArticlesService } from './des-articles.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DesArticlesController } from './des-articles.controller';

@Module({
  controllers: [DesArticlesController],
  providers: [DesArticlesService],
  imports: [PrismaModule],
})
export class DesArticlesModule {}
// src/articles/articles.module.ts
