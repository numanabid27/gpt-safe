import React from 'react'
import { SecondHeading } from '../headings/second-heading/SecondHeading';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import style from "./customer.module.css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const OurCustomer = () => {
    const slide = [
        {
            img: "./images/testimonial.png",
            para: "Absolutely amazed by the AI-generated text detection accuracy. It's like having a digital truth detector. This system is a game-changer for content integrity!",
            clientname: "Candice Wu",
            des: "Product Manager, Sisyphus"
        },
        {
            img: "./images/testimonial.png",
            para: "Absolutely amazed by the AI-generated text detection accuracy. It's like having a digital truth detector. This system is a game-changer for content integrity!",
            clientname: "Candice Wu",
            des: "Product Manager, Sisyphus"
        },
        {
            img: "./images/testimonial.png",
            para: "Absolutely amazed by the AI-generated text detection accuracy. It's like having a digital truth detector. This system is a game-changer for content integrity!",
            clientname: "Candice Wu",
            des: "Product Manager, Sisyphus"
        },
    ]
    return (
        <>
            <section>
                <div className='custom-container custom_row'>
                   <div className={style.customer_text}>
                        <SecondHeading heading="Our Customers Speak Volumes." />
                        <p> Their testimonials reflect exceptional satisfaction, affirming our AI solutions' reliability, accuracy, and transformative impact.</p>

                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true} modules={[Navigation]}

                        className="mySwiper"
                    >

                        {
                            slide.map(({ img, para, clientname, des }, i) => {
                                return (
                                    <SwiperSlide>
                                        <div className={style.testimonial_col}>
                                            <img src={img} alt='' />
                                            <p>{para}</p>
                                            <h6>{clientname}</h6>
                                            <p>{des}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                    </Swiper>
                </div>

            </section>
        </>
    )
}
