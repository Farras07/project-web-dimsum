import React from 'react'
import styles from '../../styles/jumbotron.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function jumbotron() {
  return (
    <section id='home' className={`${styles.jumbotron}`}>
        <div className={`${styles.leftSide} d-flex justify-content-center align-items-center`}>
            <div className={`${styles.contentLeft} `}>
                <div className={`${styles.tagline}`}>
                    <h1 className={`${styles.h1}`}>Enak Gak Harus Mahal!</h1>
                </div>
                <h3 className={`${styles.shopButton}`}><Link href='#store'>Shop Now!</Link></h3>
            </div>
        </div>
        <div className={`${styles.rightSide}`}>
            <div className={`${styles.rightContent}`}>
                <h3 className={`${styles.new}`}><strong>NEW!</strong></h3>
                <div className={`${styles.conPic}`}>
                    <Image className={`${styles.image}`} src='./assets/ikan1.svg' alt='dimsum Ikan' width={700} height={700}></Image>
                </div>
                <div className={`${styles.desc} d-flex flex-column justify-content-evenly align-items-center`}>
                    <h3>IKAN</h3>
                    <div className={`${styles.price} d-flex align-items-center`}>
                        <span>Only </span> 
                        <h3>Rp.2000</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
