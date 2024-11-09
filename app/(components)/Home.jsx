"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStore } from '../(store)/zustand'
import Link from 'next/link'

const Home = () => {

  const { categoryProduct, setCategoryProduct, allProducts, setAllProducts } = useStore()

  console.log(allProducts);

  const categories = [
    {
      id: 1,
      name: 'Beauty',
      img: 'https://images.pexels.com/photos/10609061/pexels-photo-10609061.jpeg',
      link: '/products/beauty'
    }, {
      id: 2,
      name: 'Fragrances',
      img: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
      link: '/products/fragrances'

    }, {
      id: 3,
      name: "Furniture",
      img: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg',
      link: '/products/furniture'

    }, {
      id: 4,
      name: 'Groceries'
      , img: 'https://images.pexels.com/photos/2733918/pexels-photo-2733918.jpeg',
      link: '/products/groceries'
    }
  ];

  return (
    <div className='min-h-screen w-full pt-[7rem] flex justify-center bg-neutral-200'>
      <div className='flex flex-col justify-center items-center border-t-2 border-b-2 border-black w-fit my-10 h-fit p-5 '>
        <h1 className='text-3xl font-bold text-black uppercase py-2 font-sans'>collections</h1>
        <div className='flex gap-x-5 '>
          {categories.map(category => (
            <Link key={category.id} href={category.link}>
              <div className='flex flex-col items-center'>
                <img src={category.img} alt={category.name} className='w-40 h-40 object-cover' />
                <p className='text-black font-bold'>{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home