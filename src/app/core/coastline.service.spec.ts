import { TestBed } from '@angular/core/testing';

import { CoastlineService } from './coastline.service';

describe('CoastlineService', () => {
  let service: CoastlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoastlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
