import React, { useState } from 'react';
import { ExternalLink, Eye, ShoppingBag, Star, Check } from 'lucide-react';
import { Product, CurrencyMode } from '../types';
import { formatCurrencyPrice } from '../utils/currency';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  etsyShopName: string;
  sheinShopName?: string;
  currencyMode: CurrencyMode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  etsyShopName,
  sheinShopName = 'LostEra',
  currencyMode,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'One Size');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const priceObj = formatCurrencyPrice(product.price, currencyMode);
  const compareObj = product.comparePrice
    ? formatCurrencyPrice(product.comparePrice, currencyMode)
    : null;

  // If user configured a custom shop name, use their shop link query
  const directEtsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}?search_query=${encodeURIComponent(
    product.title
  )}`;

  const directSheinUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(
    sheinShopName
  )}+${encodeURIComponent(product.title)}`;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1400);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col rounded-xl bg-[#0e0e12] border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl"
    >
      {/* Top Image Box */}
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-950">
        <img
          src={product.image}
          alt={product.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 pointer-events-none">
          {/* Printify Spec Tag */}
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono-tag font-medium bg-black/80 text-neutral-300 border border-neutral-700/80 backdrop-blur-md">
            {product.printify.gsm}
          </span>

          {/* Etsy Badge */}
          {product.etsy.badge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1641E]/90 text-white shadow-sm backdrop-blur-md">
              <span>{product.etsy.badge}</span>
            </span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-4 py-2 rounded-lg bg-white/95 hover:bg-white text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Product Details</span>
          </button>
        </div>

        {/* Subtitle / Quote Banner on Image bottom */}
        <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <p className="text-[11px] font-mono-tag text-neutral-300 italic truncate">
            "{product.quote}"
          </p>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3 text-left">
        <div className="space-y-1.5">
          {/* Etsy Rating and Reviews */}
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-neutral-200">{product.etsy.rating}</span>
              <span className="text-[11px]">({product.etsy.reviewCount} Etsy reviews)</span>
            </div>
            <span className="text-[10px] uppercase font-mono-tag text-emerald-400">
              {product.printify.dispatchTime.split(' ')[1]} Dispatch
            </span>
          </div>

          {/* Title */}
          <h3 className="font-cinzel text-base font-bold text-white group-hover:text-neutral-200 transition-colors leading-snug line-clamp-2">
            {product.title}
          </h3>

          <p className="text-xs text-neutral-400 font-light line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        {/* Size Selection Pill List (for clothing) */}
        {product.sizes.length > 1 && (
          <div
            className="pt-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[10px] font-mono-tag text-neutral-400 uppercase tracking-wider mb-1.5 flex justify-between">
              <span>Select Size:</span>
              <span className="text-neutral-300 font-semibold">{selectedSize}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSelectedSize(sz)}
                  className={`px-2 py-1 rounded text-[10px] font-mono-tag font-semibold transition-colors ${
                    selectedSize === sz
                      ? 'bg-neutral-200 text-black shadow-sm'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & CTA Actions */}
        <div className="pt-2 border-t border-neutral-800/80 space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="flex flex-wrap items-baseline gap-1.5">
              {currencyMode === 'both' ? (
                <>
                  <span className="text-base font-bold text-white">{priceObj.usd}</span>
                  <span className="text-xs font-mono-tag font-semibold text-amber-300">
                    · {priceObj.cfa}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-base font-bold text-white">{priceObj.display}</span>
                  {priceObj.subDisplay && (
                    <span className="text-[11px] font-mono-tag text-neutral-400">
                      {priceObj.subDisplay}
                    </span>
                  )}
                </>
              )}

              {compareObj && (
                <span className="text-[11px] text-neutral-500 line-through font-mono-tag ml-1">
                  {currencyMode === 'both' ? `${compareObj.usd} · ${compareObj.cfa}` : compareObj.display}
                </span>
              )}
            </div>

            <span className="text-[10px] font-mono-tag text-neutral-400 shrink-0">
              Cameroon Shipping / Free $75+ (42,750 FCFA)
            </span>
          </div>

          {/* Action Buttons: Etsy & SHEIN Store Links + Add to Bag */}
          <div className="space-y-1.5 pt-1" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 gap-1.5">
              <a
                href={directEtsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-2 rounded-lg bg-[#F1641E]/15 hover:bg-[#F1641E] text-[#F1641E] hover:text-white border border-[#F1641E]/40 text-[10px] font-semibold flex items-center justify-center gap-1 transition-all duration-150"
                title="Buy on Etsy Store"
              >
                <span>Etsy</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>

              <a
                href={directSheinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-2 rounded-lg bg-neutral-900 hover:bg-white text-neutral-300 hover:text-black border border-neutral-700 text-[10px] font-semibold flex items-center justify-center gap-1 transition-all duration-150"
                title="Buy on SHEIN Store"
              >
                <span>SHEIN</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedAnimation}
              className={`w-full py-2 px-2.5 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-150 ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added to Bag!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-neutral-300" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
