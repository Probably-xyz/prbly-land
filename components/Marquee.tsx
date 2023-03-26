import React from 'react'
import Image from "next/image"


const MarqueeSec = () => {
    return (
        <>
            <div className="marquee-wrapper">
             <div className="marquee-content scroll">
                <h1 className="text-base font-Sub text-gray-500">Startups</h1>
                {/* <Image src="/2.png" width={40} height={40}/> */}
                <h1 className="text-base font-Sub text-gray-500">Communities</h1>
                <h1 className="text-base font-Sub text-gray-500">Investors</h1>
                <h1 className="text-base font-Sub text-gray-500">Founders</h1>
             </div>
             <div className="marquee-content scroll">
                <h1 className="text-base font-Sub text-gray-500">Startups</h1>
                <h1 className="text-base font-Sub text-gray-500">Communities</h1>
                <h1 className="text-base font-Sub text-gray-500">Investors</h1>
                <h1 className="text-base font-Sub text-gray-500">Founders</h1>
             </div>
            </div>
        </>
    )
}

export default MarqueeSec