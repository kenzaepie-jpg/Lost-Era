import React, { useState } from 'react';
import { ShoppingBag, ExternalLink, Settings, Sparkles, Menu, X, ShieldCheck, Coins } from 'lucide-react';
import { ProductCategory, CurrencyMode } from '../types';

interface NavbarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  cartCount: number;
  onOpenCart: () => void;
  etsyShopName: string;
  sheinShopName?: string;
  onOpenSettings: () => void;
  currencyMode: CurrencyMode;
  onCurrencyChange: (mode: CurrencyMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  cartCount,
  onOpenCart,
  etsyShopName,
  sheinShopName = 'LostEra',
  onOpenSettings,
  currencyMode,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'tees', label: 'Graphic Tees' },
    { id: 'hoodies', label: 'Heavy Hoodies' },
    { id: 'bottoms', label: 'Cargo Bottoms' },
    { id: 'accessories', label: 'Caps & Scarves' },
    { id: 'lifestyle', label: 'Mugs & Living' },
  ];

  const etsyShopUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`;
  const sheinShopUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(sheinShopName)}`;

  const handleNavClick = (cat: ProductCategory) => {
    onSelectCategory(cat);
    setMobileMenuOpen(false);
    const el = document.getElementById('collection-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08080a]/90 border-b border-neutral-800/80">
      {/* Top Announcement Bar with Currency Switcher & K&K Credit */}
      <div className="bg-[#121217] text-xs py-1.5 px-4 border-b border-neutral-800/60 text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono-tag tracking-wider text-neutral-300">
              🇨🇲 CAMEROON SHIPPING • 1$ = 570 FCFA • K&K (KYLE & KENZA) • ETSY & SHEIN
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Currency Selector Pill */}
            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-700/80 rounded-full px-2 py-0.5">
              <span className="text-[10px] font-mono-tag text-neutral-400 hidden sm:inline">
                Devise / Currency:
              </span>
              <button
                type="button"
                onClick={() => onCurrencyChange('both')}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono-tag transition-all ${
                  currencyMode === 'both'
                    ? 'bg-amber-400 text-black font-bold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Display both USD ($) and Francs CFA (FCFA) at 1$ = 570 FCFA"
              >
                $ & FCFA
              </button>
              <span className="text-neutral-600 text-[10px]">|</span>
              <button
                type="button"
                onClick={() => onCurrencyChange('usd')}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono-tag transition-all ${
                  currencyMode === 'usd'
                    ? 'bg-white text-black font-bold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Display in US Dollars ($)"
              >
                USD ($)
              </button>
              <span className="text-neutral-600 text-[10px]">|</span>
              <button
                type="button"
                onClick={() => onCurrencyChange('cfa')}
                className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono-tag transition-all ${
                  currencyMode === 'cfa'
                    ? 'bg-amber-300 text-black font-bold shadow-xs'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Display in Francs CFA (FCFA - 1$ = 570 FCFA)"
              >
                Francs (FCFA)
              </button>
            </div>

            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors text-[11px] underline underline-offset-2"
              title="Configure Etsy & SHEIN Stores"
            >
              <Settings className="w-3 h-3" />
              <span>Stores: Etsy & SHEIN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('all')}
            className="group flex items-center gap-2 text-left"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.25em] text-white group-hover:text-neutral-300 transition-colors uppercase">
              LOST ERA
            </span>
            <span className="text-xs font-mono-tag text-neutral-400 group-hover:text-white transition-colors tracking-widest hidden md:inline">
              ✦ BY K&K
            </span>
          </button>
        </div>

        {/* Desktop Nav Categories */}
        <nav className="hidden lg:flex items-center gap-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleNavClick(cat.id)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-md transition-all font-medium ${
                activeCategory === cat.id
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <a
            href="#founders"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-amber-300 hover:text-white hover:bg-neutral-900/60 rounded-md transition-all font-medium"
          >
            K&K Founders
          </a>
          <a
            href="#printify-etsy"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 rounded-md transition-all font-medium"
          >
            Fulfillment
          </a>
          <a
            href="#lookbook"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60 rounded-md transition-all font-medium"
          >
            Lookbook
          </a>
        </nav>

        {/* Action Buttons: Etsy & SHEIN quick links + Cart */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Direct Etsy Store Button */}
          <a
            href={etsyShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#F1641E]/15 text-[#F1641E] border border-[#F1641E]/40 hover:bg-[#F1641E] hover:text-white transition-all duration-200 shadow-sm"
            title="Visit official Etsy shop"
          >
            <span>Etsy</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Direct SHEIN Store Button */}
          <a
            href={sheinShopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white border border-neutral-700 hover:bg-white hover:text-black transition-all duration-200 shadow-sm"
            title="Visit official SHEIN store"
          >
            <span>SHEIN</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white transition-all text-xs font-medium"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag className="w-4 h-4 text-neutral-200" />
            <span className="hidden sm:inline">Bag</span>
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-black font-bold text-[10px]">
              {cartCount}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0d11] border-b border-neutral-800 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavClick(cat.id)}
                className={`text-left px-3 py-2 text-xs uppercase tracking-wider rounded-md font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:bg-neutral-900 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href="#founders"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider text-amber-300 py-1.5 px-3 rounded hover:bg-neutral-900 flex items-center justify-between"
            >
              <span>K&K Founders (Kyle & Kenza)</span>
              <span className="text-[10px] text-neutral-400 font-mono-tag">(+237) 677048355</span>
            </a>
            <a
              href="#printify-etsy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider text-neutral-300 py-1.5 px-3 rounded hover:bg-neutral-900"
            >
              Printify & Fulfillment
            </a>
            <a
              href="#lookbook"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-wider text-neutral-300 py-1.5 px-3 rounded hover:bg-neutral-900"
            >
              Editorial Lookbook
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={etsyShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#F1641E] text-white text-xs font-semibold"
              >
                <span>Shop Etsy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={sheinShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-neutral-900 text-white border border-neutral-700 hover:bg-white hover:text-black text-xs font-semibold"
              >
                <span>Shop SHEIN</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
