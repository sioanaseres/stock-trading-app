import { useState, useEffect } from "react";

const zip = (keys, values) =>
  keys.reduce((acc, key, i) => ({ ...acc, [key]: values[i] }), {});

export const useStockHistory = () => {
  const [stockHistory, setStockHistory] = useState([]);

  useEffect(() => {
    const loadStockHistory = async () => {
      const response = await fetch("https://stock-trading-app.onrender.com/stock-history");
      const fullHistory = await response.json();
      const times = Object.keys(fullHistory["Time Series (30min)"]);
      const prices = Object.values(fullHistory["Time Series (30min)"]).map(
        (obj) => obj["4. close"]
      );
      setStockHistory(zip(times, prices));
    };

    loadStockHistory();
  }, []);

  return stockHistory;
};
