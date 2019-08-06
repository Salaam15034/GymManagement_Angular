import { TestBed } from '@angular/core/testing';

import { GlobalContentServiceService } from './global-content-service.service';

describe('GlobalContentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalContentServiceService = TestBed.get(GlobalContentServiceService);
    expect(service).toBeTruthy();
  });
});
