import "./Accordion.css";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";
import { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";

const features = [
  {
    title: `Dashboard`,
    text: `Visually displayed data at a glance! Dashboard view provides an
overview of business reports that is updated every 15 seconds.
metrics can be set and business health can be determined accordingly
by monitoring performance, analyzing data, creating reports,
projecting revenue, and setting future financial targets.`,
  },
  {
    title: `Live Data`,
    text: `Get advanced charting capabilities at hand! Analyze, track, and report the companys data in real-time with the help of interactive data visualizations. Get access to critical, actionable and instant insights today.`,
  },
  {
    title: `Cash Flow`,
    text: `Cash flow dashboard becomes all too clear at MENACart! Monitor immediate spending power and have access to aggregate data of all cash inflows and outflows during a given period. Measure how well your company manages its cash position through MENACart.`,
  },
];

function Accordion() {
  const [index, setindex] = useState(0);
  const accordionRef = useRef(null);

  const handleScroll = (e) => {
    setindex(
      Math.round(
        (accordionRef.current.scrollTop / accordionRef.current.scrollHeight) *
          3,
      ),
    );
  };

  useEffect(() => {
    const accordionScroll = accordionRef.current;
    accordionScroll.addEventListener("scroll", handleScroll);

    return () => {
      accordionScroll.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="accordion-wrapper" name="mena">
      <Fade top>
        <h2>MENA Cart</h2>
        <Fade top>
          <h3>Fintesa's Main Product</h3>
        </Fade>
      </Fade>
      <div className="accordion-container" ref={accordionRef}>
        <div className="accordion-left">
          <div className="accordion-info">
            <Fade left>
              <div className="accordion-feature">
                {features.map((f) => (
                  <h3
                    key={f.title}
                    className={
                      f.title === features[index].title ? "active" : null
                    }
                  >
                    {f.title}
                  </h3>
                ))}
              </div>
              <div className="accordion-desc">
                <p>{features[index].text}</p>
              </div>
            </Fade>
          </div>
        </div>
          <div className="accordion-right">
            <img className="slide" src={slide1} alt="slide1" />
            <img className="slide" src={slide2} alt="slide2" />
            <img className="slide" src={slide3} alt="slide3" />
          </div>
      </div>
    </div>
  );
}

export default Accordion;
