import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const checkParamGuard: CanActivateFn = (route, state) => {
  let paramId: null | string = route.params['paramId'];
  let pattern: RegExp = /[^0-9]/gi;
  let result: boolean = false;
  if (paramId !== null) result = pattern.test(paramId);
  if (result) {
    const router = inject(Router);
    return router.parseUrl('/page-not-found');
  }
  return true;
};
