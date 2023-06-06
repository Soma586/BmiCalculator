import "./styles.scss";

const Calculator = () => {
  return (
    <div className="calContainer">
      <h4>Enter your details below</h4>

      <form className="mt-5 d-flex justify-content-between metircImperial">

        <div>
        <input type="radio" id="Metric" />
        <label className="ms-3" for="Metric">Metric</label>
        </div>

        <div>
        <input type="radio" id="Imperial" />
        <label classNames="ms-3" for="Imperial">Imperial</label>
        </div>
      </form>


<div className="d-flex justify-content-between mt-4">
      
      <div>
      <p>Height</p>
        <input />
        <span className="unit"> cm</span>
      </div>

      
      <div>
      <p>Weight</p>
        <input />
        <span className="unit"> kg</span>
      </div>
      </div>

      <div className="resultsContainer ">
        <div className="descLeftSide">
          <p>Your BMI is...</p>

          <h2>0</h2>
        </div>

        <div>
          <p>
            Your BMI suggests you're a healthy weight. Your ideal wieght is
            between
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
