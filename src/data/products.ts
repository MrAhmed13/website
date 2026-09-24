export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  retailPrice: number;
  image: string;
  category: string;
  colorway: string;
  releaseDate: string;
  sizes: (number | string)[];
  description: string;
  authenticated: boolean;
  trending: boolean;
  lastSale: number;
  bidCount: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Air Jordan 1 Retro High OG",
    brand: "Jordan",
    price: 285,
    retailPrice: 180,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e24c28?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Chicago/White-Black-Varsity Red",
    releaseDate: "2022-02-12",
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
    description: "The Air Jordan 1 Retro High OG Chicago returns with its iconic color blocking. Originally released in 1985, this silhouette has become one of the most sought-after sneakers in history.",
    authenticated: true,
    trending: true,
    lastSale: 290,
    bidCount: 47
  },
  {
    id: "2",
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 320,
    retailPrice: 230,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Zebra/White-Core Black-Red",
    releaseDate: "2022-06-15",
    sizes: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    description: "The Yeezy Boost 350 V2 features a redesigned upper with a side stripe and translucent Primeknit construction. The full-length Boost midsole provides unmatched comfort.",
    authenticated: true,
    trending: true,
    lastSale: 315,
    bidCount: 62
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    brand: "Nike",
    price: 145,
    retailPrice: 110,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Panda/Black-White",
    releaseDate: "2021-08-01",
    sizes: [6, 7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    description: "The Nike Dunk Low Panda features a clean black and white colorway that has become a streetwear staple. Originally designed for basketball, the Dunk has transcended into a cultural icon.",
    authenticated: true,
    trending: false,
    lastSale: 140,
    bidCount: 23
  },
  {
    id: "4",
    name: "New Balance 550",
    brand: "New Balance",
    price: 130,
    retailPrice: 110,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "White-Green",
    releaseDate: "2022-03-20",
    sizes: [7, 8, 9, 9.5, 10, 10.5, 11, 12, 13],
    description: "The New Balance 550 brings retro basketball style to the modern era. With its leather upper and classic silhouette, it's become a favorite among sneaker enthusiasts.",
    authenticated: true,
    trending: false,
    lastSale: 125,
    bidCount: 15
  },
  {
    id: "5",
    name: "Air Force 1 Low",
    brand: "Nike",
    price: 110,
    retailPrice: 110,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Triple White",
    releaseDate: "2022-01-01",
    sizes: [6, 7, 8, 9, 10, 11, 12, 13, 14],
    description: "The Nike Air Force 1 Low in Triple White is a timeless classic. First released in 1982, it remains one of the most popular sneakers of all time with its clean design and Air cushioning.",
    authenticated: true,
    trending: true,
    lastSale: 108,
    bidCount: 89
  },
  {
    id: "6",
    name: "Supreme Box Logo Tee",
    brand: "Supreme",
    price: 450,
    retailPrice: 58,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
    category: "Apparel",
    colorway: "Black",
    releaseDate: "2023-02-18",
    sizes: ["S", "M", "L", "XL"],
    description: "The iconic Supreme Box Logo Tee is the brand's most recognizable piece. Made from 100% cotton with the signature box logo on the chest.",
    authenticated: true,
    trending: true,
    lastSale: 440,
    bidCount: 34
  },
  {
    id: "7",
    name: "Off-White x Nike Blazer Mid",
    brand: "Nike",
    price: 520,
    retailPrice: 130,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Grim Reaper/Black-White",
    releaseDate: "2021-11-15",
    sizes: [8, 9, 9.5, 10, 10.5, 11, 12],
    description: "The Off-White x Nike Blazer Mid Grim Reaper features Virgil Abloh's signature deconstructed design language with exposed foam and zip-tie details.",
    authenticated: true,
    trending: true,
    lastSale: 510,
    bidCount: 28
  },
  {
    id: "8",
    name: "Travis Scott x Air Jordan 1 Low",
    brand: "Jordan",
    price: 890,
    retailPrice: 150,
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Reverse Mocha",
    releaseDate: "2022-05-08",
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The Travis Scott x Air Jordan 1 Low Reverse Mocha features a premium suede and leather construction with the iconic reverse Swoosh design.",
    authenticated: true,
    trending: true,
    lastSale: 875,
    bidCount: 56
  },
  {
    id: "9",
    name: "Essentials Hoodie",
    brand: "Fear of God",
    price: 185,
    retailPrice: 90,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    category: "Apparel",
    colorway: "Cream",
    releaseDate: "2023-01-10",
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "The Fear of God Essentials Hoodie features a relaxed fit with premium fleece construction. A streetwear must-have with the signature Essentials branding.",
    authenticated: true,
    trending: false,
    lastSale: 180,
    bidCount: 19
  },
  {
    id: "10",
    name: "Air Jordan 4 Retro",
    brand: "Jordan",
    price: 340,
    retailPrice: 210,
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Military Black",
    releaseDate: "2022-07-23",
    sizes: [7, 8, 9, 10, 11, 12, 13],
    description: "The Air Jordan 4 Military Black brings a sleek monochromatic look to the classic silhouette. Features premium materials and the iconic visible Air unit.",
    authenticated: true,
    trending: true,
    lastSale: 335,
    bidCount: 41
  },
  {
    id: "11",
    name: "Nike Tech Fleece Joggers",
    brand: "Nike",
    price: 120,
    retailPrice: 110,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
    category: "Apparel",
    colorway: "Black",
    releaseDate: "2023-03-01",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Nike Tech Fleece Joggers combine lightweight warmth with a modern tapered fit. The innovative fleece provides insulation without the bulk.",
    authenticated: true,
    trending: false,
    lastSale: 115,
    bidCount: 12
  },
  {
    id: "12",
    name: "Puma Suede Classic",
    brand: "Puma",
    price: 75,
    retailPrice: 70,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    category: "Sneakers",
    colorway: "Red-White",
    releaseDate: "2022-09-15",
    sizes: [7, 8, 9, 10, 11, 12],
    description: "The Puma Suede Classic has been a street culture staple since 1968. Its rich suede upper and iconic formstrip make it a timeless choice.",
    authenticated: true,
    trending: false,
    lastSale: 72,
    bidCount: 8
  }
];

export const brands = ["All", "Nike", "Jordan", "Adidas", "New Balance", "Puma", "Supreme", "Fear of God"];
export const categories = ["All", "Sneakers", "Apparel", "Accessories"];
