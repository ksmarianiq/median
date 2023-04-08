import { PartialType } from '@nestjs/swagger';
import { CreateDesArticleDto } from './create-des-article.dto';

export class UpdateDesArticleDto extends PartialType(CreateDesArticleDto) {}
