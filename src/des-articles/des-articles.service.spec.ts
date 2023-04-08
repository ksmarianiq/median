import { Test, TestingModule } from '@nestjs/testing';
import { DesArticlesService } from './des-articles.service';

describe('DesArticlesService', () => {
  let service: DesArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesArticlesService],
    }).compile();

    service = module.get<DesArticlesService>(DesArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
