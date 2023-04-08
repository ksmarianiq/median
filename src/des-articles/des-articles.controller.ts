import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  //NotFoundException,
} from '@nestjs/common';
import { DesArticlesService } from './des-articles.service';
import { CreateDesArticleDto } from './dto/create-des-article.dto';
import { UpdateDesArticleDto } from './dto/update-des-article.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DesArticleEntity } from './entities/des-article.entity';

@Controller('des-articles')
@ApiTags('des-articles')
export class DesArticlesController {
  constructor(private readonly desArticlesService: DesArticlesService) {}

  @ApiCreatedResponse({ type: DesArticleEntity })
  @Post()
  async create(@Body() createArticleDto: CreateDesArticleDto) {
    return new DesArticleEntity(
      await this.desArticlesService.create(createArticleDto),
    );
  }

  @Get('drafts')
  @ApiOkResponse({ type: DesArticleEntity, isArray: true })
  async findDrafts() {
    const drafts = await this.desArticlesService.findDrafts();
    return drafts.map((draft) => new DesArticleEntity(draft));
  }

  @Get()
  @ApiOkResponse({ type: DesArticleEntity, isArray: true })
  async findAll() {
    const articles = await this.desArticlesService.findAll();
    return articles.map((article) => new DesArticleEntity(article));
  }

  @Get(':id')
  @ApiOkResponse({ type: DesArticleEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new DesArticleEntity(await this.desArticlesService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: DesArticleEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateArticleDto: UpdateDesArticleDto,
  ) {
    return new DesArticleEntity(
      await this.desArticlesService.update(id, updateArticleDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: DesArticleEntity })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new DesArticleEntity(await this.desArticlesService.remove(id));
  }
}
