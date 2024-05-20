import React from 'react'
import '../../assets/style/exercises.css'
import exerciseImage1 from '../../assets/images/exercise1-removebg.png' 
import exerciseImage2 from '../../assets/images/exercise2.png' 
import exerciseImage3 from '../../assets/images/exercise3.png' 

const Exercises = () => {
  return (
    <section id='Schedule'>
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className='highlights'>Exercise</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit, Voluptas placeat dolores sequi esse 
            <br/>  assumenda quidem voluptatibus.
            </p>

        </div>

        <div className="exercise__wrapper">
          <div className="exercise__item" data-aos="zoom-in"  data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={exerciseImage1} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              
            </div>
          </div>

          <div className="exercise__item" data-aos="zoom-in"  data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={exerciseImage2} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              
            </div>
          </div>

          <div className="exercise__item" data-aos="zoom-in"  data-aos-duration="1500">
            <span className="exercise__icon">
              <img src={exerciseImage3} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Reducing Blood pressure</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Exercises