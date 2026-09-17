import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  ShoppingBag,
  Star,
  Ruler,
  Truck,
  CheckCircle2,
  ShieldCheck,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Product, CurrencyMode } from '../types';
import { formatCurrencyPrice } from '../utils/currency';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
  etsyShopName: string;
  sheinShopName?: string;
  currencyMode: CurrencyMode;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
  etsyShopName,
  sheinShopName = 'LostEra',
  currencyMode,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'printify' | 'care'>('specs');
  const [addedNotice, setAddedNotice] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || 'Standard');
      setQuantity(1);
      setActiveTab('specs');
      setAddedNotice(false);
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const etsySearchUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}?search_query=${encodeURIComponent(
    product.title
  )}`;

  const sheinSearchUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(
    sheinShopName
  )}+${encodeURIComponent(product.title)}`;

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#0c0c10] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Image & Visual Gallery */}
          <div className="md:col-span-6 bg-neutral-950 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-neutral-800">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-neutral-800 bg-[#08080a] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Tag overlay */}
              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono-tag bg-black/80 backdrop-blur-md text-white border border-neutral-700">
                  {product.printify.gsm}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#F1641E] text-white">
                  Fulfilled by Printify on Etsy
                </span>
              </div>
            </div>

            {/* Sub-note */}
            <div className="mt-4 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 w-full text-center">
              <p className="font-mono-tag text-xs text-neutral-400 italic">
                “{product.quote}”
              </p>
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Badge */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono-tag uppercase tracking-widest text-neutral-400">
                  LOST ERA • {product.category}
                </span>

                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-white">{product.etsy.rating}</span>
                  <span className="text-neutral-400">({product.etsy.reviewCount} reviews on Etsy)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {product.title}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">{product.subtitle}</p>
              </div>

              {/* Pricing & Free Shipping */}
              <div className="flex flex-wrap items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white">
                    {currencyMode === 'both'
                      ? `${formatCurrencyPrice(product.price, 'both').usd} · ${formatCurrencyPrice(product.price, 'both').cfa}`
                      : formatCurrencyPrice(product.price, currencyMode).display}
                  </span>
                  {currencyMode !== 'both' && formatCurrencyPrice(product.price, currencyMode).subDisplay && (
                    <span className="text-xs font-mono-tag text-neutral-400">
                      {formatCurrencyPrice(product.price, currencyMode).subDisplay}
                    </span>
                  )}
                </div>

                {product.comparePrice && (
                  <span className="text-sm text-neutral-500 line-through font-mono-tag">
                    {currencyMode === 'both'
                      ? `${formatCurrencyPrice(product.comparePrice, 'both').usd} · ${formatCurrencyPrice(product.comparePrice, 'both').cfa}`
                      : formatCurrencyPrice(product.comparePrice, currencyMode).display}
                  </span>
                )}

                <span className="px-2 py-0.5 rounded text-[11px] font-mono-tag bg-emerald-950/80 text-emerald-300 border border-emerald-800/50">
                  In Stock & Ready to Print
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes.length > 1 && (
                <div className="space-y-2 pt-2 border-t border-neutral-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tag uppercase text-neutral-300">
                      Select Size: <strong className="text-white">{selectedSize}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={onOpenSizeGuide}
                      className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white underline"
                    >
                      <Ruler className="w-3.5 h-3.5" />
                      <span>Size Chart & Measurements</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono-tag font-semibold transition-colors ${
                          selectedSize === sz
                            ? 'bg-white text-black ring-2 ring-white shadow'
                            : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Picker */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-mono-tag uppercase text-neutral-400">Quantity:</span>
                <div className="flex items-center border border-neutral-800 rounded-lg bg-neutral-900">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-neutral-400 hover:text-white font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-mono-tag text-white font-bold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-neutral-400 hover:text-white font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Tabs for Printify Specs, Details, and Care */}
              <div className="pt-2 border-t border-neutral-800 space-y-3">
                <div className="flex border-b border-neutral-800 text-xs font-mono-tag">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-2 px-3 transition-colors ${
                      activeTab === 'specs'
                        ? 'text-white border-b-2 border-white font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Design Details
                  </button>
                  <button
                    onClick={() => setActiveTab('printify')}
                    className={`pb-2 px-3 transition-colors ${
                      activeTab === 'printify'
                        ? 'text-amber-300 border-b-2 border-amber-300 font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Printify Garment Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('care')}
                    className={`pb-2 px-3 transition-colors ${
                      activeTab === 'care'
                        ? 'text-white border-b-2 border-white font-semibold'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Care & Wash
                  </button>
                </div>

                <div className="text-xs text-neutral-300 min-h-[90px]">
                  {activeTab === 'specs' && (
                    <ul className="space-y-1.5 list-disc list-inside text-neutral-300">
                      {product.specs.map((sp, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {sp}
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'printify' && (
                    <div className="space-y-2">
                      <div className="text-[11px] text-neutral-400">
                        <strong className="text-white">Blank:</strong> {product.printify.blankModel}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        <strong className="text-white">Weight:</strong> {product.printify.gsm}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        <strong className="text-white">Printing Tech:</strong> {product.printify.printTech}
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        <strong className="text-white">Fit Cut:</strong> {product.printify.fit}
                      </div>
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <ul className="space-y-1.5 list-disc list-inside text-neutral-400">
                      {product.printify.careInstructions.map((ci, idx) => (
                        <li key={idx}>{ci}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions: Buy on Etsy, Buy on SHEIN & Add to Cart */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              {/* Marketplace row */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={etsySearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#F1641E] hover:bg-[#d85516] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all"
                  title="Order on official Etsy storefront"
                >
                  <span>Order on Etsy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={sheinSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-neutral-900 hover:bg-white text-white hover:text-black border border-neutral-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all"
                  title="Order on official SHEIN store"
                >
                  <span>Order on SHEIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Add to Local Bag */}
              <button
                type="button"
                onClick={handleAdd}
                disabled={addedNotice}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                  addedNotice
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white hover:bg-neutral-200 text-black shadow'
                }`}
              >
                {addedNotice ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>
                      Add to Bag (
                      {currencyMode === 'both'
                        ? `$${(product.price * quantity).toFixed(2)} / ${Math.round(product.price * quantity * 570).toLocaleString('en-US')} FCFA`
                        : formatCurrencyPrice(product.price * quantity, currencyMode).display}
                      )
                    </span>
                  </>
                )}
              </button>

              {/* Guarantees */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono-tag pt-1">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cameroon & Global Shipping (2–4 days dispatch)</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Etsy & SHEIN Buyer Protection</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
