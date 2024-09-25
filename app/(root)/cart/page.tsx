"use client"

import { Button } from '@/components/ui/button'
import { RootState } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const items = useSelector((state: RootState) => state.cart.items)
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    const vat = (+totalPrice * 0.15).toFixed(2)
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2)
    console.log({ totalPrice, vat, totalPriceWithVat });


    return (
        <div className='mt-8 min-h-[60vh]'>
            {
                items.length == 0 && (
                    <div className='flex items-center w-full h-[80vh] flex-col justify-center ' >
                        <Image src="/images/cart.svg" alt='empty_cart' width={400} height={400} className='object-cover mx-auto' />
                        <h1 className='mt-8 text-2xl font-semibold'>Your Cart is empty</h1>
                        <Link href="/">
                            <Button className='mt-4 rounded'>Shop Now</Button>

                        </Link>
                    </div>
                )
            }
            {items.length > 0 && (
                <div className='md:-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12'>
                    <div className='rounded-lg shadow-md overflow-hidden xl:col-span-4'>
                        <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700'>Your Cart ({totalQuantity} Items)</h1>
                        {items.map((item) => {
                            return <div></div>
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart