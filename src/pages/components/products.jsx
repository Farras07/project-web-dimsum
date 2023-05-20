import React from 'react'
import { useEffect } from 'react'
import styles from '../../styles/products.module.css'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap';

export default function Products() {

  return (
    <div>
      <h2 className={`${styles.h2}`}>Products</h2>
      <Carousel className={styles.productsContainer}>
        <Carousel.Item active >
            <div className="slide d-flex justify-content-around">
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/gyoza.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Gyoza</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/ikan1.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Ikan</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/ayamSayur.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Ayam Sayur</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item active>
            <div className="slide d-flex justify-content-around">
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/beef.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>beef</h3>
                                <h3 className={`${styles.price}`}>Rp. 1200</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/sulong.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Sulong</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/crabStik.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Crab Stik</h3>
                                <h3 className={`${styles.price}`}>Rp. 1200</h3>
                            </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item active>
            <div className="slide d-flex justify-content-around">
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/ekado.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Ekado</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/jamur.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Jamur</h3>
                                <h3 className={`${styles.price}`}>Rp. 1200</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/kulitTahu.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Kulit Tahu</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item active>
            <div className="slide d-flex justify-content-around">
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/Kwetiek.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Kwetiek</h3>
                                <h3 className={`${styles.price}`}>Rp. 2000</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/sosis.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Sosis</h3>
                                <h3 className={`${styles.price}`}>Rp. 1200</h3>
                            </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
                        <Image src="./assets/udang.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
                            <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
                                <h3 className={`${styles.h3}`}>Udang</h3>
                                <h3 className={`${styles.price}`}>Rp. 1200</h3>
                            </div>
                    </div>
                </div>
            </div>
        </Carousel.Item>
        {/* Add more Carousel.Item components for additional slides */}
      </Carousel>
    </div>
  )
}
    // <div id="productsSection" className={`${styles.productsContainer} carousel slide`}>
    //     <h2>Products</h2>
    //     <div className="carousel-inner">
    //         <div className={`carousel-item active d-flex justify-content-around`}>
    //             <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
    //                 <Image src="./assets/ikan1.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
    //                 <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
    //                     <h3 className={`${styles.h3}`}>Sushi</h3>
    //                     <h3 className={`${styles.price}`}>Rp. 2000</h3>
    //                 </div>
    //             </div>
    //             <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
    //                 <Image src="./assets/sulong.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
    //                 <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
    //                     <h3 className={`${styles.h3}`}>Sulong</h3>
    //                     <h3 className={`${styles.price}`}>Rp. 2000</h3>
    //                 </div>
    //             </div>
    //             <div className={`${styles.productItem} d-flex flex-column align-items-center`}>
    //                 <Image src="./assets/gyoza.svg" className={`${styles.image}`} alt="dimsum" width={200} height={200}/>
    //                 <div className={`${styles.productDesc} d-flex flex-column align-items-center`}>
    //                     <h3 className={`${styles.h3}`}>Gyoza</h3>
    //                     <h3 className={`${styles.price}`}>Rp. 2000</h3>
    //                 </div>
    //             </div>
    //         </div>
            
    //     </div>
    //     <button className="carousel-control-prev" type="button" data-bs-target="#productsSection" data-bs-slide="prev">
    //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button class="carousel-control-next" type="button" data-bs-target="#productsSection" data-bs-slide="next">
    //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Next</span>
    //     </button>
    // </div>
