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

export function GroupedBar() {
  const [col, setcol] = useState(false);
  useEffect(() => {
    setcol(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--bacground",
      ),
    );
  }, [col]);

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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 }),
        ),
        backgroundColor: "rgb(99, 161, 255)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 }),
        ),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 3",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 }),
        ),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
