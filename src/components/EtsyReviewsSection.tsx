import React from 'react';
import { Star, ShieldCheck, CheckCircle, ExternalLink, ThumbsUp, Sparkles } from 'lucide-react';
import { ETSY_REVIEWS } from '../data/products';

interface EtsyReviewsSectionProps {
  etsyShopName: string;
}

export const EtsyReviewsSection: React.FC<EtsyReviewsSectionProps> = ({ etsyShopName }) => {
  const etsyUrl = `https://www.etsy.com/shop/${encodeURIComponent(etsyShopName)}#reviews`;

  return (
    <section className="py-16 sm:py-20 bg-[#09090c] border-b border-neutral-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Overall Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1641E]/15 border border-[#F1641E]/40 text-xs font-mono-tag text-[#F1641E]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED ETSY REVIEWS</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-black text-white tracking-wider uppercase">
              What The Community Says
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              Real feedback from verified buyers who purchased LOST ERA pieces through our official Etsy shop.
            </p>
          </div>

          {/* Etsy Rating Banner Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center gap-5 shadow-lg shrink-0">
            <div className="text-center">
              <div className="text-3xl font-black text-white font-cinzel">4.9</div>
              <div className="flex items-center justify-center gap-0.5 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-neutral-800"></div>
            <div className="text-xs space-y-0.5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Etsy Star Seller</span>
              </div>
              <div className="text-neutral-400">380+ Verified Sales</div>
              <div className="text-neutral-500 text-[11px] font-mono-tag">99% On-Time Dispatch</div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETSY_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-[#0f0f14] border border-neutral-800/90 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-colors shadow-md"
            >
              <div className="space-y-3">
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono-tag text-neutral-500">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  “{rev.reviewText}”
                </p>
              </div>

              {/* Author & Item info */}
              <div className="pt-3 border-t border-neutral-800/80 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{rev.author}</span>
                  <span className="text-neutral-500 text-[11px]">{rev.location}</span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono-tag">
                  <span className="truncate max-w-[170px]" title={rev.itemPurchased}>
                    {rev.itemPurchased}
                  </span>
                  {rev.itemSize && <span className="text-neutral-500">{rev.itemSize}</span>}
                </div>

                {rev.verifiedPurchase && (
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono-tag pt-0.5">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Etsy Purchase</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA link to Etsy */}
        <div className="text-center pt-2">
          <a
            href={etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white transition-all shadow-sm"
          >
            <span>Read all 380+ reviews on our official Etsy shop (@{etsyShopName})</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#F1641E]" />
          </a>
        </div>
      </div>
    </section>
  );
};
