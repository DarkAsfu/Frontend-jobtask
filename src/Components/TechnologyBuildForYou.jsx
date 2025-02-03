import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

const TechnologyBuildForYou = () => {
  const sliderData = [
    {
      title: 'Customers focused',
      subTitle: 'Purpose-built financial services',
      description1:
        'AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services. Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.',
      description2:
        'Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.',
      image:
        'https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format'
    },
    {
      title: 'Agile and adaptable',
      subTitle: 'Agile and adaptable for growth',
      description1:
        'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.',
      description2:
        'Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
      image:
        'https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format'
    },
    {
      title: 'Compliance ready',
      subTitle: 'Manage compliance with ease',
      description1:
        'Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.',
      description2:
        'Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.',
      image:
        'https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format'
    },
    {
      title: 'Secure and safe',
      subTitle: 'Highly secure and safe',
      description1:
        'Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.',
      description2:
        'Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.',
      image:
        'https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format'
    }
  ]

  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='max-w-6xl mx-auto py-20 text-center'>
      <h4 className='text-center title'>TECHNOLOGY BUILT FOR YOU</h4>
      <h2 className='text-center sub-title'>The future of finance</h2>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper mt-20 mb-10 '
      >
        {sliderData.map((s, i) => (
          <SwiperSlide key={i}>
            <h3 className={`text-[18px] font-semibold py-3 hidden md:block ${activeIndex === i ? 'bg-[#B9D9FF] text-[#1f80F0] py-3 rounded-full' : 'text-[#1f80F0]'}`}>
              {s.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }}
        spaceBetween={10}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className='mySwiper2'
      >
        {sliderData.map(s => (
          <SwiperSlide key={s.title}>
            <div className='mx-6 grid grid-cols-1 md:grid-cols-2 gap-8 border shadow-lg rounded-xl px-6 md:px-20 py-14 text-left'>
              <div>
                <h6 className='title'>{s.title}</h6>
                <h2 className='mid-title mt-8'>{s.subTitle}</h2>
                <div className='text-[#164377] font-bold mt-10'>
                  <p>
                    <strong>{s.description1}</strong>
                  </p>
                </div>
                <div className='text-[#164377] mt-4'>
                  <p>
                    <br />
                    {s.description2}
                  </p>
                </div>
              </div>
              <div>
                <img className='h-full rounded-2xl' src={s.image} alt='' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TechnologyBuildForYou