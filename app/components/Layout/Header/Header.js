'use client';
import React,{useEffect,useState} from 'react'
import Styles from "./Header.module.css"
import Logo from "../../../../Assests/Images/theweedocLogo.png"
import { notificationicon,uploadicon } from '@/Assests/Svg/Commonsvg'
import Image from 'next/image'
function Header() {
  return (
    <div className={Styles.headerDiv}>
      <nav className={Styles.HeadermainDiv}>
        <div>
             <Image src={Logo} className={Styles.Logoclass}  alt='Theweedoc'/>
        </div>
        <div className={Styles.HeaderOptionsDiv}>
           <div>{uploadicon}</div>
           <div className={Styles.notifyDiv}>
            <div>{notificationicon}</div>
            <div className={Styles.notifitionCount}>2</div>
           </div>
           <div>
            <button className={Styles.Loginbtn}>Login</button> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header