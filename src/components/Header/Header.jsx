import React ,{useEffect, useRef} from 'react'
import '../../assets/style/header.css'

const navLinks = [
    {
        path: "#home",
        display: "home"
    },
    {
        path: "#Schedule",
        display: "Schedule"
    },
    {
        path: "#Classes",
        display: "Classes"
    },
    {
        path: "#Pricing",
        display: "Pricing"
    },
]

const Header = () => {

    const headerRef =useRef(null);

    const headerFunc = ()=>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
            headerRef.current.classList.add('sticky__header');
        }else{
            headerRef.current.classList.remove('sticky__header');
        }
    }

    useEffect(()=>{


        window.addEventListener('scroll' , headerFunc);

        return ()=> window.removeEventListener('scroll' , headerFunc)
    },[])


    const handleClick= e=>{
        e.preventDefault()

        const targetAttr =e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left:0 , 
            top:location-80,
        })
    }
  return (
    <header className='header' ref={headerRef}>
        <div className="container">
            <div className="nav__wrapper">
                {/*     logo      */}
                <div className="logo">
                    {/* img logo */}
                    <h2>
                        <a href="#">FitBody</a>
                        
                    </h2>
                </div>

                {/* navigation list  */}

                <div className="navigation">
                    <ul className="menu">
                        {navLinks.map((link , i)=>
                            <li key={i} className='nav__link'><a onClick={handleClick} href={link.path}>
                                    {link.display}
                                </a></li>
                        )}
                    </ul>
                </div>

                {/* nav right */}
                <div className="nav__right">
                    <button className='register__btn'>Register</button>
                    <span className='mobile__menu'>
                        <i className='ri-menu-line m-5'></i>
                    </span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header