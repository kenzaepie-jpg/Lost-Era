import React from 'react';
import { Sparkles, Compass, Moon, Shield, Flame } from 'lucide-react';

export const BrandManifesto: React.FC = () => {
  return (
    <section id="lookbook" className="py-16 sm:py-24 bg-[#08080a] relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono-tag text-amber-400">
              <span>✦ BRAND PHILOSOPHY</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-widest uppercase">
              The Lost Era Codex
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              We live in an age of hyper-accelerated digital noise. LOST ERA was born from a desire to pause the clock—pulling classical Hellenistic sculpture and renaissance angel engravings into raw, cosmic streetwear.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 font-mono-tag text-xs text-neutral-300 space-y-1 shrink-0">
            <div className="text-amber-400 font-bold">MOTTO 01:</div>
            <div>"FOR THOSE WHO FEEL OUT OF TIME"</div>
            <div className="text-neutral-500 text-[10px]">EST. IN THE VOID</div>
          </div>
        </div>

        {/* 3 Visual Pillars directly from the photo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Antiquity Bust */}
          <div className="p-6 rounded-2xl bg-[#0d0d12] border border-neutral-800 hover:border-neutral-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-cinzel text-xl text-white">
              🏛️
            </div>
            <div className="space-y-2">
              <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                Classical Antiquity
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Hand-engraved marble busts of ancient Greek philosophers and deities represent eternal endurance—a direct rebellion against fleeting, disposable fast-fashion cycles.
              </p>
            </div>
            <div className="pt-2 border-t border-neutral-800/80 text-[11px] font-mono-tag text-neutral-400">
              "SOMEWHERE BETWEEN DREAMS AND REALITY"
            </div>
          </div>

          {/* Pillar 2: Celestial Orbits */}
          <div className="p-6 rounded-2xl bg-[#0d0d12] border border-neutral-800 hover:border-neutral-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-cinzel text-xl text-white">
              🪐
            </div>
            <div className="space-y-2">
              <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                Celestial Cosmos
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Wireframe planetary trajectories, orbiting moons, and navigational star charts remind us of humanity's smallness beneath an infinite sky.
              </p>
            </div>
            <div className="pt-2 border-t border-neutral-800/80 text-[11px] font-mono-tag text-neutral-400">
              "DIFFERENT MINDS • SAME SKY"
            </div>
          </div>

          {/* Pillar 3: Heavyweight Streetwear */}
          <div className="p-6 rounded-2xl bg-[#0d0d12] border border-neutral-800 hover:border-neutral-700 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center font-cinzel text-xl text-white">
              ✦
            </div>
            <div className="space-y-2">
              <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
                The Heavyweight Cut
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Streetwear is armor. We specify 240+ GSM ring-spun cotton and 400 GSM fleece blanks from Printify that maintain their boxy silhouette wash after wash.
              </p>
            </div>
            <div className="pt-2 border-t border-neutral-800/80 text-[11px] font-mono-tag text-neutral-400">
              "SAME SOUL • NEW ERA"
            </div>
          </div>
        </div>

        {/* Featured Visual Moodboard Collage */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono-tag text-xs text-amber-400 tracking-widest uppercase">
                [ THE 2024 DROP ]
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white tracking-wider uppercase">
                Not Lost, Just in a Different Era
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                From oversized graphic tees printed front-and-back with high-contrast DTG inks to heavy ripstop cargo pants, the entire collection was designed to harmonize together into a cohesive dark wardrobe.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 text-xs font-mono-tag border border-neutral-800">
                  Heavyweight Tees (240 GSM)
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 text-xs font-mono-tag border border-neutral-800">
                  Angel Boxy Hoodies (400 GSM)
                </span>
                <span className="px-3 py-1 rounded-full bg-neutral-900 text-neutral-300 text-xs font-mono-tag border border-neutral-800">
                  Dad Caps & Mugs
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-square bg-neutral-900">
                <img
                  src="/assets/brand/lost_era_tee_1789676546486.jpg"
                  alt="T-shirt detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-square bg-neutral-900">
                <img
                  src="/assets/brand/lost_era_hoodie_1789676560634.jpg"
                  alt="Hoodie detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
