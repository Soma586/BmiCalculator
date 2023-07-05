import "./styles.scss";
import { useState, useRef, useEffect } from "react";

//const map = new Map()

//map.get('147')

const cm = [
  "193",
  "191",
  "188",
  "185",
  "183",
  "180",
  "178",
  "175",
  "172",
  "170",
  "168",
  "165",
  "163",
  "160",
  "157",
  "155",
  "152",
  "150",
  "147",
];

const normalWeight = [
  "71 - 89kgs",
  "69 - 87kgs",
  "67 - 84kgs",
  "65 - 83kgs",
  "64 - 80kgs",
  "62 - 78kgs",
  "60 - 76kgs",
  "58 - 73kgs",
  "57 - 72kgs",
  "55 - 69kgs",
  "54 - 67kgs",
  "52 - 65kgs",
  "50 - 64kgs",
  "49 - 61kgs",
  "47 - 59kgs",
  "45 - 57kgs",
  "44 - 56kgs",
  "43 - 54kgs",
  "41 - 52kgs",
];

const Calculator = () => {
  const [height, setHeight] = useState("");

  const [weight, setWeight] = useState("");

  const [metricTotal, setMetricTotal] = useState(1);

  //const [isImperial, setImperial] = useState(false)

  const [isMetetic, setMetric] = useState(true);

 

  const inputRefs = useRef([]);
  //const inputRef = useRef(null)

  const [inputValues, setInputValues] = useState(["", ""]);



  const [currentIndex, setIndex] = useState(0);
  const [healthStatus, setHealthStatus] = useState("");
  const [weightRatio, setWeightRatio] = useState("");

  

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;

   
    if (index === 0) {
      handleHeight(event);
    } else {
      handleWeight(event);
    }
    setIndex(index);
    setInputValues(newInputValues);
    postResult();
    idealWeight();
  };

  useEffect(() => {
   
    if (inputRefs.current[currentIndex]) {
      inputRefs.current[currentIndex].focus();
    }
  }, [inputValues]);

  
  const idealWeight = () => {
    if (height >= 200 || height <= 140) {
      setWeightRatio("unknown");
      return;
    }

    for (let i = 0; i < cm.length; i++) {
      if (height >= cm[i]) {
        setWeightRatio(normalWeight[i]);
        return;
      }
    }
  };

  const handleHeight = (event) => {
  

    setHeight(event.target.value);
    

    if (weight !== "") {
  

      const h = +event.target.value;
      const w = +weight;

      const rawtotal = (w / Math.pow(h, 2)) * 10000;

      const total = Math.round(rawtotal * 10) / 10;

    
      setMetricTotal(total);
    }
  };

  const postResult = () => {
    if (metricTotal < 18.5) {
      setHealthStatus("you're underweight");
    } else if (metricTotal >= 18.5 && metricTotal <= 24.9) {
      setHealthStatus("you're a healthy weight");
    } else {
      setHealthStatus("you're overweight");
    }
  };

  const handleWeight = (event) => {
    setWeight(event.target.value);

    if (height !== "") {
      const h = +height;
      const w = +event.target.value;

      const rawtotal = (w / Math.pow(h, 2)) * 10000;

      const total = Math.round(rawtotal * 10) / 10;

      setMetricTotal(total);
    }

   
  };

  

  const ImperialBlock = () => {
    return (
      <div>
        {/* <div className="d-flex justify-content-between">
          <div>
            <p className="type__BodyS">Height</p>
            <input
              className="type__BodyMBold"
              ref={(el) => (inputRefs.current[2] = el)}
              value={inputValues[2]}
              onChange={(event) => handleInputChange(event, 2)}
              type="number"
            />

            <span className="unit type__Headings">ft</span>
          </div>

          <div>
            <input
              className="type__BodyMBold inches"
              type="number"
              min="0"
              max="11"
              ref={(el) => (inputRefs.current[3] = el)}
              value={inputValues[3]}
              onChange={(event) => handleInputChange(event, 3)}
            />
            <span className="unit type__Headings">in</span>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <p className="type__BodyS">Weight</p>
            <input
              className="type__BodyMBold"
              type="number"
              key={6}
              ref={(el) => (inputRefs.current[4] = el)}
              value={inputValues[4]}
              onChange={(event) => handleInputChange(event, 4)}
            />
            <span className="unit type__Headings">lbs</span>
          </div>
        </div> */}
      </div>
    );
  };


  //MAIN ONE
  const MetricBlock = () => {
    const test = inputValues.map((value, index) => {
      return (
        <input
          key={index}
          type="number"
          //ref={(el) => (inputRefs.current[index] = el)}
          value={value}
          onChange={(event) => handleInputChange(event, index)}
        />
      );
    });

    return (
      <div className="d-md-flex ">
        <div className="heightDivBuffer">
          <p className="type__BodyS">Height</p>
          <input
            className="type__BodyMBold"
            id="lol"
            key={0}
            ref={(el) => (inputRefs.current[0] = el)}
            value={inputValues[0]}
            onWheel={ event => event.currentTarget.blur() }
            onChange={(event) => handleInputChange(event, 0)}
            type="number"
          />
          <span className="unit type__Headings"> cm</span>
        </div>

        <div>
          <p className="type__BodyS weightBuffer">Weight</p>
          <input
            className="type__BodyMBold"
            key={1}
            onWheel={ event => event.currentTarget.blur() }
            ref={(el) => (inputRefs.current[1] = el)}
            value={inputValues[1]}
            onChange={(event) => handleInputChange(event, 1)}
            type="number"
          />
          <span className="unit type__Headings"> kg</span>
        </div>
      </div>
    );
  };

  return (
    <div className="calContainer">
      <h4 className="calTitle">Enter your details below</h4>


      {isMetetic ? <MetricBlock /> : <ImperialBlock />}

      <div className="d-flex justify-content-between mt-4">
        <div className="resultsContainer ">
          <div className="descLeftSide">
            {height === "" || weight === "" ? (
              <div>
                <h3 className="type__HeadingM"> Welcome!</h3>
                <p className="type__BodyS">
                  Enter your Height and weight and you'll see your BMI result
                  here
                </p>
              </div>
            ) : (
              <div>
                <p className="type__BodyM">Your BMI is...</p>

                <h2 className="type__HeadingXL">{metricTotal}</h2>
              </div>
            )}
          </div>

          {(height !== "" || weight !== "") && (
            <div>
              <p className="type__BodyS mt-3">
                Your BMI suggests {healthStatus}. Your ideal weight is between{" "}
                <span className="weightRatio"> {weightRatio}</span>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
