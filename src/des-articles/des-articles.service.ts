import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDesArticleDto } from './dto/create-des-article.dto';
import { UpdateDesArticleDto } from './dto/update-des-article.dto';

// src/articles/articles.service.ts

@Injectable()
export class DesArticlesService {
  /* findDrafts() {
    throw new Error('Method not implemented.');
  }*/
  constructor(private prisma: PrismaService) {}

  create(createDesArticleDto: CreateDesArticleDto) {
    return this.prisma.article.create({ data: createDesArticleDto });
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findAll() {
    return this.prisma.article.findMany({
      where: { published: true },
    });
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
      include: {
        author: true,
      },
    });
  }

  update(id: number, updateDesArticleDto: UpdateDesArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: updateDesArticleDto,
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({ where: { id } });
  }
}
