import { TestBed } from '@angular/core/testing';

import { SalutiDataService } from './saluti-data.service';

describe('SalutiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalutiDataService = TestBed.get(SalutiDataService);
    expect(service).toBeTruthy();
  });
});
