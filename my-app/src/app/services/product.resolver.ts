import { ProductsService } from './products.service';
import { resolve } from 'node:path';
import { ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable} from 'rxjs';
import { IProducts } from '../models/products';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { inject } from '@angular/core';


export const productResolver: ResolveFn<IProducts> = (
  route: ActivatedRouteSnapshot,
) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);

  return productsService.getProduct(route.params?.['id']).pipe(
    catchError(() => {
      router.navigate(['products']);
      return EMPTY;
    })
  );
};
