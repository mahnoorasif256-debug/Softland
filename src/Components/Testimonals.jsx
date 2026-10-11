import React, { useState, useEffect, useRef } from 'react'
import styles from '../Components/Testimonals.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import person1 from '../images/testimonials-1.jpg'
import person2 from '../images/testimonials-2.jpg'
import person3 from '../images/testimonials-3.jpg'
import person4 from '../images/testimonials-4.jpg'
import person5 from '../images/testimonials-5.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Testimonals = () => {

const [openIndex, setOpenIndex] = useState(null)
const sectionRef = useRef(null)

useEffect(() => {
  const START = 'top 95%'

  const ctx = gsap.context(() => {
    gsap.utils.toArray('[data-anim="thead"]').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: START },
      })
    })

    gsap.from('[data-anim="tslider"]', {
      opacity: 0,
      scale: 0.6,
      transformOrigin: 'center center',
      duration: 0.9,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: '[data-anim="tslider"]', start: START },
    })

    gsap.from('[data-anim="plan"]', {
      opacity: 0,
      scale: 0.6,
      transformOrigin: 'center center',
      duration: 0.7,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: '[data-anim="plan"]', start: START },
    })

    
    gsap.from('[data-anim="faq"]', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      clearProps: 'opacity,transform',
      scrollTrigger: { trigger: '[data-anim="faq"]', start: START },
    })
  }, sectionRef)

  const imgs = sectionRef.current ? sectionRef.current.querySelectorAll('img') : []
  const refresh = () => ScrollTrigger.refresh()
  imgs.forEach((im) => { if (!im.complete) im.addEventListener('load', refresh) })

  return () => {
    imgs.forEach((im) => im.removeEventListener('load', refresh))
    ctx.revert()
  }
}, [])

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    const faqs = [
  { q: 'Non consectetur a erat nam at lectus urna duis?',
    a: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
  { q: 'Feugiat scelerisque varius morbi enim nunc faucibus?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.' },
  { q: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    a: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.' },
  { q: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    a: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.' },
  { q: 'Tempus quam pellentesque nec nam aliquam sem et tortor?',
    a: 'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.' },
  { q: 'Perspiciatis quod quo quos nulla quo illum ullam?',
    a: 'Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.' },
]

const testimonials = [
  { img: person1, name: 'Matt Brandon', role: 'Freelancer',
    text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.' },
  { img: person2, name: 'John Larson', role: 'Entrepreneur',
    text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.' },
  { img: person3, name: 'Jena Karlis', role: 'Store Owner',
    text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.' },
  { img: person4, name: 'Sara Wilsson', role: 'Designer',
    text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.' },
  { img: person5, name: 'Saul Goodman', role: 'CEO & Founder',
    text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.' },
]



  return (
   <div ref={sectionRef}>
   <section className={styles.section}>
      <div className="text-center pt-5" data-anim="thead">
        <h1 className="pt-3 fw-bold">Testimonials</h1>
        <div className={styles.subtitle}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </div>
      </div>

      <div className={`container ${styles.slider}`} data-anim="tslider">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className={styles.item}>
                <img src={t.img} alt={t.name} className={styles.photo} />
                <h3 className={styles.name}>{t.name}</h3>
                <h4 className={styles.role}>{t.role}</h4>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, s) => (
                    <i key={s} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <div className={styles.quote}>
                  <i className={`fa-solid fa-quote-left ${styles.qLeft}`}></i>
                  {t.text}
                  <i className={`fa-solid fa-quote-right ${styles.qRight}`}></i>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section> 

    {/* pricing  */}

  <div className="text-center pt-5" id='pricing' data-anim="thead">
        <h1 className="pt-3 fw-bold">Pricing</h1>
        <div className={styles.subtitle}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </div>
      </div>
   
<div className="container py-5">
  <div className={`${styles.cards}  row g-0 align-items-center `}>

    {/* Free Plan */}
    <div className="col-lg-4" data-anim="plan">
      <div className={`${styles.card} ${styles.left}`}>
        <h3 className={styles.planName}>Free Plan</h3>
        <div className={styles.icon}><i className="fa-solid fa-box"></i></div>
        <div className={styles.price}><sup>$</sup>0 <span>/ month</span></div>
        <ul className={styles.list}>
          <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
          <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
          <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
          <li className={styles.na}><i className="fa-solid fa-xmark"></i> Pharetra massa massa ultricies</li>
          <li className={styles.na}><i className="fa-solid fa-xmark"></i> Massa ultricies mi quis hendrerit</li>
        </ul>
        <a href="#" className={styles.btn}>Buy Now</a>
      </div>
    </div>

    {/* Business Plan */}
    <div className="col-lg-4" data-anim="plan">
      <div className={`${styles.card} ${styles.middle}`}>
        <h3 className={styles.planName}>Business Plan</h3>
        <div className={styles.icon}><i className="fa-solid fa-rocket"></i></div>
        <div className={styles.price}><sup>$</sup>29 <span>/ month</span></div>
        <ul className={styles.list}>
          <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
          <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
          <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
          <li><i className="fa-solid fa-check"></i> Pharetra massa massa ultricies</li>
          <li><i className="fa-solid fa-check"></i> Massa ultricies mi quis hendrerit</li>
        </ul>
        <a href="#" className={styles.btn}>Buy Now</a>
      </div>
    </div>

    {/* Developer Plan */}
    <div className="col-lg-4" data-anim="plan">
      <div className={`${styles.card} ${styles.right}`}>
        <h3 className={styles.planName}>Developer Plan</h3>
        <div className={styles.icon}><i className="fa-solid fa-paper-plane"></i></div>
        <div className={styles.price}><sup>$</sup>49 <span>/ month</span></div>
        <ul className={styles.list}>
          <li><i className="fa-solid fa-check"></i> Quam adipiscing vitae proin</li>
          <li><i className="fa-solid fa-check"></i> Nec feugiat nisl pretium</li>
          <li><i className="fa-solid fa-check"></i> Nulla at volutpat diam uteera</li>
          <li><i className="fa-solid fa-check"></i> Pharetra massa massa ultricies</li>
          <li><i className="fa-solid fa-check"></i> Massa ultricies mi quis hendrerit</li>
        </ul>
        <a href="#" className={styles.btn}>Buy Now</a>
      </div>
    </div>

  </div>
</div>



{/* faqs  */}

<section className="pb-5">
      <div className="text-center pt-5" data-anim="thead">
        <h1 className="pt-3 fw-bold">Frequently Asked Questions</h1>
        <div className={styles.subtitle}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </div>
      </div>

    <div className={styles.faqWrap}>
  {faqs.map((item, i) => (
    <div
      key={i}
      data-anim="faq"
      className={`${styles.faqItem} ${openIndex === i ? styles.open : ''}`}
      onClick={() => toggle(i)}
    >
      <div className={styles.question}>
        <span>{item.q}</span>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
      {openIndex === i && <div className={styles.answer}>{item.a}</div>}
    </div>
  ))}
</div>
    </section>


   </div>
  )
}

export default Testimonals