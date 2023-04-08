import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DesArticlesModule } from './des-articles/des-articles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, DesArticlesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
