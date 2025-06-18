### **2. Cryptocurrency Market Overview Page**  
*(e.g., `/research/market`)*  
**Purpose**: Macro-level insights into the crypto market’s health, trends, and momentum.  

#### **Layout & Widgets**:  
1. **Header Section**:  
   - **Market Overview Widget**:  
     - Total crypto market cap, dominance (BTC/ETH), fear & greed index.  

2. **Main Grid (3-Column Layout)**:  
   - **Heatmap Widget** (Left):  
     - Color-coded 24h performance of top 50 coins.  
   - **Screener Widget** (Center):  
     - Filter coins by volume, volatility, or technical patterns.  
   - **Sector Performance Widget** (Right):  
     - Track segments (DeFi, NFTs, Layer 1s) via pie/bar charts.  

3. **Mid-Section**:  
   - **Broad Market Chart**:  
     - Total market cap chart (1Y/3Y/5Y) with logarithmic view.  
   - **Dominance Charts**:  
     - BTC/ETH dominance trends.  

4. **Footer Section**:  
   - **Top Gainers/Losers Table**:  
     - Sortable by 24h change, volume.  
   - **Volatility Analysis Widget**:  
     - Compare historical volatility across assets.  
   - **Global News & Events**:  
     - Macroeconomic news (e.g., Fed rates, regulations).  

---

### **Key UX Considerations**:  
- **Responsive Design**: Ensure widgets resize gracefully for mobile.  
- **Customization**: Let users save preferred layouts/indicators.  
- **Dark/Light Mode**: Align with TradingView’s themes.  
- **Educational Tooltips**: Explain terms like "RSI" or "liquidity depth" for beginners.  


---

### **2. Cryptocurrency Market Overview Page**  
*(Mockup Description: Dashboard-Style Layout)*  
**URL**: `/research/market`  

#### **A. Header Section**  
- **Widget 1: Market Overview**  
  - **Configuration**:  
    ```javascript
    new TradingView.widget({
      "width": "100%",
      "height": 120,
      "symbolsGroups": [
        { "name": "Crypto", "symbols": ["BITSTAMP:BTCUSD", "BINANCE:ETHUSD"] },
      ],
      "colorTheme": "dark",
      "isTransparent": true,
    });
    ```  

#### **B. Main Grid (3 Columns)**  
- **Widget 2: Heatmap**  
  - **Configuration**: Use TradingView’s **"Market Heatmap"**:  
    ```javascript
    new TradingView.widget({
      "width": "100%",
      "height": 400,
      "colorTheme": "dark",
      "dataSource": "Crypto",
      "plotLineColorGrowing": "rgba(0, 255, 0, 0.3)",
    });
    ```  

- **Widget 3: Screener**  
  - **Configuration**:  
    ```javascript
    new TradingView.widget({
      "width": "100%",
      "height": 400,
      "colorTheme": "dark",
      "locale": "en",
      "symbol": "CRYPTOCAP:TOTAL",
    });
    ```  

- **Widget 4: Sector Performance**  
  - **Configuration**: Custom integration with TradingView’s **"Compare Symbols"** tool.  

#### **C. Mid-Section**  
- **Widget 5: Total Market Cap Chart**  
  - **Configuration**:  
    ```javascript
    new TradingView.widget({
      "autosize": true,
      "symbol": "CRYPTOCAP:TOTAL",
      "interval": "1W",
      "theme": "dark",
    });
    ```  

#### **D. Footer Section**  
- **Widget 6: Gainers/Losers Table** (TradingView + CoinGecko API).  
- **Widget 7: Volatility Analysis** (TradingView’s **"Volatility Indicators"**).  

---

### **Mockup Visual Guide**  
1. **Single Crypto Page**:  
   ```
   [Symbol Overview][Market Sentiment]
   [----------- Advanced Chart -----------]
   [TA][Calendar][Order Book]
   [News][Correlation Matrix]
   ```  

2. **Market Overview Page**:  
   ```
   [-------- Market Overview --------]
   [Heatmap][Screener][Sectors]
   [----- Total Market Cap Chart -----]
   [Gainers/Losers][Volatility]
   ```  

### **Key Widget Notes**:  
- **Themes**: Sync with CoinPort’s branding (`colorTheme: "light"` for alternate UI).  
- **Dynamic Symbols**: Use URL parameters to load widgets (e.g., `BINANCE:${coin}USDT`).  
- **Mobile**: Stack widgets vertically; reduce `height` values by 30%.  

For actual implementation, refer to [TradingView’s Widget Documentation](https://www.tradingview.com/widget/). Would you like CSS snippets for responsive grids?