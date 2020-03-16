import { TestBed } from '@angular/core/testing';

import { HttpQueryService } from './http-query.service';

describe('HttpQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpQueryService = TestBed.get(HttpQueryService);
    expect(service).toBeTruthy();
  });
});
