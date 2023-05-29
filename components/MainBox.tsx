import { useState } from "react"
import { Icon } from '@iconify/react'
// import ConnectWallet from './Connect/ConnectWallet'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useNetwork, useSwitchNetwork, useAccount, useBalance, useConnect, useDisconnect } from 'wagmi'
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { SendTransaction } from "./SendTransaction"

export default function MainBox() {
  const [fromAmount, setFromAmount] = useState(0);
  const [selectedTab, setSelectedTab] = useState(1);
  const { address, isConnected, connector } = useAccount();

  var countDownDate = new Date("2023-05-29T18:00:00.000-05:00").getTime();

  /*
  var timer = "";

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    timer = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      timer = "F";
    }
  }, 1000);
  */

  return (
    <div className="max-w-[800px] m-auto w-11/12 text-black">
      <div>
        <div className="grid grid-cols-3 gap-2 sm:gap-5 px-1 sm:px-5 mb-[-10px]">
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded ${selectedTab == 1 ? 'bg-white' : 'bg-gray-100'} flex items-center justify-center drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)]`}
            onClick={() => setSelectedTab(1)}
          >
            <img src="/img/seed.png" width="20" alt="" />
            <div className="hidden sm:block ml-2">Seed Contribution</div>
            <div className="block sm:hidden ml-2">Contribution</div>
          </button>
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded  ${selectedTab == 2 ? 'bg-white' : 'bg-gray-100'} drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)] flex items-center justify-center`}
            onClick={() => setSelectedTab(2)}
          >
            <Icon icon="simple-icons:substack" width="15" color="gray" />
            <div className="ml-2">Terms</div>
          </button>
          <button className={`px-1 sm:px-8 text-xs sm:text-lg rounded-t-2xl py-4 rounded  ${selectedTab == 3 ? 'bg-white' : 'bg-gray-100'} drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)] flex items-center justify-center`}
            onClick={() => setSelectedTab(3)}
          >
            <img src="/img/blueprint.png" width="20" alt="" />
            <div className="ml-2">Blueprint</div>
          </button>
        </div>
        {
          selectedTab === 1 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            <div>
              <div className="flex w-full flex-col items-center">
                <ConnectButton />
              </div>
              <SendTransaction />
              {/*<div className="max-w-[250px] m-auto w-full">
                <div className="bg-gray-100 p-1 rounded-xl mt-10 flex justify-between  w-full">

                  <div className="flex  input_wrap">
                    <div className="flex flex-col justify-center">ETH</div>
                    <input
                      className='bg-transparent px-1 outline-none'
                      placeholder='0'
                      value={fromAmount}
                      onChange={(e) => {
                        const RE = /^\d*\.?\d{0,18}$/
                        if (RE.test(e.currentTarget.value)) {
                          setFromAmount((e.target.value as any));
                        }
                      }}
                    />
                  </div>
                  <button className="bg-white px-2 py-1 rounded-xl">Send</button>
                </div>
              </div>
              */}
            </div>
          </div>
        }
        {
          selectedTab === 2 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            <h2 className="text-lg">Terms</h2>
            <div className="flex justify-between">
              <div className="w-full">
                <ul>
                  <li><p style={{color: "#000000"}}>Uniswap V3 Liquidity: <span style={{color: "#000000"}}>325,000 SCH</span></p></li>
                  <li><p style={{color: "#00a1e0"}}>SCH Emissions: <span style={{color: "#000000"}}>200,000 SCH</span></p></li>
                  <li><p style={{color: "#0cedb2"}}>Team Allocation: <span style={{color: "#000000"}}>150,000 SCH</span></p></li>
                  <li><p style={{color: "#00d660"}}>Angel (Pre-Seed) Round Allocation*: <span style={{color: "#000000"}}>120,000 SCH</span></p></li>
                  <li><p style={{color: "#0cf3f7"}}>Seed Round Allocation*: <span style={{color: "#000000"}}>80,000 SCH</span></p></li>
                  <li><p style={{color: "#0c77f7"}}>DAO Treasury Reserves: <span style={{color: "#000000"}}>75,000 SCH</span></p></li>
                  <li><p style={{color: "#0cf3f7"}}>Advisory Allocation: <span style={{color: "#000000"}}>50,000 SCH</span></p></li>
                </ul>
              </div>
              <div className="w-full">
                <img src="/img/pol.jpg" />
              </div>
            </div>
            <p className="mt-4">*Seed round allocation is distributed on a 4-week linear system, no cliff. This means that 25% of seed allocation will unlock each week for 4 weeks.</p>
          </div>
        }
        {
          selectedTab === 3 &&
          <div className="drop-shadow-[0_14px_10px_rgba(0,0,0,0.1)] rounded-t-lg border-none font-light rounded-2xl p-8 rounded text-gray-500 bg-white">
            <h2 className="text-lg">Blueprint</h2>
            <p className="mb-4"><a className="text-blue-500 hover:underline" href="https://docs.schwap.app/introduction/the-blueprint">https://docs.schwap.app/introduction/the-blueprint</a></p>
            <p>Phase I:</p>
            <ul className="mb-4">
              <li><p>- Functioning order book market</p></li>
              <li><p>- Baseplate infrastructure for further expansion</p></li>
              <li><p>- Internal market-making</p></li>
            </ul>
            <p>Phase II:</p>
            <ul className="mb-4">
              <li><p>- Meta-router</p></li>
              <li><p>- Emphasis on UX</p></li>
              <li><p>- Expanding market-making capabilities</p></li>
            </ul>
            <p>Phase III:</p>
            <ul>
              <li><p>- <a href="https://docs.schwap.app/protocol-overview/overview#hybrid-pairs">Hybrid pairs</a></p></li>
              <li><p>- Professional market-makers</p></li>
              <li><p>- Deployment on select alt-L1s and L2s</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}
