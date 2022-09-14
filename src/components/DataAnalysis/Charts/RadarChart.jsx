import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export const options = {
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

export const data = {
  labels: ["HTML", "CSS", "JS", "REACT", "NODE", "AWS"],
  datasets: [
    {
      label: "score",
      data: [9, 8, 7.5, 9, 8, 5],
      backgroundColor: "rgba(99, 245, 255, 0.2)",
      borderColor: "#6663ff",
      borderWidth: 1,
    },
  ],
};

export function RadarChart() {
  return <Radar options={options} data={data} />;
}
