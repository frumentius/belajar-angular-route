import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkParamGuard } from './check-param.guard';

describe('checkParamGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkParamGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
