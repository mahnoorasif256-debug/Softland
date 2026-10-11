import React, { useEffect, useRef  } from 'react';
import styles from './Hero.module.css';
import Phone1 from '../images/phone_1.png';
import Phone2 from '../images/phone_2.png';
import gsap from 'gsap';


const Hero = () => {
const heroRef = useRef(null);
const phoneRef = useRef(null);


useEffect(() => {
  const hero = gsap.context(() => {
    gsap.fromTo(
      [
        ...heroRef.current.querySelectorAll('h1, p, .btns'),
        phoneRef.current,
      ],
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      }
    );
  }, heroRef);

  return () => hero.revert();
}, []);


  return (
    <section className={styles.hero}  ref={heroRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Column */}
          <div className={`col-lg-7 ${styles.paratime}`}>
            <h1 className={`${styles.head1} fw-bold text-light`}>Promote Your App with SoftLand</h1>
            <p className={styles.para} >We are team of talented designers making websites with Bootstrap</p>
            <div className='d-flex gap-3 mt-4 btns' >
              <button type="button" className="btn text-light border-0 fs-6 rounded-1" style={{padding: '10px 25px', borderRadius: "0px", backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <i className="fa-brands fa-google-play me-2"></i>Google Play
              </button>
              <button type="button" className="btn text-light border-0 fs-6 rounded-1" style={{padding: '10px 25px', borderRadius: "0px", backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                <i className="fa-brands fa-apple me-2"></i>App Store
              </button>
            </div>
          </div>

          {/* Right Phone Images Column */}
          <div className="col-lg-5 mt-5 mt-lg-0" ref={phoneRef}>
            <div className={styles.phoneWrapper}>
              <img className={`${styles.phone1} img-fluid`} src={Phone1} alt="phone img" />
              <img className={`${styles.phone2} img-fluid`} src={Phone2} alt="phone img" />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.btn}>
  <a href="#" className="d-flex align-items-center justify-content-center w-100 h-100">
    <i className="bi bi-arrow-up text-white" style={{ fontSize: '15px' }}></i>
  </a>
</button>
    </section>
    
  );
};

export default Hero; 