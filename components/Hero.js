"use client";
import React, { useState } from "react";

export default function Hero({ titleData, createCampaign }) {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const createNewCampaign = async (e) => {
    console.log("hi");
    e.preventDefault();
    try {
      console.log("hi");
      const data = await createCampaign(campaign);
    } catch (error) {
      console.log(error);
    }
  };

  return (

        <div className="relative backgroundMain z-0">
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2
                  className="max-w-lg mb-6 font-sans text-2xl font-bold tracking-tight
                            text-white sm:text-5xl sm:leading-none"
                >
                  SAATHI
                  <br className="hidden  md:block" />
                  <div className="text-4xl mt-2">
                  Free Crowdfunding for India
                  </div>
                </h2>

                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Raise funds online for medical emergencies and social causes
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center  tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 text-gray-200 underline"
                >
                  Learn More 
                  <img className="mx-1" src="/right.svg" height="10px" width="10px" alt="" />
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Campaign
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium "
                      >
                        Title
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            title: e.target.value,
                          })
                        }
                        placeholder="title"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus: shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium "
                      >
                        Description
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            description: e.target.value,
                          })
                        }
                        placeholder="description"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus: shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="phone"
                        className="inline-block mb-1 font-medium "
                      >
                        Target Amount
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            amount: e.target.value,
                          })
                        }
                        placeholder="amount"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus: shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium "
                      >
                        Date
                      </label>
                      <input
                        onChange={(e) =>
                          setCampaign({
                            ...campaign,
                            deadline: e.target.value,
                          })
                        }
                        placeholder="Date "
                        required
                        type="date"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus: shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        onClick={(e) => createNewCampaign(e)}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-[#7DCB9B]  focus:shadow-outline focus:outline-none"
                      >
                        Create Campaign
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:test-sm">
                      Create your Campaign to raise funds
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
