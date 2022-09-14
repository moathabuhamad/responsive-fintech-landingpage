import React from "react";
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

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderRadius: 20,
      pointStyle: "circle",
    },
  },
  scales: {
    y: { display: false },
    x: { display: false },
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(0, 13, 194, 0.722)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(41, 170, 255, 0.611)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
