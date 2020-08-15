import { TestBed } from '@angular/core/testing';

import { ImageSvcService } from './image-svc.service';

describe('ImageSvcService', () => {
  let service: ImageSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
