export type CurrencyMode = 'both' | 'usd' | 'cfa';

export const USD_TO_CFA_RATE = 570; // 1 USD = 570 Francs CFA

export interface FormattedPrice {
  usd: string;
  cfa: string;
  display: string;
  subDisplay?: string;
  rawCfa: number;
}

export function formatCurrencyPrice(
  priceInUsd: number,
  mode: CurrencyMode = 'both'
): FormattedPrice {
  const usd = `$${priceInUsd.toFixed(2)}`;
  const rawCfa = Math.round(priceInUsd * USD_TO_CFA_RATE);
  // French / Central Africa style thousand separator (or standard comma)
  const cfaFormatted = rawCfa.toLocaleString('en-US');
  const cfa = `${cfaFormatted} FCFA`;

  if (mode === 'usd') {
    return {
      usd,
      cfa,
      rawCfa,
      display: usd,
      subDisplay: `(~${cfa})`,
    };
  }

  if (mode === 'cfa') {
    return {
      usd,
      cfa,
      rawCfa,
      display: cfa,
      subDisplay: `(~${usd})`,
    };
  }

  // Dual display: show both clearly
  return {
    usd,
    cfa,
    rawCfa,
    display: `${usd} · ${cfa}`,
    subDisplay: undefined,
  };
}
