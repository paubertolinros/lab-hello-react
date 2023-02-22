import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const CardsIconInfo = () => {
  return (  
    <>
      <div className="card-icons-info-div">
        <img src={icon1} alt="Ironhack logo"/>
        <h3> Declarative </h3>
        <p> React makes it painless to create interactive UIs. </p>
      </div> 
      <div className="card-icons-info-div">
        <img src={icon2} alt="Ironhack logo" />
        <h3> Declarative </h3>
        <p> React makes it painless to create interactive UIs. </p>
      </div>
      <div className="card-icons-info-div">  
        <img src={icon3} alt="Ironhack logo" />
        <h3> Declarative </h3>
        <p> React makes it painless to create interactive UIs. </p>
      </div>
      <div className="card-icons-info-div">
        <img src={icon4} alt="Ironhack logo" />
        <h3> Declarative </h3>
        <p> React makes it painless to create interactive UIs. </p>
      </div>
    </>
  )
}
export default CardsIconInfo;