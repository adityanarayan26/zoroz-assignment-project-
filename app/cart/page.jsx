"use client"
import axios from 'axios'
import React, { useEffect } from 'react'
import { useStore } from '../(store)/zustand'

const page = () => {

    const { Shoppingcart, setShoppingcart } = useStore()
    useEffect(() => {
        Shoppingcart && console.log(Shoppingcart);
    }, [Shoppingcart])
    return (
        <div className='h-screen w-full bg-zinc-300 px-5 pt-[7rem]'>
            <h1 className='text-3xl text-black font-sans font-bold capitalize text-center w-full pt-10'>Your Cart</h1>
            <div className='w-full h-fit '>

            </div>
        </div>
    )
}

export default page
