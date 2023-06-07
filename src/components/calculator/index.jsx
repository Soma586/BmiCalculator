import "./styles.scss";

const Calculator = () => {
  return (
    <div className="calContainer">
      <h4>Enter your details below</h4>

      <form className="mt-5 d-flex justify-content-between metircImperial">

        <div>
        <input type="radio" id="Metric" />
        <label className="ms-3 type__BodyM " for="Metric">Metric</label>
        </div>

        <div>
        <input type="radio" id="Imperial" />
        <label classNames="ms-3 type__BodyM " for="Imperial">Imperial</label>
        </div>
      </form>


<div className="d-flex justify-content-between mt-4">
      
      <div>
      <p className="type__BodyS">Height</p>
        <input />
        <span className="unit type__Headings"> cm</span>
      </div>

      
      <div>
      <p className="type__BodyS">Weight</p>
        <input />
        <span className="unit type__Headings"> kg</span>
      </div>
      </div>

      <div className="resultsContainer ">
        <div className="descLeftSide">
          <p className="type__BodyM">Your BMI is...</p>

          <h2 className="type__HeadingXL">0</h2>
        </div>

        <div>
          <p className="type__BodyS">
            Your BMI suggests you're a healthy weight. Your ideal wieght is
            between
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
