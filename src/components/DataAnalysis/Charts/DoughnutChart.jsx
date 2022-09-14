import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export function DoughnutChart() {
  const [col, setcol] = useState(false);
  useEffect(() => {
    console.log(col);
    setcol(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--bacground",
      ),
    );
  }, [col]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
        text: "",
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          color: col,
        },
      },
      x: {
        display: false,
        ticks: {
          color: col,
        },
      },
    },
  };

  const data = {
    labels: ["Customer1", "Customer2", "Customer3", "Customer4", "Customer5"],
    datasets: [
      {
        data: [40, 19, 3, 5, 3],
        backgroundColor: [
          "rgba(0, 15, 224, 0.766)",
          "rgba(41, 170, 255, 0.611)",
          "rgba(72, 105, 255, 0.611)",
          "rgba(0, 13, 194, 0.766)",
          "rgba(41, 170, 255, 0.611)",
        ],
        borderColor: [
          "rgba(0, 13, 194, 0.522)",
          "rgba(15, 13, 194, 0.522)",
          "rgba(30, 13, 194, 0.522)",
          "rgba(45, 13, 194, 0.522)",
          "rgba(60, 13, 194, 0.522)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}
