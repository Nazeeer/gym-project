import React  from 'react'
import { Link } from 'react-router-dom'

import '../../assets/style/footer.css'
import logo from '../../assets/images/dumble.png'
export default function Footer() {
    const year =new Date().getFullYear();
  return (
    <footer className='footer' data-aos="fade-up"  data-aos-duration="1500">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__box">
                    <div className="logo">
                        <div className="logo__img">
                            {/* <img src={logo} alt="" /> */}
                        </div>
                        <h2>FitBody</h2>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Reiciendis deserunt deleniti unde repellendus magnam cum?</p>
                </div>

                <div className="footer__box">
                    <h4 className='footer__title'>Company</h4>
                    <ul className='footer__links'>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>our program</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>our plan</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>become a member</a></li>
                    </ul>
                </div>

                <div className="footer__box">
                    <h4 className='footer__title'>Quick Links</h4>
                    <ul className='footer__links'>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>About us</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>Contact us</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>Support</a></li>
                    </ul>
                </div>

                
                <div className="footer__box">
                    <h4 className='footer__title'>Contact</h4>
                    <ul className='footer__links'>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i> cairo,Eygpt</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>FitBody@gmail.com</a></li>
                        <li><a href="#"><i className="ri-arrow-right-s-line"></i>+ 01 ********</a></li>
                    </ul>
                </div>

            </div>
                <p className='copyright'>Copyright  -  {year} developed by <a className='highlights' target='_blank' href="https://nazeer.webika.org/">MohamedNazeer</a>. All rights reserved.</p>
        </div>

    </footer>
  )
}
