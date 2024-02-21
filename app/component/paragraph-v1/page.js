import { Balthazar } from "next/font/google";
const balthazar = Balthazar({
    weight:'400',
    style:'normal',
    subsets:['latin']
   });
   
const ParagraphV1 = ({children}) => {
    return(
        <div className="flex justify-center items-center " >
              <h1 className={`text-white text-center ${balthazar.className}`} style={{fontSize:'clamp(15px,5vw,25px)'}}>{children}</h1>
                
            </div>
    )
}

export default ParagraphV1;