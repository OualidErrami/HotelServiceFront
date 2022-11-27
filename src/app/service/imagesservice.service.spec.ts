import { TestBed } from '@angular/core/testing';

import { ImagesserviceService } from './imagesservice.service';

describe('ImagesserviceService', () => {
  let service: ImagesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
