import React, { useEffect, useRef } from 'react';
import styles from './About.module.css';
import img2 from '../images/cards-4.png'
import img1 from '../images/cards-2.png'
import img3 from '../images/cards-6.png'
import secimg from '../images/steps.svg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxes = [
    {
      icon: 'bi-buildings',
      title: 'Eius provident',
      text: 'Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem',
    },
    {
      icon: 'bi-clipboard-pulse',
      title: 'Rerum aperiam',
      text: 'Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia',
    },
    {
      icon: 'bi-command',
      title: 'Veniam omnis',
      text: 'Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Delares sapiente',
      text: 'Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda',
    },
  ];

  const cards = [
    {
      icons: 'bi-hdd-stack',
      title: 'Explore Your Team',
      text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imges: img1,
    },
    {
      icons: 'bi-brightness-high',
      title: 'Digital Whiteboard',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      imges: img2,
    },
    {
      icons: 'bi-calendar4-week',
      title: 'Design To Development',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
      imges: img3,
    },
  ];

  const girlcard = [
    {
      span: '01',
      title: 'Sign Up',
      para: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat',
    },
    {
      span: '02',
      title: 'Repellat Nihil',
      para: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest',
    },
    {
      span: '03',
      title: 'Ad ad velit qui',
      para: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis',
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // left text column
      gsap.from('[data-anim="left"]', {
        opacity: 0,
        y: 70,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="left"]', start: 'top 80%' },
      });

      // 4 icon boxes
      gsap.from('[data-anim="box"]', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="box"]', start: 'top 85%' },
      });

      // 3 image cards
      gsap.from('[data-anim="card"]', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="card"]', start: 'top 85%' },
      });

      // heading girl image
      gsap.from('[data-anim="head"]', {
        opacity: 0,
        y: 70,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="head"]', start: 'top 85%' },
      });

      gsap.from('[data-anim="girl"]', {
        opacity: 0,
        scale: 1.4,
        transformOrigin: 'center center',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="girl"]', start: 'top 85%' },
      });

      // 3 step cards
      gsap.from('[data-anim="step"]', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-anim="step"]', start: 'top 85%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Column */}
          <div className="col-lg-5 mb-5 mb-lg-0" data-anim="left">
            <span className={`${styles.badgeCustom} px-3 py-2 rounded-2  `} id='about'>
              About Us
            </span>
            <h2 className="pt-3 fw-bold">Ducimus rerum libero reprehenderit cumque</h2>
            <p className="w-100 mt-3">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime.
              Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure.
              Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.
            </p>
            <button className={`${styles.readMoreBtn} btn mt-4 text-white    rounded-2`} style={{ padding: '13px  23px 12px 23px' }}>
              Read More    <i className="fa-solid fa-arrow-right-long mx-1"></i>
            </button>
          </div>

          {/* Right Icon Boxes Column (Mapped) */}
          <div className="col-lg-7">
            <div className="row g-4">
              {boxes.map((box, index) => (
                <div className={`${styles.card} col-md-6 `} key={index} data-anim="box">
                  <div className={`${styles.iconBox} p-5 rounded-2 bg-white shadow-sm`}>
                    <div className={`${styles.iconWrapper} mb-3 d-inline-flex align-items-center justify-content-center rounded-pill`}>
                      <i className={`bi  ${box.icon} fs-3`}></i>
                    </div>
                    <h2 className={`${styles.boxTitle} h4 fw-bold mb-2`}>{box.title}</h2>
                    <p className={`${styles.text}   mb-0`}>{box.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 pt-5 text-center' data-anim="head">
        <h2 className="pt-3 fw-bold" >Save your time to using SoftLand</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-anim="card">
              <div className={`${styles.imgcard} h-100 p-5 rounded-2 bg-white shadow-sm text-center`}>
                <img src={card.imges} alt={card.title} className="img-fluid" />
                <div className={`${styles.iconWrapper} mb-3 d-inline-flex align-items-center justify-content-center rounded-pill`}>
                  <i className={`bi ${card.icons} fs-3`}></i>
                </div>
                <h2 className={`${styles.cardTitle} h4 fw-bold mb-2`}>{card.title}</h2>
                <p className={`${styles.text} mb-0`}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-5 pt-5  d-flex justify-content-center' style={{ overflow: 'hidden' }}>
        <img data-anim="girl" className='img-fluid mt-5 pt-5' width={650} height={600} src={secimg} alt="sec img" />
      </div>

      <div className="container pt-4">
        <div className="row g-4">
          {girlcard.map((step, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-anim="step">
              <div className={`${styles.stepCard} h-100`}>
                <span className={styles.stepNumber}>{step.span}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;