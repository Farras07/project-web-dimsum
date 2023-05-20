import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/navBar.module.css'
export default function navBar() {
  return (
    <header>
        <nav className={`${styles.navContainer} d-flex  align-items-center justify-content-between`}>
          <div className={`${styles.logoSection} d-flex align-items-center justify-content-center`}>
              <Image src='./assets/Logo.svg' alt='Logo' width={120} height={80}></Image>
          </div>
          <div className={`${styles.listMenuSection} d-flex align-items-end`}>
            <ul className={`${styles.listMenuCon} d-flex align-items-center justify-content-around`}>
              <li><Link href='#home'>Home</Link></li> 
              <li><Link href='#productsSection'>Product</Link></li> 
              <li><Link href='#store'>Store & Contact</Link></li> 
            </ul>
          </div>
        </nav>
    </header>
  )
}
