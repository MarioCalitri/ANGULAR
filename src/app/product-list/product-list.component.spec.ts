import { TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});