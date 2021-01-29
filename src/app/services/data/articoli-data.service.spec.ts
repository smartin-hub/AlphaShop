import { TestBed } from '@angular/core/testing';

import { ArticoliDataService } from './articoli-data.service';

describe('ArticoliDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticoliDataService = TestBed.get(ArticoliDataService);
    expect(service).toBeTruthy();
  });
});
