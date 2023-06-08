import './styles.scss'
import Eat from '../../assets/images/icon-eating.svg'
import Exercise from '../../assets/images/icon-exercise.svg'
import Sleep from '../../assets/images/icon-sleep.svg'




const Card = (props) =>{


    const {icon, title, desc} = props

    return (
        <div className="card">

            <img src={icon} className="iconImage"/>
            
            <p className="type__HeadingM mt-5">{title}</p>

            <p className="type__BodyM mt-3">{desc}</p>

        </div>
    )
}

const ThirdSection = () => {


    const arr = [{
        icon : Eat,
        title: "Health eating",
        desc: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood."
    },

    {
       icon: Exercise,
       title: "Regular exercise",
       desc: 'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
    },
    {
        icon: Sleep,
        title: 'Adequate sleep',
        desc: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation."
    }
]


const cards = arr.map((card) => {

    return (
    <Card icon={card.icon} title={card.title} desc={card.desc}/>
    )
})





    return (
        <div className="container thirdContainer">


        <div className="d-flex justify-content-between">
            {cards}
            </div>
            

        </div>
    )

}


export default ThirdSection