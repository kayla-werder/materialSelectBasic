import { Component } from '@angular/core';
import { Category } from './models/category';
import { Product } from './models/product';
import { DataService } from './services/data.service';

import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[];
  products: Product[];
  form: FormGroup
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.categories = this.dataService.fetchCategories();
    this.form = this.formBuilder.group({
      categoryId: [],
      productId: []
    });
  }

  onCategoryChange(event) {
    this.products = this.dataService.fetchProducts(event.value);
    this.form.patchValue({ productId: null });
  }

  save() {
    console.log(this.form.value);
  }

}
