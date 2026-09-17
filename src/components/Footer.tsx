import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Layers, Mail, Check, Sparkles, Phone, MessageSquare, Store, Heart } from 'lucide-react';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
  etsyShopName: string;
  sheinShopName?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  etsyShopName,
  sheinShopName = 'LostEra',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const phoneNumber = '(+237) 677048355';
  const cleanPhone = '237677048355';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Kyle & Kenza (K&K), I'm contacting you from LOST ERA official store"
  )}`;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const etsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`;
  const sheinUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(sheinShopName)}`;

  return (
    <footer className="bg-[#060608] border-t border-neutral-800/80 text-neutral-400 text-left">
      {/* Upper Newsletter Section */}
      <div className="border-b border-neutral-800/60 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono-tag text-amber-400 tracking-wider">
                <span>✦ FIRST ACCESS TO LIMITED DROPS</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider">
                Join The Lost Era Syndicate
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl leading-relaxed">
                Receive secret Etsy & SHEIN promo discount codes, behind-the-scenes Printify blank previews, and early drops before public release.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-mono-tag">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>You're in. Watch your inbox for secret drop links.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email..."
                      className="w-full pl-10 pr-3 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-2xl font-black tracking-[0.2em] text-white uppercase">
                LOST ERA
              </span>
              <span className="text-xs font-mono-tag text-neutral-400">✦</span>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed italic">
              “Not just a brand, it's a mindset. For those who feel out of time. Somewhere between dreams and reality.”
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Co-founded by <strong>Kyle & Kenza (K&K)</strong>. Independent dark streetwear and lifestyle creations. Heavyweight ring-spun blanks manufactured via Printify; official storefronts on Etsy & SHEIN.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono-tag text-emerald-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Printify Production Partner</span>
              </span>
              <a
                href={etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-mono-tag text-[#F1641E]"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Etsy Storefront</span>
              </a>
              <a
                href={sheinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-[11px] font-mono-tag text-white"
              >
                <Store className="w-3.5 h-3.5" />
                <span>SHEIN Storefront</span>
              </a>
            </div>
          </div>

          {/* Col 2: Collection Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Collection
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory('tees')}
                  className="hover:text-white transition-colors"
                >
                  Heavyweight Graphic Tees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('hoodies')}
                  className="hover:text-white transition-colors"
                >
                  Boxy Angel Hoodies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('bottoms')}
                  className="hover:text-white transition-colors"
                >
                  Tactical Cargo Bottoms
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-white transition-colors"
                >
                  Embroidered Caps & Scarves
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('lifestyle')}
                  className="hover:text-white transition-colors"
                >
                  Celestial Orbit Mugs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Stores & Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Stores & Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#F1641E] hover:underline"
                >
                  <span>Official Etsy Storefront</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={sheinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:underline"
                >
                  <span>Official SHEIN Storefront</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#founders" className="text-amber-300 hover:text-white transition-colors">
                  K&K Founders Story & Direct Line
                </a>
              </li>
              <li>
                <a href="#printify-etsy" className="hover:text-white transition-colors">
                  Printify Manufacturing Process
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">
                  Brand Lookbook & Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Garment Specs */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider">
              Garment Specs
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <div>
                <strong className="text-neutral-300">Tees:</strong> 240 GSM Ring-Spun Cotton
              </div>
              <div>
                <strong className="text-neutral-300">Hoodies:</strong> 400 GSM Heavyweight Fleece
              </div>
              <div>
                <strong className="text-neutral-300">Prints:</strong> Kornit Avalanche HD6 Inks
              </div>
              <div>
                <strong className="text-neutral-300">Fulfillment:</strong> Printify + Etsy & SHEIN Protection
              </div>
            </div>
          </div>

          {/* Col 5: Cameroon Delivery & Currency */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1">
              <span>🇨🇲 Cameroun Shipping</span>
            </h4>
            <div className="text-xs space-y-2 text-neutral-400">
              <div>
                <strong className="text-neutral-300">Taux fixe:</strong> 1$ USD = 570 FCFA
              </div>
              <div>
                <strong className="text-neutral-300">Villes:</strong> Douala, Yaoundé & All Regions
              </div>
              <div>
                <strong className="text-neutral-300">Agences:</strong> Campost, Touristique, Buca
              </div>
              <div className="text-emerald-400 font-mono-tag text-[11px]">
                ✦ Port offert dès 42 750 FCFA ($75)
              </div>
            </div>
          </div>
        </div>

        {/* Founders Recognition & Direct Contact Box */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-tag text-amber-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Created & Owned by K&K • Kyle & Kenza</span>
            </div>
            <h4 className="font-cinzel text-lg font-bold text-white uppercase">
              Direct Founders Support & Custom Inquiries
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Have questions about Cameroon parcel delivery, custom apparel requests, sizing, or bulk orders? Connect directly with owners Kyle & Kenza.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${cleanPhone}`}
              className="px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{phoneNumber}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp K&K</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tag text-neutral-500">
          <div>
            © {new Date().getFullYear()} LOST ERA. Owned & Founded by <strong>Kyle & Kenza (K&K)</strong> • Contact: {phoneNumber} • Available on Etsy & SHEIN.
          </div>
          <div className="flex items-center gap-4">
            <span>SAME SOUL • NEW ERA</span>
            <span>•</span>
            <span>DIFFERENT MINDS • SAME SKY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
