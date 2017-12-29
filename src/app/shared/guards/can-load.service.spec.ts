import { TestBed, inject } from '@angular/core/testing';

import { CanLoadService } from './can-load.service';

describe('CanLoadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLoadService]
    });
  });

  it('should be created', inject([CanLoadService], (service: CanLoadService) => {
    expect(service).toBeTruthy();
  }));
});
