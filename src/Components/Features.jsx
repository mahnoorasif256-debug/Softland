import React, { useEffect, useRef } from 'react'
import styles from '../Components/Features.module.css'
import feature1 from '../images/features-1.svg'
import feature2 from '../images/features-2.svg'
import feature3 from '../images/features-3.svg'
import feature4 from '../images/features-4.svg'
import gallery1 from '../images/app-gallery-1.png'
import gallery2 from '../images/app-gallery-2.png'
import gallery3 from '../images/app-gallery-3.png'
import gallery4 from '../images/app-gallery-4.png'
import gallery5 from '../images/app-gallery-5.png'
import gallery6 from '../images/app-gallery-6.png'
import gallery7 from '../images/app-gallery-7.png'
import gallery8 from '../images/app-gallery-8.png'
import gallery9 from '../images/app-gallery-9.png'
import gallery10 from '../images/app-gallery-10.png'
import gallery11 from '../images/app-gallery-11.png'
import gallery12 from '../images/app-gallery-12.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.min.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Features = () => {

const lightboxRef = useRef(null)
const swiperRef = useRef(null)
const sectionRef = useRef(null)

useEffect(() => {
  const lb = GLightbox({
    elements: galleryImages.map((src) => ({ href: src, type: 'image' })),
    touchNavigation: true,
    loop: true,
    zoomable: false,
  })

  lb.on('open', () => swiperRef.current?.autoplay.stop())
  lb.on('close', () => swiperRef.current?.autoplay.start())
  lightboxRef.current = lb
  return () => lb.destroy()
}, [])

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.utils.toArray('[data-anim="fhead"]').forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      })
    })

    gsap.utils.toArray('[data-anim="frow"]').forEach((row) => {
      const text = row.querySelector('[data-anim="ftext"]')
      const img = row.querySelector('[data-anim="fimg"]')
      gsap
        .timeline({ scrollTrigger: { trigger: row, start: 'top 80%' } })
        .from(text, { opacity: 0, y: 50, duration: 0.8, ease: 'power2.out' })
        .from(
          img,
          { opacity: 0, scale: 1.2, transformOrigin: 'center center', duration: 0.8, ease: 'power2.out' },
          0.15
        )
    })

    // gallery slider
    gsap.from('[data-anim="gallery"]', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: { trigger: '[data-anim="gallery"]', start: 'top 85%' },
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


 const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
]

  const featuresData = [
  {
    title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    hasIcon: true,
    list1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    list2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    list3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imges: feature1,
    imageOnRight: true
  },
  {
    title: 'Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    para2: 'Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.',
    hasIcon: false,
    imges: feature2,
    imageOnRight: false
  },
  {
    title: 'Corporis temporibus maiores provident',
    para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    hasIcon: true,
    list1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    list2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    list3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imges: feature3,
    imageOnRight: true
  },
  {
    title: 'Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    para2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    hasIcon: false,
    imges: feature4,
    imageOnRight: false
  }
]

  return (
    <div ref={sectionRef}>
      <div className='mt-5 pt-5 text-center' id='features' data-anim="fhead">
        <h1 className='pt-3 fw-bold'>Features</h1>
        <p className='' style={{fontSize: '18px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div> 

      <div className="container  py-5">
        {featuresData.map((item, index) => (
          <div 
            key={index} 
            data-anim="frow"
            className={`row align-items-center mb-5 pb-5 ${item.imageOnRight ? 'flex-row-reverse' : ''}`}
          >
            {/* Text Column */}
            <div className="col-md-6" data-anim="ftext">
              <h3 className="fw-bold mb-3">{item.title}</h3>
              <p className="">{item.para || item.para1}</p>
              
              {item.para2 && <p className="">{item.para2}</p>}

              {/* Conditional rendering for icons/lists */}
              {item.hasIcon && (
                <ul className={`list-unstyled mt-3 ${styles.customList}`}>
                  <li className="mb-2">
                    <i className={`${styles.list} mt-2 fa-solid fa-check me-2`}></i> {item.list1}
                  </li>
                  <li className="mb-2">
                    <i className={`${styles.list} mt-2 fa-solid fa-check me-2`}></i> {item.list2}
                  </li>
                  <li className="mb-2">
                    <i className={`${styles.list} mt-2 fa-solid fa-check me-2`}></i> {item.list3}
                  </li>
                </ul>
              )}
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center overflow-hidden">
              <img data-anim="fimg" src={item.imges} alt="Feature" className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
{/* Gallery Section Heading */}
      <div className='mt-5 pt-5 text-center' data-anim="fhead">
        <h1 className='pt-3 fw-bold'>Gallery</h1>
        <p className='' style={{fontSize: '18px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div> 

      {/* Gallery Swiper Slider */}
<div className={`container-fluid py-4 ${styles.gallery}`} data-anim="gallery">
 <Swiper
  onSwiper={(s) => (swiperRef.current = s)}
  modules={[Pagination, Autoplay]}
  centeredSlides={true}
  loop={true}
  spaceBetween={10}
  slidesPerView={7}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  breakpoints={{
    0:    { slidesPerView: 3, spaceBetween: 8 },
    768:  { slidesPerView: 5, spaceBetween: 10 },
    1024: { slidesPerView: 7, spaceBetween: 10 },
  }}
  className="mySwiper"
>
  {galleryImages.map((img, i) => (
    <SwiperSlide key={i}>
      <img
        src={img}
        alt={`gallery ${i + 1}`}
        onClick={() => lightboxRef.current?.openAt(i)}
      />
    </SwiperSlide>
  ))}
</Swiper>
</div>



    </div>
  )
}

export default Features;






