import React from 'react'
import { useStore } from '../(store)/zustand'

const AddToCart = () => {

  const {setShoppingcart,Shoppingcart,SingleProduct} = useStore()
  return (
    <button class=" flex justify-center items-center bg-red-500 text-white font-medium rounded-sm px-4 py-2 hover:bg-red-600 transition-all ease-linear duration-100 capitalize " onClick={()=>setShoppingcart(SingleProduct)}>
     add to cart
    </button>
  )
}

export default AddToCart
