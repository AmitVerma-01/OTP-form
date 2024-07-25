import { useState } from "react";
import { useRef } from "react";

const OtpBox = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const btnRef = useRef()
    const handleChange = (e,index)=>{
        const value = e.target.value;
        if(/^\d?$/.test(value)){
            const newOtp = [...otp];
            newOtp[index]=value;
            setOtp(newOtp);

            if(value && index < 3){
                inputRefs.current[index+1].focus();
            }
        }

    };

const handleKeyDown = (e,index)=>{
    if(e.key == 'Backspace' && !otp[index] && index > 0)
        inputRefs.current[index-1].focus();
        btnRef.current.style.removeProperty('background-color');
        btnRef.current.innerText = "Verify Account";
        otp.forEach((_, i) => inputRefs.current[i].style.removeProperty('border-color'));
}

const handleSubmit = ()=>{
    const otpStr = otp.join('');
    if(otpStr === '1234'){
            btnRef.current.style.backgroundColor = "#23CF9B";
            btnRef.current.innerText = "Verified";
            otp.forEach((_, i) => inputRefs.current[i].style.borderColor = "#23CF9B");
    }else{
            btnRef.current.style.backgroundColor = "#EB2D5B";
            btnRef.current.innerText = "Verification Failed";
            otp.forEach((_, i) => inputRefs.current[i].style.borderColor = "#EB2D5B");
    }

}

  return (
    <div className="text-center flex flex-col gap-y- justify-evenly w-3/4 md:w-1/3 rounded-lg  bg-white h-1/2">
      <h2 className="font-semibold text-xl md:text-2xl ">Mobile Phone Varification</h2>
      <p className="text-gray-400 py-3">Enter 4-digit vaarifiaction code that sent to your phone number</p>
      <div className="flex justify-center items-center ">
        {
            otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength="1"
                    className="border shadow-md md:text-2xl font-semibold text-xl focus:outline-none bg-blue-50 rounded-lg md:w-14 md:h-14 px-2 text-center w-12 h-12 mx-2 "
                />
                ))
                
        }
       </div>
      <button ref={btnRef} onClick={handleSubmit} className="bg-[#112D4E] text-xl shadow-lg rounded-lg text-white md:w-3/5 w-3/4 mx-auto py-3">Verify Account</button>
      <p className="text-gray-400">Didn&apos;t receive code? <span className="text-[#112D4E]">Resend</span></p>
    </div>
  )
}

export default OtpBox
