import { TestBed } from '@angular/core/testing';

import { AuthappService } from './authapp.service';

describe('AuthappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthappService = TestBed.get(AuthappService);
    expect(service).toBeTruthy();
  });
});
