import { Test, TestingModule } from '@nestjs/testing';
import { DesArticlesController } from './des-articles.controller';
import { DesArticlesService } from './des-articles.service';

describe('DesArticlesController', () => {
  let controller: DesArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesArticlesController],
      providers: [DesArticlesService],
    }).compile();

    controller = module.get<DesArticlesController>(DesArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
