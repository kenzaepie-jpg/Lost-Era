import React, { useState } from 'react';
import { X, Ruler, Info } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tee' | 'hoodie' | 'cargo'>('tee');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');

  if (!isOpen) return null;

  const teeSizes = [
    { size: 'S', chestIn: '36-38', lengthIn: '28.0', chestCm: '91-96', lengthCm: '71' },
    { size: 'M', chestIn: '40-42', lengthIn: '29.0', chestCm: '101-106', lengthCm: '74' },
    { size: 'L', chestIn: '44-46', lengthIn: '30.0', chestCm: '111-116', lengthCm: '76' },
    { size: 'XL', chestIn: '48-50', lengthIn: '31.0', chestCm: '121-127', lengthCm: '79' },
    { size: '2XL', chestIn: '52-54', lengthIn: '32.0', chestCm: '132-137', lengthCm: '81' },
    { size: '3XL', chestIn: '56-58', lengthIn: '33.0', chestCm: '142-147', lengthCm: '84' },
  ];

  const hoodieSizes = [
    { size: 'S', chestIn: '40-42', lengthIn: '27.5', chestCm: '101-106', lengthCm: '70' },
    { size: 'M', chestIn: '44-46', lengthIn: '28.5', chestCm: '111-116', lengthCm: '72' },
    { size: 'L', chestIn: '48-50', lengthIn: '29.5', chestCm: '121-127', lengthCm: '75' },
    { size: 'XL', chestIn: '52-54', lengthIn: '30.5', chestCm: '132-137', lengthCm: '77' },
    { size: '2XL', chestIn: '56-58', lengthIn: '31.5', chestCm: '142-147', lengthCm: '80' },
  ];

  const cargoSizes = [
    { size: 'S (30)', waistIn: '30-32', inseamIn: '30.0', waistCm: '76-81', inseamCm: '76' },
    { size: 'M (32)', waistIn: '32-34', inseamIn: '31.0', waistCm: '81-86', inseamCm: '79' },
    { size: 'L (34)', waistIn: '34-36', inseamIn: '31.5', waistCm: '86-91', inseamCm: '80' },
    { size: 'XL (36)', waistIn: '36-38', inseamIn: '32.0', waistCm: '91-96', inseamCm: '81' },
    { size: '2XL (38)', waistIn: '38-40', inseamIn: '32.5', waistCm: '96-101', inseamCm: '82' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-2xl bg-[#0e0e13] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-700"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white uppercase">
              Streetwear Sizing Guide
            </h3>
            <p className="text-xs text-neutral-400 font-mono-tag">
              PRINTIFY HEAVYWEIGHT BLANKS SPECIFICATIONS
            </p>
          </div>
        </div>

        {/* Tab & Unit Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3">
          <div className="flex gap-2 text-xs font-mono-tag">
            <button
              onClick={() => setActiveTab('tee')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'tee'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              Heavyweight Tees
            </button>
            <button
              onClick={() => setActiveTab('hoodie')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'hoodie'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              Boxy Hoodies
            </button>
            <button
              onClick={() => setActiveTab('cargo')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'cargo'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white'
              }`}
            >
              Cargo Pants
            </button>
          </div>

          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-lg border border-neutral-800 text-xs font-mono-tag">
            <button
              onClick={() => setUnit('in')}
              className={`px-2.5 py-1 rounded ${
                unit === 'in' ? 'bg-neutral-700 text-white font-bold' : 'text-neutral-400'
              }`}
            >
              INCHES
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-2.5 py-1 rounded ${
                unit === 'cm' ? 'bg-neutral-700 text-white font-bold' : 'text-neutral-400'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-400 font-mono-tag">
                <th className="pb-3 px-2">Size</th>
                {activeTab !== 'cargo' ? (
                  <>
                    <th className="pb-3 px-2">Chest Width</th>
                    <th className="pb-3 px-2">Body Length</th>
                  </>
                ) : (
                  <>
                    <th className="pb-3 px-2">Waist</th>
                    <th className="pb-3 px-2">Inseam</th>
                  </>
                )}
                <th className="pb-3 px-2">Fit Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-mono-tag text-neutral-300">
              {activeTab === 'tee' &&
                teeSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-900/40">
                    <td className="py-2.5 px-2 font-bold text-white">{row.size}</td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.chestIn} in` : `${row.chestCm} cm`}
                    </td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.lengthIn} in` : `${row.lengthCm} cm`}
                    </td>
                    <td className="py-2.5 px-2 text-neutral-400 text-[11px]">
                      {row.size === 'S' || row.size === 'M'
                        ? 'Relaxed Streetwear Fit'
                        : 'Oversized Boxy Silhouette'}
                    </td>
                  </tr>
                ))}

              {activeTab === 'hoodie' &&
                hoodieSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-900/40">
                    <td className="py-2.5 px-2 font-bold text-white">{row.size}</td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.chestIn} in` : `${row.chestCm} cm`}
                    </td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.lengthIn} in` : `${row.lengthCm} cm`}
                    </td>
                    <td className="py-2.5 px-2 text-neutral-400 text-[11px]">
                      Thick drop-shoulder fleece cut
                    </td>
                  </tr>
                ))}

              {activeTab === 'cargo' &&
                cargoSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-900/40">
                    <td className="py-2.5 px-2 font-bold text-white">{row.size}</td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.waistIn} in` : `${row.waistCm} cm`}
                    </td>
                    <td className="py-2.5 px-2">
                      {unit === 'in' ? `${row.inseamIn} in` : `${row.inseamCm} cm`}
                    </td>
                    <td className="py-2.5 px-2 text-neutral-400 text-[11px]">
                      Baggy streetwear drape
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Fit Advice Notice */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-semibold text-white">LOST ERA Fit Philosophy:</div>
            <p className="leading-relaxed">
              Our tees and hoodies are patterned for an authentic boxy, drop-shoulder streetwear fit. If you prefer a loose relaxed drape, order your true size. If you prefer a tailored fitted look, order one size down. All blanks are pre-shrunk by Printify production partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
