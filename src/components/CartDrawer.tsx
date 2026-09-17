import React, { useState } from 'react';
import { X, Trash2, ExternalLink, ShoppingBag, Truck, ShieldCheck, ArrowRight, Check, MessageSquare, Phone } from 'lucide-react';
import { CartItem, CurrencyMode } from '../types';
import { formatCurrencyPrice } from '../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  etsyShopName: string;
  sheinShopName?: string;
  currencyMode: CurrencyMode;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  etsyShopName,
  sheinShopName = 'LostEra',
  currencyMode,
}) => {
  const [directOrderSuccess, setDirectOrderSuccess] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [showDirectForm, setShowDirectForm] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  // Generate store URLs
  const itemsQuery = items.map((i) => `${i.title} (${i.size}) x${i.quantity}`).join(', ');
  const etsyCheckoutUrl = `https://www.etsy.com/shop/${encodeURIComponent(
    etsyShopName
  )}?search_query=${encodeURIComponent(items[0]?.title || 'Lost Era')}`;
  const sheinCheckoutUrl = `https://www.shein.com/search?keyword=${encodeURIComponent(
    sheinShopName
  )}+${encodeURIComponent(items[0]?.title || 'Lost Era')}`;

  const cfaTotal = Math.round(subtotal * 570).toLocaleString('en-US');
  const whatsappMessage = `Hello Kyle & Kenza (K&K)! I want to order from LOST ERA:%0A%0A${encodeURIComponent(
    items.map((i) => `• ${i.title} - Size: ${i.size} - Qty: ${i.quantity} ($${(i.price * i.quantity).toFixed(2)} / ${Math.round(i.price * i.quantity * 570).toLocaleString('en-US')} FCFA)`).join('%0A')
  )}%0A%0ATotal: $${subtotal.toFixed(2)} USD (${cfaTotal} FCFA)%0ACameroon Shipping Delivery`;

  const whatsappOrderUrl = `https://wa.me/237677048355?text=${whatsappMessage}`;

  const handleDirectOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) return;
    setDirectOrderSuccess(true);
    setTimeout(() => {
      setDirectOrderSuccess(false);
      setShowDirectForm(false);
      onClearCart();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-md bg-[#0c0c10] border-l border-neutral-800 h-full flex flex-col justify-between shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-white" />
            <h3 className="font-cinzel text-lg font-bold text-white uppercase tracking-wider">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="p-3.5 bg-neutral-950 border-b border-neutral-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono-tag mb-1.5">
            <span className="text-neutral-300">
              {amountToFreeShipping === 0 ? (
                <strong className="text-emerald-400">🎉 FREE CAMEROON & WORLDWIDE SHIPPING UNLOCKED!</strong>
              ) : (
                <>
                  Add <strong className="text-white">${amountToFreeShipping.toFixed(2)} USD (~{Math.round(amountToFreeShipping * 570).toLocaleString('en-US')} FCFA)</strong> for Free Cameroon Shipping
                </>
              )}
            </span>
            <span className="text-neutral-400 font-bold">{Math.round(progressToFreeShipping)}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neutral-400 to-white transition-all duration-300"
              style={{ width: `${progressToFreeShipping}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 font-cinzel text-2xl">
                ✦
              </div>
              <p className="font-cinzel text-base text-white uppercase">Your Bag is Empty</p>
              <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                Discover the Antiquity & Cosmos collection of heavyweight streetwear.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/80 flex gap-3 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-lg object-cover border border-neutral-800 shrink-0 bg-neutral-900"
                />

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-cinzel text-xs font-bold text-white truncate">
                      {item.title}
                    </h4>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-[11px] font-mono-tag text-neutral-400 flex items-center gap-2">
                    <span>Size: <strong className="text-white">{item.size}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-400">Printify DTG</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center border border-neutral-800 rounded bg-neutral-900 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 font-mono-tag text-white font-bold text-[11px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-white font-mono-tag block">
                        {currencyMode === 'both'
                          ? `$${(item.price * item.quantity).toFixed(2)} · ${Math.round(item.price * item.quantity * 570).toLocaleString('en-US')} FCFA`
                          : formatCurrencyPrice(item.price * item.quantity, currencyMode).display}
                      </span>
                      {currencyMode !== 'both' && (
                        <span className="text-[10px] text-neutral-400 font-mono-tag block">
                          {formatCurrencyPrice(item.price * item.quantity, currencyMode).subDisplay}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Options */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-neutral-800 bg-[#0a0a0d] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Estimated Subtotal</span>
                <div className="text-right">
                  <span className="font-bold text-white text-base font-mono-tag block">
                    {currencyMode === 'both'
                      ? `$${subtotal.toFixed(2)} USD · ${Math.round(subtotal * 570).toLocaleString('en-US')} FCFA`
                      : formatCurrencyPrice(subtotal, currencyMode).display}
                  </span>
                  {currencyMode !== 'both' && (
                    <span className="text-[11px] text-neutral-400 font-mono-tag">
                      {formatCurrencyPrice(subtotal, currencyMode).subDisplay}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono-tag">
                <span>Cameroon Shipping (Douala/Ydé/Relay)</span>
                <span>{amountToFreeShipping === 0 ? 'FREE' : 'Free over 42,750 FCFA ($75)'}</span>
              </div>
            </div>

            {/* Direct Order Form Toggle or Success */}
            {directOrderSuccess ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-mono-tag">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Order request sent! Check your inbox for custom invoice & Etsy link.</span>
              </div>
            ) : showDirectForm ? (
              <form onSubmit={handleDirectOrder} className="space-y-2 pt-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for Etsy custom order link..."
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-white"
                />
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200"
                  >
                    Confirm Order Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDirectForm(false)}
                    className="px-3 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-2">
                {/* Primary: Marketplaces */}
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={etsyCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-[#F1641E] hover:bg-[#d85516] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all"
                  >
                    <span>Etsy Checkout</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={sheinCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-neutral-900 hover:bg-white text-white hover:text-black border border-neutral-700 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow transition-all"
                  >
                    <span>SHEIN Checkout</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Direct WhatsApp Order with K&K */}
                <a
                  href={whatsappOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order via WhatsApp to K&K (+237 677048355)</span>
                </a>

                {/* Secondary: Request Direct Invoice / Bundle */}
                <button
                  onClick={() => setShowDirectForm(true)}
                  className="w-full py-2 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-semibold text-xs tracking-wider transition-all"
                >
                  Request Custom Invoice / Payment Details
                </button>
              </div>
            )}

            {/* Trust badge footer */}
            <div className="pt-2 flex flex-col gap-1.5 text-[10px] text-neutral-400 font-mono-tag">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#F1641E]" />
                  <span>Etsy & SHEIN Buyer Protection</span>
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-3 h-3 text-emerald-400" />
                  <span>Printify Direct Dispatch</span>
                </span>
              </div>
              <div className="text-center text-neutral-500 text-[10px] pt-1 border-t border-neutral-800/60">
                Co-founded by Kyle & Kenza (K&K) • Direct: (+237) 677048355
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
