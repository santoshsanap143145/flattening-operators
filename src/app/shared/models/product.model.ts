export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Irating;
}

export interface Irating {
  rate: number;
  count: number;
}
