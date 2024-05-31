"use client";
import React, { useContext, useEffect, useState } from 'react'
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import PopUp from '../../components/PopUp';
import { CrowdFundingContext } from '../../context/CrowdFunding';



export default function page() {

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
      <Hero titleData ={titleData} createCampaign = {createCampaign} />
      <Card
        title = "All listed Campaign"
        allcampaign = {allcampaign}
        setOpenModel = {setOpenModel}
        setDonate ={setDonateCampaign}
      />
      <Card
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
