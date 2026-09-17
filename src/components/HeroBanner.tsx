import React from 'react';
import { ExternalLink, Sparkles, Truck, ShieldCheck, ArrowDown, Layers } from 'lucide-react';

interface HeroBannerProps {
  onExplore: () => void;
  etsyShopName: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore, etsyShopName }) => {
  const etsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`;

  return (
    <section className="relative overflow-hidden bg-[#09090b] border-b border-neutral-800">
      {/* Subtle Starburst Background Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neutral-700/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text & Brand Manifesto Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Eyebrow from Moodboard */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono-tag tracking-wider">
              <span className="text-white">✦</span>
              <span>CLOTHING • ACCESSORIES • LIFESTYLE</span>
              <span className="text-neutral-500">•</span>
              <span className="text-amber-400 font-semibold">SAME SOUL • NEW ERA</span>
            </div>

            {/* Main Brand Title */}
            <div className="space-y-3">
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[0.18em] text-white leading-tight uppercase">
                LOST ERA
              </h1>
              <p className="font-cinzel text-lg sm:text-xl text-neutral-400 tracking-[0.12em] uppercase font-medium">
                Somewhere Between Dreams and Reality
              </p>
            </div>

            {/* Core Manifesto Quote from Photo */}
            <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/70 border border-neutral-800/90 space-y-2">
              <p className="font-mono-tag text-xs text-amber-300/90 tracking-widest uppercase">
                [ BRAND MANIFESTO ]
              </p>
              <p className="text-neutral-200 text-base sm:text-lg font-light leading-relaxed italic">
                “Not just a brand, it's a mindset. For those who feel out of time. Different minds, same sky.”
              </p>
              <p className="text-xs text-neutral-400 pt-1">
                Classical antiquity marble statues fused with orbital astronomical geometry and heavy streetwear cuts.
              </p>
            </div>

            {/* Printify & Etsy Partnership Pill Notice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                <div className="w-8 h-8 rounded-md bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Fulfilled via Printify</div>
                  <div className="text-neutral-400 text-[11px] leading-snug">
                    Heavyweight 240+ GSM ring-spun blanks, Kornit DTG inks & 2–4 day localized dispatch.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-950/60 border border-neutral-800/80">
                <div className="w-8 h-8 rounded-md bg-[#F1641E]/15 border border-[#F1641E]/40 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#F1641E]" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Protected on Etsy</div>
                  <div className="text-neutral-400 text-[11px] leading-snug">
                    Etsy Star Seller status, buyer protection guarantee, and 4.9★ verified ratings.
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-semibold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <span>Shop The Collection</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href={etsyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-lg bg-[#F1641E] hover:bg-[#d85516] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <span>Visit Official Etsy Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#printify-etsy"
                className="px-4 py-3.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 text-xs font-mono-tag tracking-wider transition-colors"
              >
                How We Make It
              </a>
            </div>

            {/* Live Trust Metrics */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-neutral-400 font-mono-tag">
              <div>
                <span className="text-white font-bold text-sm">4.9 / 5.0</span> ★ on Etsy
              </div>
              <span className="text-neutral-700">•</span>
              <div>
                <span className="text-white font-bold text-sm">380+</span> Orders Dispatched
              </div>
              <span className="text-neutral-700">•</span>
              <div className="text-amber-300">
                <span className="text-white font-bold text-sm">🇨🇲 Expédition Cameroun</span> (1$ = 570 FCFA)
              </div>
            </div>
          </div>

          {/* Visual Showcase Column (Editorial Flat Lay & Moodboard) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 group">
                <img
                  src="/assets/brand/lost_era_hero_1789676530507.jpg"
                  alt="LOST ERA Gothic Streetwear Collection"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] sm:aspect-square object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                {/* Floating Aesthetic Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2 text-left">
                  <div className="flex items-center justify-between text-xs font-mono-tag text-neutral-300">
                    <span className="bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-700">
                      THE ANTIQUITY & COSMOS DROP
                    </span>
                    <span className="text-amber-400 font-semibold">✦ 2024 COLLECTION</span>
                  </div>
                  <h3 className="font-cinzel text-lg font-bold text-white tracking-wider uppercase">
                    Heavyweight Garments • Direct-to-Garment DTG
                  </h3>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2">
                    Printed on premium ring-spun cotton blanks via Printify’s global network, delivered with tracking worldwide on Etsy.
                  </p>
                </div>
              </div>

              {/* Floating Badge Detail */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#0e0e13]/95 backdrop-blur-md border border-neutral-800 rounded-xl p-3.5 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center font-cinzel text-lg font-bold text-white border border-neutral-700">
                  ✦
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Not Lost, Just Different</div>
                  <div className="text-[11px] font-mono-tag text-neutral-400">Zero deadstock • Made to order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
