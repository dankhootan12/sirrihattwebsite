import { Alice } from "next/font/google";
const alice = Alice({
    weight:'400',
    style:'normal',
    subsets:['latin']
   });
   
const HeaderV1 = ({children}) => {
    return(
        <div className="flex justify-center items-center " >
              <h1 className={`text-white text-center ${alice.className}`} style={{fontSize:'clamp(25px,5vw,80px)'}}>{children}</h1>

            </div>
    )
}

export default HeaderV1;