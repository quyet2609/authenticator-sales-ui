export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 'coffee',
    name: 'Cà phê rang xay',
    description: '100% Arabica, hương thơm đậm đà',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'tea',
    name: 'Trà ô long',
    description: 'Vị dịu nhẹ, hậu ngọt',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'cookie',
    name: 'Bánh quy bơ',
    description: 'Giòn tan, thơm bơ',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=600&auto=format&fit=crop',
  },
]



