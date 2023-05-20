import React from 'react'
import styles from '../../styles/store.module.css'
import Image from 'next/image'
export default function store() {
  return (
    <div id='store' className={`${styles.storeContainer}`}>
        <h2>Store & Contact</h2>
        <div className={`${styles.contentSection} d-flex`}>
            <div className={`${styles.left} d-flex align-items-center justify-content-between`}>
                <iframe className={`${styles.maps}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.200345893051!2d112.77888637339674!3d-7.3313825721024095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e5876f203777%3A0xc95c808e8119460a!2sDimsum%20The%20Legend!5e0!3m2!1sid!2sid!4v1684527664040!5m2!1sid!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={`${styles.right} d-flex flex-column align-items-center justify-content-center`}>
                    <div className={`${styles.address} d-flex flex-column align-items-center`}>
                        <h3 className={`${styles.h3}`}>Address</h3>
                        <h5>Jl.Rungkut Madya, Rungkut Kidul, 
    Kec. Rungkut,Surabaya , Jawa Timur 60294</h5>
                    </div>
                    <div className={`${styles.contact} d-flex flex-column align-items-center`}>
                        <h3 className={`${styles.h3}`}>Contact</h3>
                        <div className={`${styles.contactItem} d-flex`}>
                            <Image src='./assets/WaLogo.svg' alt='Whatsapp' width={30} height={30}></Image>
                            <p>082134880982</p>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}
