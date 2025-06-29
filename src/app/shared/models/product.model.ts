export interface Iproduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Irating;
  review: string;
}

export interface Irating {
  rate: number;
  count: number;
}

export interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}