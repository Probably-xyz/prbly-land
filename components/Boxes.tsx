import React, {useState} from 'react'
import Tilt from "react-parallax-tilt"



const Boxes = () => {

  const[index, setIndex]=useState(0);

  return (
   <>
   <div className="tabs">
      <div className="tabList">
            
            <input type="radio" name="tab" id="founders"/>  
            <label htmlFor="founders" className=" cursor-pointer font-Sub text-lg font-normal text-gray-600" onClick={() =>{setIndex(0)}}> Founders </label>
           
           
            <input type="radio" name="tab" id="investors"/>  
            <label htmlFor="investors" className=" cursor-pointer font-Sub text-lg font-normal text-gray-600" onClick={() =>{setIndex(1)}}> Investors </label> 
          
            
            <input type="radio" name="tab" id="other"/>  
            <label htmlFor="other" className=" cursor-pointer font-Sub text-lg font-normal text-gray-600" onClick={() =>{setIndex(2)}}> Other </label> 
           
      <div className="tab"></div>
      </div>
      <div className="tabContent" hidden={index != 0}>
      <div className="max-w-screen-2xl mx-auto flex pt-20">
    <div className="mx-auto flex flex-row">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={2000000000}
        glareEnable={true}
        glarePosition={"all"}
        glareMaxOpacity={0.1}
        glareColor={"#5D31FF"}
        // scale={1.02}
        gyroscope={true}
    >
      <div className="inner-element">
        <div className="font-Main text-prbly-black">
          TBD ONE
          </div>
        
      </div>
    </Tilt>

      <div className='flex flex-col'>

    <Tilt
        className="parallax-effect-glare-scale-2"
        perspective={4000000}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glarePosition={"all"}
        glareColor={"#DEF241"}
        // scale={1}
        gyroscope={true}
    >
        <div className="inner-element-2">
          <div className="font-Main text-prbly-black">TBD</div>
        </div>

    </Tilt>

    <Tilt
      className="parallax-effect-glare-scale-3"
      perspective={500000}
      glareEnable={true}
      glarePosition={"all"}
      glareMaxOpacity={0.1}
      glareColor={"#DEF241"}
      // scale={1}
      gyroscope={true}
    >
      <div className="inner-element-3">
        <div className="font-Main text-prbly-black">TBD</div>
      </div>

    </Tilt>

      </div>
    </div>
   </div>
      </div>
      <div className="tabContent" hidden={index != 1}>
      <div className="max-w-screen-2xl mx-auto flex pt-20">
    <div className="mx-auto flex flex-row">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={2000000000}
        glareEnable={true}
        glarePosition={"all"}
        glareMaxOpacity={0.1}
        glareColor={"#5D31FF"}
        // scale={1.02}
        gyroscope={true}
    >
      <div className="inner-element">
        <div className="font-Main text-prbly-black">
          TBD 2
          </div>
        
      </div>
    </Tilt>

      <div className='flex flex-col'>

    <Tilt
        className="parallax-effect-glare-scale-2"
        perspective={4000000}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glarePosition={"all"}
        glareColor={"#DEF241"}
        // scale={1}
        gyroscope={true}
    >
        <div className="inner-element-2">
          <div className="font-Main text-prbly-black">TBD</div>
        </div>

    </Tilt>

    <Tilt
      className="parallax-effect-glare-scale-3"
      perspective={500000}
      glareEnable={true}
      glarePosition={"all"}
      glareMaxOpacity={0.1}
      glareColor={"#DEF241"}
      // scale={1}
      gyroscope={true}
    >
      <div className="inner-element-3">
        <div className="font-Main text-prbly-black">TBD</div>
      </div>

    </Tilt>

      </div>
    </div>
   </div>
      </div>
      <div className="tabContent" hidden={index != 2}>
      <div className="max-w-screen-2xl mx-auto flex pt-20">
    <div className="mx-auto flex flex-row">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={2000000000}
        glareEnable={true}
        glarePosition={"all"}
        glareMaxOpacity={0.1}
        glareColor={"#5D31FF"}
        // scale={1.02}
        gyroscope={true}
    >
      <div className="inner-element">
        <div className="font-Main text-prbly-black">
          TBD 3
          </div>
        
      </div>
    </Tilt>

      <div className='flex flex-col'>

    <Tilt
        className="parallax-effect-glare-scale-2"
        perspective={4000000}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glarePosition={"all"}
        glareColor={"#DEF241"}
        // scale={1}
        gyroscope={true}
    >
        <div className="inner-element-2">
          <div className="font-Main text-prbly-black">TBD</div>
        </div>

    </Tilt>

    <Tilt
      className="parallax-effect-glare-scale-3"
      perspective={500000}
      glareEnable={true}
      glarePosition={"all"}
      glareMaxOpacity={0.1}
      glareColor={"#DEF241"}
      // scale={1}
      gyroscope={true}
    >
      <div className="inner-element-3">
        <div className="font-Main text-prbly-black">TBD</div>
      </div>

    </Tilt>

      </div>
    </div>
   </div>
      </div>
   </div>
   </>
  )
}

export default Boxes