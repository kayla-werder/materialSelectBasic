import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';

const categories: Category[] = [
  { id: 1, name: 'Language' },
  { id: 2, name: 'Location' },
  { id: 3, name: 'Career' },
];
const products: Product[] = [
  { id: 1, name: 'English', categoryId: 1 },
  { id: 2, name: 'Spanish', categoryId: 1 },
  { id: 3, name: 'French', categoryId: 1 },
  { id: 4, name: 'German', categoryId: 1 },
  { id: 5, name: 'Japanese', categoryId: 1 },
  { id: 6, name: 'NYC', categoryId: 2 },
  { id: 7, name: 'Tokyo', categoryId: 2 },
  { id: 8, name: 'London', categoryId: 2 },
  { id: 9, name: 'Mexico City', categoryId: 2 },
  { id: 10, name: 'Engineer', categoryId: 3 },
  { id: 11, name: 'Professor', categoryId: 3 },
  { id: 12, name: 'Nurse', categoryId: 3 },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  fetchCategories() {
    return categories;
  }

  fetchProducts(categoryId) {
    return products.filter((product) => product.categoryId == categoryId);
  }
}
