import Man from '../../assets/images/image-man-eating.webp'
import './styles.scss'
import LeftCurve from '../../assets/images/pattern-curved-line-left.svg'

const Person = () => {


    return(
        <div className="container personContainer">

            <div className="d-md-flex justify-content-between">

                <img src={Man} className="wtf"/>

                <div className="bmiDescription">

                    <img  className="personCurve" src={LeftCurve}/>
                    <h2 className="type__HeadingL personTitle">What your BMI result means</h2>

                    <p className="type__BodyM mt-5">
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.

                    </p>
                </div>


            </div>

        </div>
    )
}



export default Person