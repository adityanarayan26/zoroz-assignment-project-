import { create } from 'zustand'

export const useStore = create((set) => ({
    SearchData: null,
    setSearchData: (SearchData) => set({ SearchData }),
    categoryProduct: null,
    setCategoryProduct: (categoryProduct) => set({ categoryProduct }),
    allProducts: null,
    setAllProducts: (allProducts) => set({ allProducts }),

    Shoppingcart: JSON.parse(localStorage.getItem('Cart')) || null,
    setShoppingcart: (item) => {
        localStorage.setItem('Cart', JSON.stringify(item));
        set({ Shoppingcart: item });
    },

    SingleProduct: JSON.parse(localStorage.getItem('specific-product')) || null,
    setSingleProduct: (product) => {
        localStorage.setItem('specific-product', JSON.stringify(product));
        set({ SingleProduct: product });
    },
}))
