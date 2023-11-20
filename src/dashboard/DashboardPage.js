import React, { useState } from "react";
import { useUserInfo } from "../user";
import { useStockHistory } from "../stock-history";
import { StockChart } from "./StockChart";

export const DashboardPage = () => {
  const [userInfo, setUserInfo] = useUserInfo();
  const { cashValue, sharesValue, numberOfSharesOwned } = userInfo || {};
  const [numberOfSharesValue, setNumberOfSharesValue] = useState(0);
  const stockHistory = useStockHistory();
  const times = Object.keys(stockHistory);
  const prices = Object.values(stockHistory);

  const buyShares = async () => {
    const response = await fetch("http://localhost:8080/stocks/buy", {
      method: "post",
      body: JSON.stringify({
        numberOfShares: numberOfSharesValue,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };
  const sellShares = async () => {
    const response = await fetch("http://localhost:8080/stocks/sell", {
      method: "post",
      body: JSON.stringify({
        numberOfShares: numberOfSharesValue,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };

  return (
    <>
      <h1 className="section-heading">Stock Trading App</h1>
      <div className="centered-container">
        <StockChart xValues={times} yValues={prices} />
        <div className="financial-info-section">
          <div className="info-item">
            Current TSLA Share Price : ${prices[prices.length - 1]}
          </div>
          <div className="info-item">
            You currently own {numberOfSharesOwned} shares
          </div>
          <div className="info-item">
            Cash balance : ${cashValue.toFixed(2)}
          </div>
          <div className="info-item">Porfolio Value : {sharesValue}</div>
          <div className="info-item">
            Total Value : ${(cashValue + sharesValue).toFixed(2)}
          </div>
          <div>
            <input
              className=" full-width space-after"
              type="number"
              value={numberOfSharesValue}
              onChange={(e) => setNumberOfSharesValue(e.target.value)}
            />
            <button className="buy-button" onClick={buyShares}>
              Buy
            </button>
            <button className="sell-button" onClick={sellShares}>
              Sell
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
