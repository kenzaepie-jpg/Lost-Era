import React from 'react';
import { Phone, MessageSquare, ExternalLink, Sparkles, ShieldCheck, Heart, Store } from 'lucide-react';

interface FoundersSectionProps {
  etsyShopName: string;
  sheinShopName: string;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({
  etsyShopName,
  sheinShopName,
}) => {
  const phoneNumber = '(+237) 677048355';
  const cleanPhone = '237677048355';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Kyle & Kenza (K&K), I am interested in LOST ERA pieces / custom order."
  )}`;
  const etsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`;
  const sheinUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(sheinShopName)}`;

  return (
    <section id="founders" className="relative py-16 sm:py-20 bg-[#0b0b0f] border-t border-b border-neutral-800/80 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-xs font-mono-tag text-amber-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDERS & CREATIVE DIRECTORS • K&K</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-wider text-white uppercase">
            Kyle & Kenza <span className="text-amber-400 font-serif font-normal">(K&K)</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            “Not just a brand, it's a mindset. For those who feel out of time.”
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            LOST ERA was co-founded by <strong>Kyle</strong> and <strong>Kenza (K&K)</strong> out of a shared obsession with classical antiquity, dark streetwear silhouettes, and heavyweight garment craftsmanship. Operating between Cameroon and global print facilities, every piece is made to order with zero deadstock waste.
          </p>
        </div>

        {/* Contact & Direct Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 max-w-4xl mx-auto">
          {/* Card 1: Direct Phone Call */}
          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left space-y-3 hover:border-neutral-700 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono-tag text-neutral-400 uppercase">Direct Phone Line</div>
              <div className="text-sm font-bold text-white tracking-wide">{phoneNumber}</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Direct phone inquiries with Kyle & Kenza for orders, sizing help, or Cameroon delivery.
              </p>
            </div>
            <a
              href={`tel:${cleanPhone}`}
              className="mt-2 w-full py-2 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (+237) 677048355</span>
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-emerald-900/40 text-left space-y-3 hover:border-emerald-700/60 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono-tag text-emerald-400 uppercase">WhatsApp Concierge</div>
              <div className="text-sm font-bold text-white tracking-wide">Direct Chat with K&K</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Fast WhatsApp support for Douala & Yaoundé relay shipping, custom orders, or questions.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Dual Official Marketplaces (Etsy & SHEIN) */}
          <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-left space-y-3 hover:border-neutral-700 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Store className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono-tag text-neutral-400 uppercase">Official Marketplaces</div>
              <div className="text-sm font-bold text-white tracking-wide">Etsy & SHEIN Stores</div>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Browse our verified storefronts with buyer protection and international tracking.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-[#F1641E]/15 hover:bg-[#F1641E] text-[#F1641E] hover:text-white border border-[#F1641E]/40 text-[11px] font-semibold flex items-center justify-center gap-1 transition-all"
                title="Shop on Etsy"
              >
                <span>Etsy</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={sheinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-white hover:bg-neutral-200 text-black text-[11px] font-semibold flex items-center justify-center gap-1 transition-all"
                title="Shop on SHEIN"
              >
                <span>SHEIN</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Small Signature Strip */}
        <div className="mt-8 text-center text-xs font-mono-tag text-neutral-500 flex items-center justify-center gap-2">
          <span>Cameroon 🇨🇲 • Founded by Kyle & Kenza (K&K)</span>
          <span>✦</span>
          <span>Contact: (+237) 677048355</span>
        </div>
      </div>
    </section>
  );
};
