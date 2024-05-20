import React from 'react'
import '../../assets/style/testimonials.css'
import testimonialsImage from '../../assets/images/Testimonials.png'

const Testimonials = () => {
  return (
    <section id="cast" className="cast-area section-padding">
    <div className="container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="product-slide" className="owl-carousel owl-theme owl-loaded owl-drag">
            
            <div className="seam-theme-product-item" data-aos="flip-left"  data-aos-duration="1500">
              <div className="product-item-content">
                <div className="product">
                  <img className="product-image" alt='TestimonialsImage' src={testimonialsImage} />
                  <div className="product-description">
                    <h1 className="product-title">Lorem</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi ad possimus, aspernatur ab dicta.</p>
                  </div>
                </div>
              </div>
            </div>
          



          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials