import React, { useState } from 'react';
import {
  Layers,
  ShieldCheck,
  Truck,
  Globe2,
  CheckCircle,
  ExternalLink,
  Package,
  Cpu,
  Leaf,
  Clock,
} from 'lucide-react';
import { PRINTIFY_STEPS } from '../data/products';

interface PrintifyEtsySectionProps {
  etsyShopName: string;
  sheinShopName?: string;
}

export const PrintifyEtsySection: React.FC<PrintifyEtsySectionProps> = ({
  etsyShopName,
  sheinShopName = 'LostEra',
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'cm' | 'us' | 'uk' | 'eu' | 'ca' | 'au'>('cm');

  const etsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}`;
  const sheinUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(sheinShopName)}`;

  const regionsData = {
    cm: {
      name: '🇨🇲 Cameroon (Douala, Yaoundé & All Regions)',
      productionHub: 'Printify Priority Global Hub -> Douala International Airport & Yaoundé Customs Transit',
      printTime: '2 – 3 business days (Heavyweight DTG Printing)',
      shippingTime: 'Douala & Yaoundé: 5 – 8 business days | Regional relay: 7 – 11 business days',
      shippingCost: 'Gratuit dès 42 750 FCFA ($75) d\'achats • Standard: 3 500 FCFA ($6.14)',
      relayAgencies: 'Campost, Touristique Express, Buca Voyages, DHL Express Cameroun & remise en main propre',
    },
    us: {
      name: 'United States',
      productionHub: 'Printify US East / Midwest Hubs (California, North Carolina)',
      printTime: '2 – 3 business days',
      shippingTime: '2 – 4 business days (USPS Tracked)',
      shippingCost: 'Free on orders $75+ (42,750 FCFA) • otherwise $4.99 (2,845 FCFA)',
      relayAgencies: 'USPS, UPS Ground & FedEx Home Delivery',
    },
    uk: {
      name: 'United Kingdom',
      productionHub: 'Printify UK Production Center (Leicester / Birmingham)',
      printTime: '2 – 3 business days',
      shippingTime: '2 – 3 business days (Royal Mail Tracked 48)',
      shippingCost: 'Free on orders $75+ (42,750 FCFA) • otherwise £3.99',
      relayAgencies: 'Royal Mail Tracked 48 & DPD UK',
    },
    eu: {
      name: 'European Union',
      productionHub: 'Printify EU Hubs (Frankfurt, Germany & Prague, Czechia)',
      printTime: '2 – 4 business days',
      shippingTime: '3 – 5 business days (DHL / DPD Euro Tracked)',
      shippingCost: 'Free on orders $75+ (42,750 FCFA) • otherwise €4.99',
      relayAgencies: 'DHL Paket, Colissimo France, DPD Europe',
    },
    ca: {
      name: 'Canada',
      productionHub: 'Printify Canada Facility (Toronto, Ontario)',
      printTime: '2 – 4 business days',
      shippingTime: '3 – 6 business days (Canada Post Expedited)',
      shippingCost: 'Free on orders $75+ (42,750 FCFA) • otherwise C$6.99',
      relayAgencies: 'Canada Post Expedited Parcel',
    },
    au: {
      name: 'Australia & New Zealand',
      productionHub: 'Printify Oceania Partner (Melbourne, Victoria)',
      printTime: '2 – 4 business days',
      shippingTime: '3 – 6 business days (Australia Post eParcel)',
      shippingCost: 'Calculated at Etsy checkout',
      relayAgencies: 'Australia Post eParcel',
    },
  };

  const currentRegion = regionsData[selectedRegion];

  return (
    <section id="printify-etsy" className="py-16 sm:py-24 bg-[#0c0c10] border-t border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono-tag text-amber-400 tracking-wider">
            <span>✦ BUSINESS ARCHITECTURE</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white tracking-wider uppercase">
            Crafted with Printify • Backed by Etsy
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            We merge independent dark streetwear design with industrial-grade fulfillment. Every single LOST ERA garment is manufactured on demand using Printify's premium heavyweight blanks and delivered directly to your doorstep through Etsy.
          </p>
        </div>

        {/* Dual Pillar Comparison: Printify vs Etsy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Printify Production Standards */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-cinzel">Printify Fulfillment</h3>
                    <p className="text-xs font-mono-tag text-neutral-400">Production & Quality Standards</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-mono-tag bg-emerald-900/40 text-emerald-300 border border-emerald-800/50">
                  Global DTG Partner
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Rather than using flimsy promotional t-shirts, LOST ERA exclusively curates Printify’s highest-tier heavy blanks (240 GSM combed ring-spun cotton and 400 GSM brushed fleece).
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <Cpu className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Kornit Avalanche DTG Technology:</strong> Water-based pigment inks embedded directly into the cotton fibers without that rubbery, plastic peel of cheap heat transfers.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <Leaf className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Sustainable Print-on-Demand:</strong> We hold zero deadstock inventory. Every item is printed only when an order is placed, eliminating textile landfill waste.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <Globe2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Intelligent Geo-Routing:</strong> Printify routes your order to the closest factory to your address, drastically cutting international shipping emissions.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400 font-mono-tag">
              <span>Zero Textile Waste</span>
              <span>•</span>
              <span>OEKO-TEX Certified Inks</span>
              <span>•</span>
              <span>Preshrunk Blanks</span>
            </div>
          </div>

          {/* Pillar 2: Etsy & SHEIN Storefronts & Trust */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800/90 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F1641E]/15 border border-[#F1641E]/40 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#F1641E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-cinzel">Etsy & SHEIN Storefronts</h3>
                    <p className="text-xs font-mono-tag text-neutral-400">Buyer Protection & Rapid Dispatch</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F1641E] text-white">
                    Etsy 4.9★
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white text-black">
                    SHEIN
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                By hosting our designs across Etsy and SHEIN, you receive the full backing of top global marketplaces with end-to-end buyer protection, verified ratings, and seamless cross-border shipping.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Full Purchase Protection:</strong> If an item is delayed, damaged, or lost in transit, marketplace purchase protection guarantees an immediate replacement or full refund.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Verified Buyer Feedback:</strong> Verified orders from real streetwear collectors worldwide with photo and fit reviews.
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-neutral-300">
                  <Package className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Live Tracking & Cameroon Relays:</strong> Instant parcel dispatch updates with direct tracking numbers and regional courier relay options.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono-tag text-neutral-400">Official Stores: Etsy (@{etsyShopName}) • SHEIN (@{sheinShopName})</span>
              <div className="flex items-center gap-2">
                <a
                  href={etsyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F1641E] text-white hover:bg-[#d85516] transition-colors"
                >
                  <span>Etsy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={sheinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white border border-neutral-700 hover:bg-white hover:text-black transition-colors"
                >
                  <span>SHEIN</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Production Flow */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wider uppercase">
              How Your Order Is Made
            </h3>
            <p className="text-xs text-neutral-400 font-mono-tag">
              FROM DIGITAL ARTWORK TO PRINTIFY CARRIER TRUCK TO YOUR CLOSET
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINTIFY_STEPS.map((st) => (
              <div
                key={st.step}
                className="p-5 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-2 text-left relative overflow-hidden"
              >
                <div className="text-2xl font-mono-tag font-bold text-neutral-600">
                  {st.step}
                </div>
                <h4 className="font-cinzel text-sm font-bold text-white">{st.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Delivery & Transit Estimator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-tag text-emerald-400">
                <Truck className="w-4 h-4" />
                <span>PRINTIFY GLOBAL DISPATCH ESTIMATOR</span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-white mt-1">
                Estimated Delivery for {currentRegion.name}
              </h3>
            </div>

            {/* Region Selector Pills */}
            <div className="flex flex-wrap gap-1.5">
              {(
                [
                  { id: 'cm', label: '🇨🇲 Cameroun (Douala / Yaoundé)' },
                  { id: 'us', label: '🇺🇸 United States' },
                  { id: 'uk', label: '🇬🇧 United Kingdom' },
                  { id: 'eu', label: '🇪🇺 European Union' },
                  { id: 'ca', label: '🇨🇦 Canada' },
                  { id: 'au', label: '🇦🇺 Australia' },
                ] as const
              ).map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedRegion === reg.id
                      ? 'bg-amber-400 text-black font-semibold shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>
          </div>

          {/* Region Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1">
              <div className="text-[11px] font-mono-tag text-neutral-400 uppercase">Hub de Production</div>
              <div className="text-xs font-bold text-white">{currentRegion.productionHub}</div>
              <div className="text-[11px] text-neutral-400">Atelier certifié Printify direct</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1">
              <div className="text-[11px] font-mono-tag text-neutral-400 uppercase">Impression & Séchage</div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentRegion.printTime}</span>
              </div>
              <div className="text-[11px] text-neutral-400">Encres écologiques Kornit & contrôle qualité</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1">
              <div className="text-[11px] font-mono-tag text-neutral-400 uppercase">Délais de Livraison</div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-neutral-300" />
                <span>{currentRegion.shippingTime}</span>
              </div>
              <div className="text-[11px] text-neutral-400">{currentRegion.shippingCost}</div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 space-y-1">
              <div className="text-[11px] font-mono-tag text-amber-400 uppercase">Agences & Relais</div>
              <div className="text-xs font-semibold text-neutral-200">{currentRegion.relayAgencies}</div>
              <div className="text-[11px] text-neutral-400">Numéro de suivi transmis via Etsy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
