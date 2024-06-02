"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState , useRef } from 'react'
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';
import { CrowdFundingContext } from '../../context/CrowdFunding';
import Pop from "../../components/Pop"
import Navbar from '../../components/Navbar';

export default function page() {


  const dropdownRef = useRef(null);
  const {isVisible,setIsVisible,currentAccount} = useContext(CrowdFundingContext);
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  const {
            titleData,
            createCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getDonations,
  }  = useContext(CrowdFundingContext);

  const [allcampaign,setAllcampaign] = useState();
  const [usercampaign, setUsercampaign] = useState();

  useEffect(()=>{
    return async () => {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();

      setAllcampaign(allData);
      setUsercampaign(userData);
    }

    
  },[]);

  const [openModel,setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(); 


  return (
    <div>
               <Navbar/>
      {(isVisible&&!currentAccount)&&<Pop dropdownRef={dropdownRef} setIsVisible={setIsVisible} />}
      <Hero id="Create Campaign" titleData ={titleData} createCampaign = {createCampaign} />
      <Card id="Donate"
        title = "All listed Campaign"
        allcampaign = {allcampaign}
        setOpenModel = {setOpenModel}
        setDonate ={setDonateCampaign}
      />
      <Card id="My Campaigns"
        title = "Your created Campaign"
        allcampaign = {usercampaign}
        setOpenModel = {setOpenModel}
        setDonate ={setDonateCampaign}
      />

      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction = {donate}
        />
      )}
      
    </div>
  )
}
