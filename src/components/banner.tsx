'use client'
import Image from "next/image"
import { useRef } from "react"
function Banner() {
    const banner = useRef<HTMLDivElement>(null)
    return (
        <div className="bg-[#2A254B] px-2 py-1 flex gap-4 text-white items-center justify-between" ref={banner}>
            <div className="flex gap-2 items-center sm:w-full sm:justify-center">
            <div className="w-4 h-4 flex items-center "><Image src='/assets/Delivery2.png' alt="" width={14} height={11} className="max-w-none" /></div>
                 <p className="text-[14px]">Free delivery on all orders over £50 with code easter checkout</p>           
            </div>
            <div className="w-6 h-6 flex justify-center items-center">
            <Image className="cursor-pointer" onClick={()=>banner.current.style.display = 'none'} src='/assets/Close.png' alt="searchbar" width={12} height={12} />
            </div>
        </div>
    )
}
export default Banner