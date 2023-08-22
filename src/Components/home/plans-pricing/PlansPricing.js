import React from 'react';
import { SecondHeading } from '../../global/headings/second-heading/SecondHeading';
import style from "./pricing.module.css";
import { Row, Col } from 'react-bootstrap';

export const PlansPricing = () => {
    const data = [
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
        {
            title : "Starter",
            desc : "Ideal for individuals who need quick access to basic features.",
            price : "$9.99",
            list:[
                {
                    titleList : "AI Detection",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "10.000 words",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Rewrite AI Text To Human Text",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Sharing",
                    img : "./images/tick.png",
                },
                {
                    titleList : "Unlimited Projects",
                    img : "./images/cross.png",
                },
                {
                    titleList : "Create teams to collaborate on Projects",
                    img : "./images/cross.png",
                }
            ]
        },
    ]
  return (
    <>
        <section className={style.pricing_sec}>
            <div className='custom-container custom_row'>
                <div className={style.pricing_col}>
                    <SecondHeading heading="Plans and Pricings" />
                    <p>Our pricing model reflects flexibility and value. Tailored plans cater to diverse needs, ensuring access to accurate AI plagiarism detection without compromising affordability. Choose a plan that suits you best.</p>
                </div>
                <Row className={style.pricing_row}>
                    {
                        data.map(({title, desc, price, list})=>{
                            return(
                                <Col className={style.price_col}>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                    <h3>{price} <span>/Month</span></h3>
                                    <a href='#'>Get Started Now</a>
                                    <ul>
                                        {
                                            list.map(({titleList, img})=>{
                                                return(
                                                    <li>
                                                        <img src={img} alt="" />
                                                        {titleList}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
           
        </section>
    </>
  )
}
