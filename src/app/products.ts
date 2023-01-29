export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: any;
}

export const products = [
  {
    id: 1,
    name: 'Google Pixel 7 - 128GB',
    price: 799,
    description: 'Great phone with one of the best cameras',
    image: '../assets/pixel.png'
  },
  {
    id: 2,
    name: 'Google Pixel 7 Pro - 256GB',
    price: 999,
    description: 'Great phone with the best camera',
    image: '../assets/pixel.png'
  },
  {
    id: 3,
    name: 'Google Pixel 6A - 128GB',
    price: 399,
    description: 'Last year\'s model with a decent camera',
    image: '../assets/pixel.png'
  }
];