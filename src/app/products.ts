export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Google Pixel 7 - 128GB',
    price: 799,
    description: 'Great phone with one of the best cameras'
  },
  {
    id: 2,
    name: 'Google Pixel 7 Pro - 256GB',
    price: 999,
    description: 'Great phone with the best camera'
  },
  {
    id: 3,
    name: 'Google Pixel 6A - 128GB',
    price: 399,
    description: ''
  }
];