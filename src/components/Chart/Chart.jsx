import React from 'react';
import ChartBar from "./ChartBar";
import "./Chart.css"

const Chart = ({items}) => {
    const maximumPrice = 2000;
    const month = [
      {
        label: "Jan",
        currentPrice: 0,
      },
      {
        label: "Feb",
        currentPrice: 0,
      },
      {
        label: "Mar",
        currentPrice: 0,
      },
      {
        label: "Apr",
        currentPrice: 0,
      },
      {
        label: "May",
        currentPrice: 0,
      },
      {
        label: "Jun",
        currentPrice: 0,
      },
      {
        label: "Jul",
        currentPrice: 0,
      },
      {
        label: "Aug",
        currentPrice: 0,
      },
      {
        label: "Sep",
        currentPrice: 0,
      },
      {
        label: "Oct",
        currentPrice: 0,
      },
      {
        label: "Nov",
        currentPrice: 0,
      },
      {
        label: "Dec",
        currentPrice: 0,
      },
    ];
     items.forEach((item) => {
      const mothNumber = new Date(item.date).getMonth();
      month[mothNumber].currentPrice += item.price
    });
    return (
      <div className="chart">
        {month.map((item) => {
          return (
            <ChartBar
              key={item.label}
              label={item.label}
              currentPrice={item.currentPrice}
              maximumPrice={maximumPrice}
            />
          );
        })}
      </div>
    );
  };

export default Chart;