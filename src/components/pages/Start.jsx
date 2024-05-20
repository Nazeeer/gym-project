import React from 'react'
import '../../assets/style/start.css'
import traningImg from '../../assets/images/traning.png'

const Start = () => {
  return (
    <section className="cast-area " id='Classes'>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={traningImg} alt="" data-aos="fade-left"  data-aos-duration="1500" />
                </div>

                <div className="start__content" data-aos="fade-right"  data-aos-duration="1500">
                    <h2 className="secction__title">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem animi 
                        saepe quaerat sunt labore officiis est tenetur totam fugiat, 
                        ipsa soluta libero veniam deserunt? Illum vel quia libero laudantium!</p>
                <button className='register__btn'>Get Start</button>
                
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start