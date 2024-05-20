import React from 'react'
import heroImage from '../../assets/images/test1.png'
import dumblle from '../../assets/images/dumble.png'
import '../../assets/style/hero.css'
const Hero = () => {
  return (
    <section id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <h2 className='section__title' data-aos="fade-up" data-aos-duration="1500">
                        Exercise is the key to a <span className='highlights'>Healthy</span> Lifestyle
                    </h2>

                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Modi ipsum, consequuntur neque architecto quos commodi 
                        dolorum quo, a eos nemo inventore nesciunt, 
                        sapiente eveniet quod perspiciatis placeat quam cupiditate necessitatibus.</p>


                    <div className="hero__btns" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        <button className="register__btn">Get Started</button>
                        <button className="watch__btn">
                            <span>
                            <i className="ri-play-fill"></i>
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>

                <div className="hero__img">
                    <div className="hero__img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box__img">
                                        <img  src={heroImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                            <div className="heart__rate" data-aos="fade-right"  data-aos-duration="1500">
                                <h5>Heart Rate</h5>
                                <span><i className="ri-heart-pulse-fill"></i></span>
                                <h6>2567 BPM</h6>
                            </div>

                            <div className="gym__location" data-aos="fade-right" data-aos-duration="1500">
                                <span><i className='ri-map-pin-2-fill'></i></span>
                                <h5>Find a new gym near you</h5>
                            </div>

                            <div className="dumble__icon" data-aos="fade-down"  data-aos-duration="1500">
                                <img src={dumblle} alt="" />
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero