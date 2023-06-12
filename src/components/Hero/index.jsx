import './styles.scss'
import Calculator from '../calculator'
import Logo from '../../assets/images/logo.svg'

const Hero = () => {

    return (
        <div className="container heroContainer d-lg-flex justify-content-between">
           
                <div className="leftSide ">
                    <img className="logo" src={Logo}/>

                    <div className="heroDesc">
                    <h1 className="type__HeadingXL heroTitle">Body Mass Index Calculator</h1>

                    <p className="type__BodyM">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                    </div>
                </div>
                <div className="rightSide">
                    <Calculator/>
                </div>

            

            {/* <Calculator/> */}

        </div>
    )

}


export default Hero