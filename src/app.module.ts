import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DesArticlesModule } from './des-articles/des-articles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
//import { UsersService } from './users/users.service';

@Module({
  imports: [PrismaModule, DesArticlesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
