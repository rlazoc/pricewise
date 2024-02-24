import Image from 'next/image'
import Searchbar from '@/components/shared/Searchbar'
import HeroCarousel from '@/components/home/HeroCarousel'
import ProductCard from '@/components/home/ProductCard'

import { Product } from '@/types'
import { Products } from '@/static/products'

const Home = () => {
  const products: Product[] = Products

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here
              <Image
                src="/assets/icons/arrow-right.svg"
                width={16}
                height={16}
                alt="arrow right"
              />
            </p>
            <h1 className="head-text">
              Unleash the <span className="text-primary">Power</span> of{' '}
              <span className="text-secondary font-inter">Price</span>
              <span className="text-primary font-inter">Wise</span>
            </h1>
            <p className="body-text mt-4">
              <span className="text-secondary font-bold font-inter">Price</span>
              <span className="text-primary font-bold font-inter">Wise</span> is
              a price tracking tool that helps you{' '}
              <span className="underline">save money and time</span> while
              shopping on <span className="text-primary-orange">Amazon</span>.
              It’s easy to use and free for everyone.
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      {products ? (
        <section className="trending-section">
          <h2 className="section-text">Trending Products</h2>
          <div className="flex flex-wrap gap-x-8 gap-y-16">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}

export default Home
