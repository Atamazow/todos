import { TestBed } from '@angular/core/testing';

import { StoreTodosService } from './store-todos.service';

describe('StoreTodosService', () => {
  let service: StoreTodosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
