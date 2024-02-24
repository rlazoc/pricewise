'use client'

import { redirect, useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import { Products } from '@/static/products'
import PriceInfoCard from '@/components/products/PriceInfoCard'

const page = () => {
  const { id } = useParams() // { id } is a dynamic route
  const product = Products.find((product: Product) => product._id === id)
  if (!product) redirect('/')

  return (
    <div className="product-container">
      <div className="flex-gap-28 xl:flex-row flex-col">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={280}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-secondary font-semibold pt-6">
                {product.title}
              </p>
              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                View on Amazon
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="product-hearts">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt="heart"
                  width={24}
                  height={24}
                />
                <p className="text-base font-semibold text-[#D46F77]">
                  {product.likeAmount || 0}
                </p>
              </div>
              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/bookmark.svg"
                  alt="bookmark"
                  width={20}
                  height={20}
                />
              </div>
              <div className="p-2 bg-white-200 rounded-10">
                <Image
                  src="/assets/icons/share.svg"
                  alt="bookmark"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="product-info">
            <div className="flex flex-col gap-4">
              <p className="text-[34px] text-secondary font-bold">
                {product.currency}
                {product.currentPrice}
              </p>
              {product.discountRate &&
              product.discountRate !== product.currentPrice ? (
                <p className="text-[21px] text-black opacity-50 line-through">
                  {product.currency}
                  {product.originalPrice}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="product-stars">
                  <Image
                    src="/assets/icons/star.svg"
                    alt="star"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-primary-orange font-semibold">
                    {product.stars || 'No ratings'}
                  </p>
                </div>
                <div className="product-reviews">
                  <Image
                    src="/assets/icons/comment.svg"
                    alt="review"
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-secondary font-semibold">
                    {product.reviewsCount} reviews
                  </p>
                </div>
              </div>
              {product.recommendation ? (
                <p className="text-sm text-black opacity-50">
                  <span
                    className={
                      product.recommendation > 69
                        ? 'text-primary-green font-semibold'
                        : product.recommendation >= 60
                          ? 'text-primary-orange font-semibold'
                          : 'text-red-500 font-semibold'
                    }
                  >
                    {product.recommendation}%{' '}
                  </span>
                  <span>of buyers recommend this item.</span>
                </p>
              ) : (
                <p className="text-sm text-black opacity-50">
                  <span>No recommendation data available.</span>
                </p>
              )}
            </div>
          </div>

          <div className="product-info-cards-container">
            <div className="my-7 flex flex-col gap-5">
              <div className="flex gap-5 flex-wrap">
                <PriceInfoCard
                  title="Current Price"
                  iconSrc="/assets/icons/price-tag.svg"
                  value={`${product.currency} ${product.currentPrice}`}
                />
                <PriceInfoCard
                  title="Average Price"
                  iconSrc="/assets/icons/chart.svg"
                  value={`${product.currency} ${product.averagePrice}`}
                />
                <PriceInfoCard
                  title="Highest Price"
                  iconSrc="/assets/icons/arrow-up.svg"
                  value={`${product.currency} ${product.highestPrice}`}
                />
                <PriceInfoCard
                  title="Lowest Price"
                  iconSrc="/assets/icons/arrow-down.svg"
                  value={`${product.currency} ${product.lowestPrice}`}
                />
              </div>
            </div>
            {/*<Modal productId={id} />*/}
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl text-secondary font-semibold pt-6">
              Description
            </h3>
            <div className="flex flex-col gap-4">
              {product?.description?.split('\n')}
            </div>
          </div>
          <button className="btn w-fit mx-auto flex items-center justify-center gap-3">
            <Image
              src="/assets/icons/bag.svg"
              alt="check"
              width={22}
              height={22}
            />
            <Link
              href={product.url}
              target="_blank"
              className="text-base text-white"
            >
              Shop Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
