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

export function VerticalChart() {
  const [col, setcol] = useState(false);
  useEffect(() => {
    setcol(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--bacground",
      ),
    );
  }, [col]);

  const data = {
    labels: ["Week I", "Week II", "Week III", "Week IV"],
    datasets: [
      {
        label: "Pending Approval",
        backgroundColor: "rgb(51, 153, 255)",
        data: [20, 10, 30, 15],
        stack: 1,
        name: "AMR",
      },
      {
        label: "Invoice Created",
        backgroundColor: "rgb(51, 204, 51)",
        data: [60, 20, 20, 30],
        stack: 1,
      },
      {
        label: "Approved!",
        backgroundColor: "green",
        data: [40, 50, 20, 45],
        stack: 1,
      },
      {
        label: "Pending Approval",
        backgroundColor: "rgb(51, 153, 255)",
        data: [25, 5, 20, 10],
        stack: 2,
      },
      {
        label: "Invoice Created!",
        backgroundColor: "rgb(51, 204, 51)",
        data: [51, 25, 10, 30],
        stack: 2,
      },
      {
        label: "Approved!",
        backgroundColor: "green",
        data: [45, 40, 22, 55],
        stack: 2,
      },
      {
        label: "Pending Approval",
        backgroundColor: "rgb(51, 153, 255)",
        data: [35, 5, 25, 10],
        stack: 3,
      },
      {
        label: "Invoice Created!",
        backgroundColor: "rgb(51, 204, 51)",
        data: [51, 25, 10, 30],
        stack: 3,
      },
      {
        label: "Approved!",
        backgroundColor: "green",
        data: [45, 40, 22, 55],
        stack: 3,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderRadius: 20,
        pointStyle: "circle",
      },
    },
    scales: {
      x: {
        ticks: {
          color: col,
        },
      },
      y: {
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
