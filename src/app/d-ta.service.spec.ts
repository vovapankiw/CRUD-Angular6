import { TestBed } from '@angular/core/testing';

import { DTAService } from './d-ta.service';

describe('DTAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DTAService = TestBed.get(DTAService);
    expect(service).toBeTruthy();
  });
});
