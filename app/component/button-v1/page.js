import {Tomorrow } from "next/font/google";
const tomorrow = Tomorrow({
    weight:['400','600','700'],
    style:'normal',
    subsets:['latin']
   });
const ButtonV1 = ({children}) => {
    return(
        <button className="bg-white p-3">             
            <span className={`text-[#061bb0] text-center font-bold ${tomorrow.className}`}>
                {children}
            </span>       
        </button>
    )
}

export default ButtonV1;