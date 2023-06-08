import "./styles.scss";
import { useState, useRef, useEffect } from 'react'

const Calculator = () => {



  


  const [height, setHeight] = useState("")

  const [weight, setWeight] = useState("")

  const [metricTotal, setMetricTotal] = useState(1)

  //const [isImperial, setImperial] = useState(false)

  const [isMetetic, setMetric] = useState(true)

  const [feet, setFeet] = useState(0)
  const [inches, setInches] = useState('')
  const [imperialWeight, setImperialWeight] = useState('')

  const [inputValues, setInputValues] = useState([''])

  const inputRefs = useRef([])

  

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;

    // console.log(newInputValues)
    // console.log(event.value.target)
    setInputValues(newInputValues);
  };

  useEffect(() => {
    const lastIndex = inputRefs.current.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex].focus();
    }
  }, [inputValues]);


  const setM = () => {
    console.log("Metric")
    setMetric(true)
  }

  const setImp = () => {
    console.log("Imperial")
    setMetric(false)
  }


  const handleHeight = (event) => {

    console.log(event.target.value)

    //console.log(typeof +height)

    setHeight(event.target.value)
    //debugger

    // if(weight !== ""){
    //   //const total = (+weight/Math.pow(+height, 2))

    //   // console.log(`hey ${total}`)

    //   const h = +event.target.value
    //   const w = +weight

    //   const rawtotal = (w/Math.pow(h, 2)) * 10000 

    //   const total = Math.round(rawtotal * 10) /10

    //   console.log(`${h}`)
    //   console.log(`${w}`)
    //   console.log(total)

    //   // //console.log(total)
    //   setMetricTotal(total)
    //   // console.log(`wtf ${metricTotal}`)

    // }

    
    

  }



  const handleWeight = (event) => {

    setWeight(event.target.value)

    if(height !== ""){

      const h = +height
      const w = +event.target.value

      const rawtotal = (w/Math.pow(h, 2)) * 10000 

      const total = Math.round(rawtotal * 10) /10

      setMetricTotal(total)

      

    }
    
    //setWeight(event.target.value)
  }

  const imperialHeight = (event) => {

    setFeet(+event.target.value)
    console.log(event.target.value)

    // if(feet !== "" && inches !== ""){

    //   const h = (+feet * 12) + 10
    //   const w = +imperialWeight 

    //   const rawtotal = (w/Math.pow(h, 2)) * 703

    //   const total = Math.round(rawtotal * 10) /10

    //   console.log(total)


    // }


  }

  const imperialInches = (event) => {

    console.log(event.target.value)
    setInches(event.target.value)
  }


  const handleWeightz = (event) => {

    console.log(event.target.value)
    setImperialWeight(event.target.value)

  }

  const handleFormSubmit = (event) => {

    event.preventDefault()
  }


  const ImperialBlock = () => {

    return (

      <div>
      <div className="d-flex justify-content-between">

      <form onSubmit={handleFormSubmit}>
      <div>
      <p className="type__BodyS">Height</p>
        <input className="type__BodyMBold" type="number" onChange={imperialHeight} value={feet}/>
        <span className="unit type__Headings">ft</span>
      </div>

{/*       
      <div>
        <input className="type__BodyMBold inches"  type="number"  min="0"  max="11" onChange={imperialInches}/>
        <span className="unit type__Headings">in</span>
      </div>
      
      </div>

      <div className="d-flex justify-content-between">

      <div>
      <p className="type__BodyS">Weight</p>
      <input className="type__BodyMBold" onChange={handleWeightz} type="number"/>
        <span className="unit type__Headings">lbs</span>
      </div> */}

    </form>
      
      </div>
      </div>

    )
  }

  const MetricBlock = () =>{

    return (

      <div className="d-flex justify-content-between">


      <form>
      <div>
      <p className="type__BodyS">Height</p>
        <input className="type__BodyMBold"  
        ref={(el) => (inputRefs.current[0] = el)} 
        value={height} 
        onChange={(event) => handleInputChange(event, 0)} 
        type="number"/>
        <span className="unit type__Headings"> cm</span>
      </div>

      
      {/* <div>
      <p className="type__BodyS">Weight</p>
        <input className="type__BodyMBold" ref={inputRef} value={weight} onChange={handleWeight} type="number"/>
        <span className="unit type__Headings"> kg</span>
      </div>
       */}
      
      </form>
      </div>
      
      
    )
  }


  return (
    <div className="calContainer">
      <h4>Enter your details below</h4>


     
      <form className="mt-5 d-flex justify-content-between metircImperial">

        
      
        <div>
        <input type="radio" id="Metric" checked={isMetetic} name="abc" onChange={setM}/>
        <label className="ms-3 type__BodyM " for="Metric">Metric</label>
        </div>

        <div>
        <input type="radio" id="Imperial" name="abc" onChange={setImp}/>
        <label classNames="ms-3 type__BodyM " for="Imperial">Imperial</label>
        </div>
      </form>

    {isMetetic ? 
      <MetricBlock/>

      :
      <ImperialBlock/>

    }

<div className="d-flex justify-content-between mt-4">
      

      
      
      
        
      
      


      <div className="resultsContainer ">
        <div className="descLeftSide">
          {/* <p className="type__BodyM">Your BMI is...</p>

          <h2 className="type__HeadingXL">{metricTotal}</h2> */}

          <h3 className="type__HeadingM"> Welcome!</h3>
          <p className="type__BodyS">Enter your Height and weight and you;ll see your BMI result here</p>
        </div>

        <div>
          {/* <p className="type__BodyS">
            Your BMI suggests you're a healthy weight. Your ideal wieght is
            between
          </p> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Calculator;
