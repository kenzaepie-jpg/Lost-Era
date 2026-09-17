import React, { useState } from 'react';
import { X, Settings, ExternalLink, Check, Store, ShieldCheck } from 'lucide-react';

interface EtsyShopSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentShopName: string;
  currentSheinShopName?: string;
  onSaveShopName: (newShopName: string) => void;
  onSaveSheinShopName?: (newSheinName: string) => void;
}

export const EtsyShopSettingsModal: React.FC<EtsyShopSettingsModalProps> = ({
  isOpen,
  onClose,
  currentShopName,
  currentSheinShopName = 'LostEra',
  onSaveShopName,
  onSaveSheinShopName,
}) => {
  const [shopNameInput, setShopNameInput] = useState(currentShopName);
  const [sheinInput, setSheinInput] = useState(currentSheinShopName);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEtsy = shopNameInput.trim().replace(/^@/, '').replace(/https?:\/\/(www\.)?etsy\.com\/shop\//, '');
    const cleanShein = sheinInput.trim().replace(/^@/, '').replace(/https?:\/\/(www\.)?shein\.com\//, '');
    
    onSaveShopName(cleanEtsy || 'LostEraOfficial');
    if (onSaveSheinShopName) {
      onSaveSheinShopName(cleanShein || 'LostEra');
    }
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const etsyPreviewUrl = `https://www.etsy.com/shop/${encodeURIComponent(shopNameInput.trim() || 'LostEraOfficial')}`;
  const sheinPreviewUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(sheinInput.trim() || 'LostEra')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-full max-w-lg bg-[#0e0e13] border border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-2xl text-left space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-700"
          aria-label="Close settings"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-lg font-bold text-white uppercase">
              Etsy & SHEIN Storefront Settings
            </h3>
            <p className="text-xs text-neutral-400 font-mono-tag">
              CONNECT YOUR REAL STORE HANDLES
            </p>
          </div>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed">
          Configure your official <strong>Etsy</strong> and <strong>SHEIN</strong> handles below. All product buttons, quick view buy links, and cart checkout shortcuts across this website will dynamically redirect customers to your verified stores.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Etsy Handle Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono-tag uppercase text-neutral-300 flex items-center justify-between">
              <span>1. Etsy Shop Handle:</span>
              <span className="text-[10px] text-[#F1641E]">etsy.com/shop/[handle]</span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xs font-mono-tag text-neutral-500">
                etsy.com/shop/
              </span>
              <input
                type="text"
                value={shopNameInput}
                onChange={(e) => setShopNameInput(e.target.value)}
                placeholder="LostEraOfficial"
                className="w-full pl-32 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-mono-tag focus:outline-none focus:ring-1 focus:ring-[#F1641E]"
              />
            </div>
            <div className="text-[11px] font-mono-tag text-neutral-500 flex items-center justify-between px-1">
              <span className="truncate">Preview: {etsyPreviewUrl}</span>
              <a href={etsyPreviewUrl} target="_blank" rel="noopener noreferrer" className="text-[#F1641E] hover:underline flex items-center gap-1 shrink-0 ml-2">
                <span>Test</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* SHEIN Handle Input */}
          <div className="space-y-1.5 pt-2 border-t border-neutral-800">
            <label className="text-xs font-mono-tag uppercase text-neutral-300 flex items-center justify-between">
              <span>2. SHEIN Store Name / Keyword:</span>
              <span className="text-[10px] text-white">shein.com/search?keyword=</span>
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-xs font-mono-tag text-neutral-500">
                shein.com/
              </span>
              <input
                type="text"
                value={sheinInput}
                onChange={(e) => setSheinInput(e.target.value)}
                placeholder="LostEra"
                className="w-full pl-24 pr-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-xs font-mono-tag focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>
            <div className="text-[11px] font-mono-tag text-neutral-500 flex items-center justify-between px-1">
              <span className="truncate">Preview: {sheinPreviewUrl}</span>
              <a href={sheinPreviewUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 shrink-0 ml-2">
                <span>Test</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              className={`flex-1 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                savedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white hover:bg-neutral-200 text-black shadow-md'
              }`}
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved! Updated Etsy & SHEIN Links</span>
                </>
              ) : (
                <span>Save & Update Store Links</span>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 text-xs font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
