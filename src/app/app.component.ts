import { Component, OnInit } from '@angular/core'
import { IProduct } from './modules/product'
import { ProductService } from './services/product.service'
import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular App'

  // product: IProduct[] = []
  loading = false
  product$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductService) {
    
  }

  ngOnInit(): void {
    this.loading = true
    this.product$ = this.productsService.getAll().pipe(tap(() => this.loading = false))
    // this.productsService.getAll().subscribe((products) => {
    //   this.product = products
    //   this.loading = false
    // })



  }

}