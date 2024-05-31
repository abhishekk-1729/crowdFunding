"use client";
import React from 'react'

export default function Footer() {


    const productList = ["Market", "ERC20 Token", "Donation"];
    const contactList = [
    "support@cryptoking.com",
    "info@example. com",
    "Contact us",
    ];
    const usefullLink = ["Home", "About Us", "Company Bio"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
        <div className="text-center mx-6 py-10 md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                <div className="">
                    <h6 className="mb-4 flex items-center justify-center font-semibold uppercase
                    md:justify-start">
                    Crypto King 
                    </h6>
                    <p>
                        xyz xyz xyzvx 8989 8989 89898 898989 8989 
                    </p>
                </div>

                <div className=''>
                    <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                        Products
                    </h6>
                    {productList.map((el,i)=>{
                        return (
                            <p className='mb-4' key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        )
                    })}
                </div>


                <div className=''>
                    <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                        Useful Links
                    </h6>
                    {usefullLink.map((el,i)=>{
                        return (
                            <p className='mb-4' key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        )
                    })}
                </div>

                <div className=''>
                    <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                        CONTACT
                    </h6>
                    {contactList.map((el,i)=>{
                        return (
                            <p className='mb-4' key={i+1}>
                                <a href="#!">{el}</a>
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='backgroundMain p-6 text-center'>
            <span>xxxxxxxxxxxxxxx</span>
        </div>
    </footer>
  )
}
