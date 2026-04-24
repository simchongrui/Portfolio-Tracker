**TrackR - Your personal portfolio tracker**

Introduction
The app/webpage is a portfolio tracker designed for the Singapore market. An investor in Singapore could trade using multiple platforms and hold cash on different platforms or banks. Some of the concerns they may face include:
  1. Unable to easily view their consolidated net worth across different platforms and institutions
  2. Unable to easily view their consolidated overall returns and P&L across different platforms and shares
  3. If they purchase and hold stocks in foreign currency, they are unable to easily understand their FX gain/loss against their base currency of SGD over time
  4. Tracking of personal portfolio using spreadsheet could be very manual, messy and unintuitive. Certain level of spreadsheet expertise may also be required to create a decent portfolio tracker.

This app aims to address the above problems for free. This app also serves as a project of interest to try out vibe coding and produce a working app for personal use. 

This is a simple app created with:
1. HTML, CSS and Javascript
2. Connected to Supabase for data storage and authentication
3. Connected to Google Apps Script for fetching of share prices via Google Finance API

As this app is built with zero cost in mind, there are certain limitations.
1. The app is only deployed on github and not hosted on any external server, used for personal usage.
2. Google Apps Script is used for fetching of share prices as it is free for use and practically no API call limits, hence share prices may not be real time and could have a few minutes delay. This also limits certain market such as SGX where Google Finance does not support the fetching of prices from this market.
3. Current exchange rate is updated via Frankfurter API (Free for use). The exchange rate may differ slightly from actual exchange rate used on trading platforms such as IBKR or moomoo. 
