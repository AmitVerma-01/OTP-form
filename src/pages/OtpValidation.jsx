// import React from 'react'

import ChaiCodeLogo from "../components/ChaiCodeLogo"
import OtpBox from "../components/OtpBox"

const OtpValidation = () => {
  return (
    <div className='bg-[#3F72AF] h-[calc(100vh-48px)] md:h-[calc(100vh-64px)] drop-shadow-2xl  flex flex-col gap-y-9 justify-center items-center'>
        <h1 className="text-center md:text-5xl text-white text-3xl font-bold ">Chai Aur Code</h1>
        <div className="fixed right-5 top-24 bg-white p-4 rounded-lg text-xl font-semibold ">Valid OTP : 1234</div>
        <OtpBox/>
        <ChaiCodeLogo/>
    </div>
  )
}

export default OtpValidation
