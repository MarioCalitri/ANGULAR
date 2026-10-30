import { TestBed } from '@angular/core/testing';
import { ProductList } from './product-list.component';

describe('ProductList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductList],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductList);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});