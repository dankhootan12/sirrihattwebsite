import Image from "next/image";
import { motion } from "framer-motion";
import { Balthazar} from "next/font/google";
import ButtonV1 from "./component/button-v1/page";
import HeaderV1 from "./component/header-v1/page";
import ParagraphV1 from "./component/paragraph-v1/page";
const balthazar = Balthazar({
  weight:'400',
  style:'normal',
  subsets:['latin']
 });

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] bg-custom-gradient lg:pl-[100px] pt-[50px] flex flex-col"> 
        <div className="w-full h-[100px] ">
          <div className="relative w-[200px] h-full">
            <Image src= '/logo.png' alt='sirrihatt-logo' fill objectFit="cover"/>
          </div>
        </div>
        <div className="h-full flex flex-col lg:flex-row">
          <div className=" w-full h-full relative">
          <Image src= '/heroimage.svg' alt='sirrihatt-logo' fill objectFit="cover"/>

          </div>
          <div className="w-full h-full flex flex-col">
            <HeaderV1>
              Serving The Industry Since 2017
            </HeaderV1>

            <div className="w-full h-full flex justify-center items-center">
              <div className="h-full w-[3px] " style={{background:'linear-gradient(to bottom right,#5de0e6,#004aad'}}/>
            </div>
            <div>
            <ParagraphV1>
            Over the past few years, we have worked with a wide range of clients, each with their own unique needs and goals. Despite these differences, there is one thing that all of our clients have in common a desire to succeed.

            </ParagraphV1>
            </div>

            

            <div className="w-full h-full flex justify-center items-center">
            <div className="h-full w-[3px] " style={{background:'linear-gradient(to bottom right,#8cf2ff,#00bf63'}}/>
            </div>
            <div className="flex justify-center items-center">
              <ButtonV1>Download Company Profile</ButtonV1>
            </div>

            <div className="w-full h-full flex justify-center items-center">
            <div className="h-full w-[3px] " style={{background:'linear-gradient(to bottom right,#cdffd8,#94b9ff'}}/>
            </div>
            
          </div>
        </div>
      </div>

      <div className="h-[100vh] relative" >
        <div className="absolute h-full w-full bg-black z-10"/>

        <div className="absolute h-full w-full opacity-10 z-20">
          <Image src='/secondBG.png' alt='secondBG' fill objectFit="cover"></Image>
        </div>

        <div className="absolute w-full h-full z-30 flex flex-col justify-center items-center py-6">
          {/* bigger screen */}
          <div className="w-full h-full flex justify-center items-start relative">
            <div className="relative max-w-[1010px] w-full h-full">
              {/* top */}
              <div className="absolute w-full h-[3px] bg-white top-0"/>

              {/* left */}
              <div className="w-full h-full absolute top-0 left-0 overflow-y-clip">
                <div className="w-[3px] h-[100px] bg-white"/>
                <div className="relative right-[500px]">
                  <HeaderV1>In-House Software Development</HeaderV1>
                </div>
                <div className="w-[3px] h-[100px] bg-white"/>
                <div className="relative right-[300px] max-w-[600px]">
                  <ParagraphV1>
                    we specialize in in-house software development for underwater subsea inspection. Our team of experts has years of experience in developing software solutions for businesses in the oil and gas and marine industries.
                  </ParagraphV1>
                </div>
                <div className="w-[3px] h-[100px] bg-white"/>
                <div className="relative right-[150px]">
                  <ButtonV1>DOWNLOAD PRODUCT BROCHURE</ButtonV1>
                </div>
                <div className="w-[3px] h-full bg-white"/>
              </div>

              {/* right */}
              <div className="w-full h-full absolute top-0 right-0 overflow-y-clip">
                
                {/* <div className="absolute top-0 right-0">
                  <div className="relative w-[3px] h-[100px] bg-red-900"/>
                  <div className="absolute right-6">
                    <HeaderV1>Extensive Yet Impressive Track Record </HeaderV1>
                  </div>
                </div>
                <div className="relative w-[3px] h-[100px] bg-red-900"/>
                <div className="relative left-[500px]">
                  <HeaderV1>Extensive Yet Impressive Track Record </HeaderV1>
                </div>
                <div className="relative w-[20px] h-[100px] bg-white"/>
                <div className="relative left-[700px] max-w-[600px]">
                  <ParagraphV1>
                  We've worked with clients across the region, each with their own requirements and goals.
                  </ParagraphV1>
                </div>
                <div className="relative w-[20px] h-[100px] bg-white"/>
                <div className="relative left-[900px]">
                  <ButtonV1>DOWNLOAD TRACK RECORD</ButtonV1>
                </div>
                <div className="w-[3px] h-full bg-white"/> */}


              </div>
             
              {/* bottom */}
              <div className="absolute w-full h-[3px] bg-white bottom-0"/>
            </div>
          </div>

          {/* mobile */}
          <div>

          </div>
        </div>
      </div>

      {/*3rd page*/}
      <div className="h-[100vh] relative" >
        <div className="absolute h-full w-full bg-custom-gradient flex flex-col "/>
          
        <div className="absolute h-full w-full opacity-10">
          <Image src='/thirdBG.png' alt='thirdBG' fill objectFit="cover"></Image>
        </div>
        <div className="absolute w-full h-full flex flex-col">
          <HeaderV1>Products</HeaderV1>


        </div>
        <div className="h-full flex flex-col lg:flex-row">
          <div className=" w-[600px] h-[600px] relative">
          <Image src= '/globe.svg' alt='globe-logo' fill objectFit="cover"/>

          </div>
        </div>
        

        
      </div>
        
          

        

        
      


    </main>

  );
}
