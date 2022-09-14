import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ["Online Sales", "Store Sales"];

const onlineSales = [
  1240, 1372, 958, 885, 612, 1706, 453, 1988, 1409, 1294, 531, 1471, 376, 1432,
  442, 1543, 1857, 1709, 1648, 1142, 1478, 761, 436, 533, 1304, 908, 1150, 1836,
  1316, 1672,
];

const storeSales = [
  644, 543, 1689, 827, 1690, 431, 967, 1824, 671, 326, 1055, 606, 342, 1122,
  473, 716, 1032, 1584, 1013, 1555, 467, 805, 908, 1753, 725, 305, 1613, 1628,
  1022, 746,
];

const total = (sales, time) => {
  let sum = 0;
  for (let i = 0; i < time; i++) {
    sum = sum + sales[i];
  }
  console.log(sum);
  return sum;
};

export function BarChart(props) {
  const [col, setcol] = useState(false);
  useEffect(() => {
    console.log(col);
    setcol(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--bacground",
      ),
    );
  }, [col]);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: [
          total(onlineSales, props.factor),
          total(storeSales, props.factor),
        ],
        backgroundColor: ["rgba(0, 13, 194, 0.722)"],
      },
      {
        label: "Cost",
        data: [
          total(onlineSales, props.factor) * 0.136,
          total(storeSales, props.factor) * 0.176,
        ],
        backgroundColor: ["rgba(41, 170, 255, 0.611)"],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderRadius: 20,
        pointStyle: "circle",
      },
    },
    scales: {
      y: {
        ticks: {
          color: col,
        },
      },
      x: {
        ticks: {
          color: col,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
        text: "Duration Payments",
      },
    },
  };
  return <Bar options={options} data={data} />;
}
