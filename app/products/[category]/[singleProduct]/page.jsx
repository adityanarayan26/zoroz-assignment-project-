'use client'
import React from 'react'
import { useStore } from '@/app/(store)/zustand'
import { Loader2Icon } from 'lucide-react';
import AddToCart from '@/app/(components)/AddToCart';

const page = () => {
    const { SingleProduct, setSingleProduct } = useStore();


    return (
        SingleProduct ? <div className='min-h-screen w-full bg-white text-black'>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap border px-5 rounded-xl">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border-r"
                            src={SingleProduct?.images[0]}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{SingleProduct?.brand}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{SingleProduct?.title}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(4)].map((_, index) => (
                                        <svg
                                            key={index}
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-4 h-4 text-red-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                        </svg>
                                    ))}
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">{SingleProduct?.rating}</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {SingleProduct?.description}
                            </p>
                            <div className="flex items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                            <div className="flex gap-x-5 items-center">
                                <span className="title-font font-medium text-2xl text-gray-900">${SingleProduct?.price}</span>
                                <AddToCart />
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-2">
                                    <svg
                                        fill="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='review' className=''>
                    <section class="py-24 relative">
                        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                            <div class="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
                                <h2 class="w-full text-gray-900 text-4xl font-bold font-manrope leading-normal capitalize">reviews</h2>

                                <div class="w-full flex-col justify-start items-start gap-8 flex">
                                    {SingleProduct?.reviews.map((item, index) => (
                                        <div class="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">

                                            <div class="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                                                <div class="w-full justify-start items-start flex-col flex gap-1">
                                                    <div class="w-full justify-between ite ms-start gap-1 inline-flex">
                                                        <h5 class="text-gray-900  leading-snug font-bold text-xl">{item.reviewerName}</h5>

                                                    </div>
                                                    <h5 class="text-gray-800 text-sm font-normal leading-snug">{item.comment}</h5>
                                                    <span className='font-bold'> rating : {item.rating}</span>
                                                    <span>{item.date}</span>
                                                </div>

                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </section>

                </div>


            </section>
        </div> : <Loader2Icon className=' animate-spin size-20 absolute top-[50%] left-[50%]' />
    )
}

export default page