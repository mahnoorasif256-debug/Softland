import React, { useEffect, useRef } from 'react'
import styles from '../Components/Footer.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const contactRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="chead"]', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="chead"]', start: 'top 95%' },
      })

      gsap
        .timeline({
          scrollTrigger: { trigger: '[data-anim="cwrap"]', start: 'top 92%' },
        })
        .from('[data-anim="cinfo"]', {
          opacity: 0,
          y: 40,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
        })
        .from(
          '[data-anim="cform"]',
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
          },
          0.15
        )
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={contactRef}>
      {/* Contact Section Header */}
      <div className='mt-5 pt-5 text-center' id='contact' data-anim="chead">
        <h1 className='pt-3 fw-bold'>Contact</h1>
        <p style={{ fontSize: '18px' }}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div> 

      <div className="container my-5" data-anim="cwrap">
        <div className="row g-4 g-lg-5">
          
          {/* Left Column: Contact Info */}
          <div className="col-lg-4 col-md-5">
            
            {/* Address */}
            <div className="d-flex align-items-start gap-3 mb-3" data-anim="cinfo">
              <div className={`${styles.iconWrapper} d-flex align-items-center justify-content-center rounded-circle flex-shrink-0`}>
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3 className="m-0 fw-bold" style={{ fontSize: "17px" }}>Address</h3>
                <p className="m-0 text-muted" style={{ fontSize: "14px" }}>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="d-flex align-items-start gap-3 mb-3" data-anim="cinfo">
              <div className={`${styles.iconWrapper} d-flex align-items-center justify-content-center rounded-circle flex-shrink-0`}>
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3 className="m-0 fw-bold" style={{ fontSize: "17px" }}>Call Us</h3>
                <p className="m-0 text-muted" style={{ fontSize: "14px" }}>+1 5589 55488 55</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="d-flex align-items-start gap-3 mb-3" data-anim="cinfo">
              <div className={`${styles.iconWrapper} d-flex align-items-center justify-content-center rounded-circle flex-shrink-0`}>
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3 className="m-0 fw-bold" style={{ fontSize: "17px" }}>Email Us</h3>
                <p className="m-0 text-muted" style={{ fontSize: "14px" }}>info@example.com</p>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="col-lg-8 col-md-7">
            <form data-anim="cform">
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="text" className="form-control py-2" placeholder="Your Name" required />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control py-2" placeholder="Your Email" required />
                </div>
                <div className="col-12">
                  <input type="text" className="form-control py-2" placeholder="Subject" required />
                </div>
                <div className="col-12">
                  <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-primary px-4 py-2 rounded-pill style-btn" style={{ backgroundColor: '#559bcc', borderColor: '#559bcc' }}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      </div>


<footer>

<div className='container pt-5'>

<div className='d-flex flex-column align-items-center justify-content-center'>
<h2 className=' fw-bold   text-light'>Sofland</h2>
<p className='text-light fs-6' >Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
<div className='d-flex align-items-center gap-3  pt-3 justify-content-center'>
<div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
  <i className="fa-brands fa-x-twitter"></i>
</div>
<div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
  <i class="fa-brands fa-facebook-f"></i>
</div>
<div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
 <i class="fa-brands fa-instagram"></i>
</div>
<div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
<i className="fa-brands fa-skype"></i>
</div>
<div className={`${styles.icon} d-flex align-items-center justify-content-center`}>
<i class="fa-brands fa-linkedin"></i>
</div>
</div>


<div className={styles.copyright}>
  <p className="m-0 text-light" style={{fontSize: '14px'}}>
    Copyright <strong className=" text-white">SoftLand</strong>. All Rights Reserved
  </p>
  <p className="m-0 mt-2 text-light" style={{fontSize: '14px'}}>
    Designed by <a href="https://bootstrapmade.com/" className={styles.credit}>BootstrapMade</a>
  </p>
</div>


</div>


</div>


</footer>
    </>
  )
}

export default Footer;