"use client";
import React from 'react'

export default function Footer() {


    const productList = ["Pricing", "Reviews", "FAQs"];
    const contactList = [
    "support@saathi.com",
    "info@example.com",
    "Contact us",
    ];
    const usefullLink = ["Home", "About Us", "Press and Media"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
        <div className="text-center mx-6 py-10 md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                <div className="">
                    <h6 className="mb-4 flex items-center justify-center font-semibold uppercase
                    md:justify-start">
                    Saathi
                    </h6>
                    <p>
                    Raise funds online for medical emergencies and social causes
                    </p>
                </div>

                <div className=''>
                    <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
                        Resources
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
                        Contact
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
        <div className='backgroundMain p-6 text-center text-[#7DCB9B]'>
            <span>@ copyright saathi.org</span>
        </div>
    </footer>
  )
}
