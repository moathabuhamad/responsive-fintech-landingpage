import "./Data.css";
import Fade from "react-reveal/Fade";
import { BarChart } from "./Charts/BarChart";
import { DoughnutChart } from "./Charts/DoughnutChart";
import { PieChart } from "./Charts/PieChart";
import { RadarChart } from "./Charts/RadarChart";
import { VerticalChart } from "./Charts/VerticalChart";
import { useEffect, useState } from "react";
import { PolarAreaChart } from "./Charts/PolarAreaChart";
import { GroupedBar } from "./Charts/GroupedBar";

function Data() {
  const [factor, setFactor] = useState(1);

  return (
    <div className="data-container" name="hero">
      <Fade left>
        <div className="data-left">
          <h2>Duration Payments</h2>
          <div className="chart-settings">
            <input
              type="radio"
              id={`1`}
              name="radio"
              value={1}
              className="radio"
              onClick={() => setFactor(1)}
            />
            <label htmlFor={`1`} className={"radioLable"}>
              Last 24 Hours
            </label>
            <input
              type="radio"
              id={`2`}
              name="radio"
              value={2}
              className="radio"
              onClick={() => setFactor(7)}
            />
            <label htmlFor={`2`} className={"radioLable"}>
              Last 7 Days
            </label>
            <input
              type="radio"
              id={`3`}
              name="radio"
              value={3}
              className="radio"
              onClick={() => setFactor(30)}
            />
            <label htmlFor={`3`} className={"radioLable"}>
              Last 30 Days
            </label>
          </div>
          <div className="chart__area">
            <BarChart factor={factor} />
          </div>
        </div>
      </Fade>
      <div className="data-right">
        <div className="data-reports">
          <Fade right>
            <div className="report">
              <div className="chart__area__small">
                <DoughnutChart />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="report">
              <div className="chart__area__small">
                <PieChart />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="report">
              <div className="chart__area__small">
                <PolarAreaChart />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="report">
              <div className="chart__area__small">
                <h3>Sales 170,270</h3>
                <h3>Food Expences 220,270</h3>
                <h3>Net -50,000</h3>
              </div>
            </div>
          </Fade>
        </div>
        <div className="data-monthly">
          <Fade right>
            <div className="monthly">
              <RadarChart />
            </div>
          </Fade>
          <Fade right>
            <div className="monthly">
              <VerticalChart />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Data;
