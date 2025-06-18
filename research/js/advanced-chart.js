new TradingView.widget({
  "autosize": true,
  "symbol": "BINANCE:BTCUSDT",
  "interval": "1H",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "toolbar_bg": "#1E1E2D",
  "enable_publishing": false,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "studies": ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
  "container_id": "tv-chart",
});