"use client"
import React, { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
const ethers = require("ethers")


import { CrowdFundingABI,CrowdFundingAddress } from "./contants";

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(CrowdFundingAddress,CrowdFundingABI,signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({children}) => {

    const titleData = "CrowdFunding Contract";
    const [currentAccount, setCurrentAccount] = useState("");
    const [isVisible,setIsVisible] = useState(true);
    
    const createCampaign = async (campaign) => {
        const {title, description, amount, deadline} = campaign;
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        console.log(currentAccount);
        try {
            const transaction = await contract.createCampaign(
                currentAccount,
                title,
                description,
                ethers.utils.parseUnits(amount,18),
                new Date(deadline).getTime()
            );

            await transaction.wait();
            console.log("contract call success", transaction);
        } catch (error) {
            console.log("contract call failure", error);
        }
    };
    
    const getCampaigns = async () => {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();

        const parsedCampaigns = campaigns.map((campaign,i)=>({
            owner: campaign.owner,
            title: campaign.title,
            description:contract.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.fomratEther(
                campaign.amountCollected.toString()
            ),
            pId:i,
        }));
        return parsedCampaigns;
    }
    
    const getUserCampaigns = async () => {
            const provider = new ethers.providers.JsonRpcProvider();
            const contract = fetchContract(provider);

            const allcampaigns = await contract.getCampaigns();
            const accounts = await window.ethereum.request({
                method:"eth_accounts",
            });
            const currentUser = accounts[0];
            const filteredCampaigns = allcampaigns.filter((campaign)=> campaign.owner === "");
            const userData = filteredCampaigns.map((campaign,i)=>({
                owner: campaign.owner,
                title: campaign.title,
                description:contract.description,
                target: ethers.utils.formatEther(campaign.target.toString()),
                deadline: campaign.deadline.toNumber(),
                amountCollected: ethers.utils.formatEther(
                    campaign.amountCollected.toString()
                ),
                pId:i,
            }));
            return userData;
    }
    
    const donate = async (pId,amount) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        
        const campaignData = await contract.donateToCampaign(pId,{
            value:ethers.utils.parseEther(amount),

        });


        await campaignData.wait();
        return campaignData;
    }
    
    const getDonations = async (pId) => {
        const provider = ethers.providers.JsonRpcProvider();
        const contract  = fetchContract(provider);
        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;

        const parseDonations = [];

        for(let i=0;i<numberOfDonations;i++){
            parseDonations.push({
                donator:donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString()),
            })
        }
        return parseDonations;
    }

    const checkIfWalletConnected = async () => {
        try {
            if(!window.ethereum){
                console.log("hi");
                return setOpenError(true), setError("Install MetaMask");
            }

            const accounts = await window.ethereum.request({method:"eth_accounts"});

            if(accounts.length){
                console.log(accounts[0]);
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("no account found");
            }

        } catch (error) {
            console.log("something wrong while connecitng to wallet");
        }
    }

    useEffect(()=>{
        checkIfWalletConnected();
    },[])
    
    const connectWallet = async (campaign) => {
        try {
            if(!window.ethereum) return console.log("Install Metamask");

            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts"
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("Error while connecting to wallet")
        }
    }



    return (
        <CrowdFundingContext.Provider
        
        value={{
            titleData,
            currentAccount,
            createCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getDonations,
            connectWallet,
            isVisible,setIsVisible

        }}
        >
            {children}
        </CrowdFundingContext.Provider>

        
    )

}






