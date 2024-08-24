import React, { useEffect } from 'react'
import logo from "../assets/logo.png"
import {gsap} from "gsap";

function Main() {
    useEffect(()=>{

        const handleMousemove = (e) =>{
             const {clientX, clientY} = e
             gsap.to("#cursor",{
                x:clientX - 20/2,
                y:clientY - 20/2,
                duration: 0.2,
                delay:0,
                ease:"power4.out"
             })
        }


            window.addEventListener("mousemove", handleMousemove)
  
            return ()=>{
                window.removeEventListener("mousemove",handleMousemove)
            }

        },[])

  
  return (
    <div >
       
      
<div className="main relative h-screen w-full bg-zinc-800 flex flex-col justify-between pb-5  text-white">
<div id='cursor' className='fixed h-[20px] w-[20px] bg-white rounded-full pointer-events-none mix-blend-difference'></div>
       <div className="navbar w-full h-[10vh] bg-zinc-400 flex justify-between items-center px-[20px]">
        <div onMouseEnter={()=>gsap.to("#cursor", {scale:5, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})} className="logo flex items-center">
           <img className='w-[280px]' src={logo} alt="" />
        </div>

        <div onMouseEnter={()=>gsap.to("#cursor", {scale:4, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})} className="links flex gap-[20px] text-black font-bold ">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Service</a>
        </div>
       </div>
       <div className="center flex flex-col items-center justify-center px-[20px]">
        <h1  onMouseEnter={()=>gsap.to("#cursor", {scale:8, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})} className='font-bold text-[50px] block cursor-default'>Subscribe to our channel for more exciting videos and updates!</h1>
        <p onMouseEnter={()=>gsap.to("#cursor", {scale:4, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})}>Don't miss out—</p>
       </div>
       <div onMouseEnter={()=>gsap.to("#cursor", {scale:4, duration:0.3})} onMouseLeave={()=>gsap.to("#cursor", {scale:1, duration:0.3})} className="footer flex px-[100px] justify-between ">
       <h1>Join our community—subscribe now for more engaging videos and news!</h1>
       <h1>Be in the loop—hit subscribe and get notified about our latest videos!</h1>

       </div>

       </div>

    </div>
  )
}

export default Main
