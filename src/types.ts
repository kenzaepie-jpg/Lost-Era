export type ProductCategory = 'all' | 'tees' | 'hoodies' | 'bottoms' | 'accessories' | 'lifestyle';

export interface PrintifyDetails {
  blankModel: string;
  gsm: string;
  material: string;
  printTech: string;
  dispatchTime: string;
  careInstructions: string[];
  fit: string;
}

export interface EtsyListingInfo {
  rating: number;
  reviewCount: number;
  badge?: 'Star Seller' | "Etsy's Pick" | 'Bestseller' | 'Popular Now';
  dispatchDays: string;
  freeShipping: boolean;
  etsyListingUrl: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  category: 'tees' | 'hoodies' | 'bottoms' | 'accessories' | 'lifestyle';
  price: number;
  comparePrice?: number;
  description: string;
  story: string;
  image: string;
  backImage?: string;
  detailImages?: string[];
  sizes: string[];
  inStock: boolean;
  printify: PrintifyDetails;
  etsy: EtsyListingInfo;
  specs: string[];
  quote: string;
}

export interface CartItem {
  id: string; // unique cart item id (product id + size)
  productId: string;
  title: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface EtsyReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  itemPurchased: string;
  itemSize?: string;
  reviewText: string;
  verifiedPurchase: boolean;
  userAvatar?: string;
}

export type CurrencyMode = 'both' | 'usd' | 'cfa';
