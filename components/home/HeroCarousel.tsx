'use client'

import { heroImages } from '@/consts'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        {heroImages.map(image => (
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel
