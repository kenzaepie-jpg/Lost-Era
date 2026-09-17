/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { PrintifyEtsySection } from './components/PrintifyEtsySection';
import { BrandManifesto } from './components/BrandManifesto';
import { EtsyReviewsSection } from './components/EtsyReviewsSection';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CartDrawer } from './components/CartDrawer';
import { EtsyShopSettingsModal } from './components/EtsyShopSettingsModal';
import { FoundersSection } from './components/FoundersSection';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory, CartItem, CurrencyMode } from './types';
import { Search, SlidersHorizontal, Sparkles, Filter, ExternalLink, ShieldCheck, Coins } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Currency State (defaults to 'both' to display both Francs and Dollars)
  const [currencyMode, setCurrencyMode] = useState<CurrencyMode>(() => {
    return (localStorage.getItem('lost_era_currency') as CurrencyMode) || 'both';
  });

  const handleCurrencyChange = (mode: CurrencyMode) => {
    setCurrencyMode(mode);
    localStorage.setItem('lost_era_currency', mode);
  };

  // Etsy Shop Name state (saved to localStorage so user can plug in their own shop)
  const [etsyShopName, setEtsyShopName] = useState<string>(() => {
    return localStorage.getItem('lost_era_etsy_shop') || 'LostEraOfficial';
  });

  // SHEIN Shop Name state
  const [sheinShopName, setSheinShopName] = useState<string>(() => {
    return localStorage.getItem('lost_era_shein_shop') || 'LostEra';
  });

  // Local Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lost_era_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('lost_era_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleSaveShopName = (newName: string) => {
    setEtsyShopName(newName);
    localStorage.setItem('lost_era_etsy_shop', newName);
  };

  const handleSaveSheinShopName = (newName: string) => {
    setSheinShopName(newName);
    localStorage.setItem('lost_era_shein_shop', newName);
  };

  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          id: `${product.id}-${size}`,
          productId: product.id,
          title: product.title,
          size,
          price: product.price,
          quantity,
          image: product.image,
          category: product.category,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.etsy.rating - a.etsy.rating;
      return 0; // featured order
    });
  }, [activeCategory, searchQuery, sortBy]);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'tees', label: 'Graphic Tees' },
    { id: 'hoodies', label: 'Heavy Hoodies' },
    { id: 'bottoms', label: 'Cargo Bottoms' },
    { id: 'accessories', label: 'Caps & Scarves' },
    { id: 'lifestyle', label: 'Mugs & Living' },
  ];

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToCollection = () => {
    const el = document.getElementById('collection-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-neutral-100 flex flex-col font-sans selection:bg-neutral-800 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        etsyShopName={etsyShopName}
        sheinShopName={sheinShopName}
        onOpenSettings={() => setSettingsOpen(true)}
        currencyMode={currencyMode}
        onCurrencyChange={handleCurrencyChange}
      />

      <main className="flex-1">
        {/* Hero Banner with Brand Taglines and Visuals from Photo */}
        <HeroBanner onExplore={scrollToCollection} etsyShopName={etsyShopName} />

        {/* Collection Section */}
        <section id="collection-section" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-6 text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono-tag text-amber-400">
                  <span>✦ 2024 DROP</span>
                  <span>•</span>
                  <span>PRINTIFY FULFILLED ON ETSY</span>
                </div>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                  The Collection
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 font-light">
                  Heavyweight blanks, hand-etched classical artwork, and astronomical iconography. Displayed in USD ($) and Francs CFA (1$ = 570 FCFA) with Cameroon shipping.
                </p>
              </div>

              {/* Currency Selector & Quick Etsy Direct Shop Link */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono-tag">
                  <Coins className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-neutral-400">Devise:</span>
                  <button
                    onClick={() => handleCurrencyChange('both')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                      currencyMode === 'both'
                        ? 'bg-amber-400 text-black'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    $ & FCFA
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('usd')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                      currencyMode === 'usd'
                        ? 'bg-white text-black'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    USD ($)
                  </button>
                  <button
                    onClick={() => handleCurrencyChange('cfa')}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                      currencyMode === 'cfa'
                        ? 'bg-amber-300 text-black'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    Francs (FCFA)
                  </button>
                </div>

                <a
                  href={`https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#F1641E]/15 hover:bg-[#F1641E] text-[#F1641E] hover:text-white border border-[#F1641E]/40 text-xs font-semibold flex items-center gap-2 transition-all duration-150"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Shop on Etsy (@{etsyShopName})</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Filter, Search & Sort Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-white text-black font-bold shadow'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search & Sort Controls */}
              <div className="flex items-center gap-2.5">
                {/* Search Input */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tees, hoodies, mugs..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-500 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono-tag focus:outline-none focus:ring-1 focus:ring-white cursor-pointer"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated on Etsy</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
                <p className="font-cinzel text-lg text-white uppercase">No items match your criteria</p>
                <p className="text-xs text-neutral-400">
                  Try clearing your search query or selecting a different collection category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white uppercase font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setSelectedProduct(p)}
                    onAddToCart={(p, size) => handleAddToCart(p, size, 1)}
                    etsyShopName={etsyShopName}
                    sheinShopName={sheinShopName}
                    currencyMode={currencyMode}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Brand Lookbook & Philosophy Section */}
        <BrandManifesto />

        {/* Founders Recognition Section (Kyle & Kenza / K&K) with Direct Contact */}
        <FoundersSection
          etsyShopName={etsyShopName}
          sheinShopName={sheinShopName}
        />

        {/* Printify, Etsy & SHEIN Business Model Breakdown */}
        <PrintifyEtsySection
          etsyShopName={etsyShopName}
          sheinShopName={sheinShopName}
        />

        {/* Etsy Verified Reviews */}
        <EtsyReviewsSection etsyShopName={etsyShopName} />
      </main>

      {/* Footer with K&K Recognition & Storefronts */}
      <Footer
        onSelectCategory={setActiveCategory}
        etsyShopName={etsyShopName}
        sheinShopName={sheinShopName}
      />

      {/* Modals & Slide-out Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, size, qty) => {
          handleAddToCart(product, size, qty);
          setCartOpen(true);
        }}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        etsyShopName={etsyShopName}
        sheinShopName={sheinShopName}
        currencyMode={currencyMode}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        etsyShopName={etsyShopName}
        sheinShopName={sheinShopName}
        currencyMode={currencyMode}
      />

      <EtsyShopSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        currentShopName={etsyShopName}
        currentSheinShopName={sheinShopName}
        onSaveShopName={handleSaveShopName}
        onSaveSheinShopName={handleSaveSheinShopName}
      />
    </div>
  );
}
