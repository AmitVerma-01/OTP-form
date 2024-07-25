// import React from 'react'

import ChaiCodeLogo from "../components/ChaiCodeLogo"
import OtpBox from "../components/OtpBox"

const OtpValidation = () => {
  return (
    <div className='bg-[#3F72AF] drop-shadow-2xl h-screen flex flex-col gap-y-9 justify-center items-center'>
        <h1 className="text-center md:text-5xl text-white text-3xl font-bold ">Chai Aur Code</h1>
        <OtpBox/>
        <ChaiCodeLogo/>
    </div>
  )
}

export default OtpValidation
