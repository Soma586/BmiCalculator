import './styles.scss'
import Gender from '../../assets/images/icon-gender.svg'
import Age from '../../assets/images/icon-age.svg'
import Muscle from '../../assets/images/icon-muscle.svg'
import Pregnancy from '../../assets/images/icon-pregnancy.svg'
import Race from '../../assets/images/icon-race.svg'
import Curved from '../../assets/images/pattern-curved-line-right.svg'






const Card = (props) => {


    const {icon, title, desc, cla} = props

    return(
        <div className={`fourthCard  ${cla}`}>

            <div>
            <span>
                <img  className="fourthIcon" src={icon}/>
            </span>
                <p className="type__BodyM d-inline ms-3">{title}</p>

            </div>


            <p className="type__BodyS mt-3">
            {desc}
            </p>


            

        </div>
    )
}

const FourthSection = () => {




    const arr = [{
        class: 'one',
        icon: Gender,
        title: "Gender",
        desc: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."

    },

    {
        class: 'two',
        icon: Age,
        title: "Age",
        desc: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content."
    },
    {
        class: 'three',
        icon: Muscle,
        title: "Muscle",
        desc: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
    },
    {
        class: 'four',
        icon: Pregnancy,
        title: "Pregnancy",
        desc: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child."
    },
    {
        class: 'five',
        icon: Race,
        title: "Race",
        desc: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse."
    },

]


const cards = arr.map((card) =>{

    return(
       
            <Card icon={card.icon} title={card.title} desc={card.desc} cla={card.class}/>
        
    )
})


    return (
        <div className="container fourthContainer mt-5">


            <div className="fourthDesc">
                <h3 className="type__HeadlingL">Limitations of BMI</h3>

                <p className="type__BodyM mt-4">
                Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.

                </p>

                <img className="leftcurved" src={Curved} />

            </div>

            <div className="wrapper">
                
                    {cards}
                

            </div>

        </div>
    )

}



export default FourthSection