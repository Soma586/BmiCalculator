import './styles.scss'
import Calculator from '../calculator'

const Hero = () => {

    return (
        <div className="container-fluid heroContainer">
            <div className="row h-100">
                <div className="col-sm-8 leftSide ">
                    <h1 className="type__HeadingXL">Body Mass Index Calculator</h1>

                    <p className="type__BodyM">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
                </div>
                <div className="col-sm-4 rightSide">
                    <Calculator/>
                </div>

            </div>

        </div>
    )

}


export default Hero