**TrackR — Personal Portfolio Tracker**

A free, zero-infrastructure portfolio tracker built for Singapore-based investors who trade across multiple platforms and hold assets in multiple currencies.

**The problem**

Singapore investors often trade across IBKR, Moomoo, Tiger Brokers, and local banks simultaneously. Tracking consolidated net worth, returns, and FX impact across all these platforms is either done manually in spreadsheets (error-prone and time-consuming) or requires paid tools. This app addresses:
  - Consolidated view of stocks, cash, and dividends across all platforms in SGD
  - Real P&L tracking with FX gain/loss attribution (SGD base currency)
  - Time-weighted portfolio return charted over time using real historical prices
  - Automatic fee calculation per broker and market on every trade entry

**Built with**

Frontend: Vanilla HTML, CSS, JavaScript — single-file deployment, no build step
Auth & database: Supabase (free tier) — email/OTP signup, Row Level Security ensuring each user's data is fully isolated
Price data: Google Apps Script proxy (free, no rate limits) pulling from Google Finance (US, HK, LSE), Yahoo Finance (historical prices)
FX rates: Frankfurter API (ECB reference rates, free, no key required)
Hosting: GitHub Pages (free, zero backend)

**Known limitations & tradeoffs**

SGX prices via SGX public API may have a short delay; Google Finance does not support SGX data
FX rates are ECB mid-market reference rates and may differ slightly from broker trading rates
Historical price charts use monthly data points (not tick-by-tick) to minimise processing load

**This project**

Built as a personal-use tool and a hands-on exploration of vibe coding — using AI-assisted development to ship a working full-stack app with authentication, real-time data, and multi-currency accounting logic.
