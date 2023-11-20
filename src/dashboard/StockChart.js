import React from "react";
import Plot from "react-plotly.js";

export const StockChart = ({ xValues, yValues }) => {
  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          marker: { color: "blue" },
        },
      ]}
      layout={{ width: 900, height: 400, title: "Tesla Stock History" }}
      options={{ displaylogo: false }}
    />
  );
};
