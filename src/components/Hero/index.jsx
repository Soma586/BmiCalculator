import './styles.scss'
import Calculator from '../calculator'

const Hero = () => {

    return (
        <div className="container-fluid heroContainer">
            <div className="row h-100">
                <div className="col-sm-8 leftSide ">
                    <h1 className="type__HeadingXL">Body Mass Index Calculator</h1>

                    <p>Better understand your weight relation in your height using our body mass index </p>
                </div>
                <div className="col-sm-4 rightSide">
                    <Calculator/>
                </div>

            </div>

        </div>
    )

}


export default Hero