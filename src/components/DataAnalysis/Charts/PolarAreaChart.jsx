import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export function PolarAreaChart() {
  const [col, setcol] = useState(false);
  useEffect(() => {
    setcol(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--bacground",
      ),
    );
  }, [col]);

  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(0, 15, 224, 0.766)",
          "rgba(41, 170, 255, 0.611)",
          "rgba(72, 105, 255, 0.611)",
          "rgba(0, 13, 194, 0.766)",
          "rgba(41, 170, 255, 0.611)",
          "rgba(0, 13, 194, 0.766)",
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
      y: { display: false },
    },
  };

  return <PolarArea options={options} data={data} />;
}
