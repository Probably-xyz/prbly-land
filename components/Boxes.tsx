import React from 'react'
import Tilt from "react-parallax-tilt"


const Boxes = () => {
  return (
   <>
   <div className="max-w-screen-2xl mx-auto flex">
    <div className="mx-auto flex flex-row">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={100000}
        glareEnable={true}
        glarePosition={"all"}
        glareMaxOpacity={0.3}
        glareColor={"#5D31FF"}
        // scale={1.02}
        gyroscope={true}
    >
      <div className="inner-element">
        <div className="font-Main text-prbly-black">
          Zero Fees box
          </div>
        
      </div>
    </Tilt>

      <div className='flex flex-col'>

    <Tilt
        className="parallax-effect-glare-scale-2"
        perspective={4000000}
        glareEnable={true}
        glareMaxOpacity={0.3}
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
      glareMaxOpacity={0.3}
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
   </>
  )
}

export default Boxes