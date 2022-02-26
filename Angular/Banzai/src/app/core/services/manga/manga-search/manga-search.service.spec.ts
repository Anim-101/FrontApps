import { TestBed } from '@angular/core/testing';

import { MangaSearchService } from './manga-search.service';

describe('MangaSearchService', () => {
  let service: MangaSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
