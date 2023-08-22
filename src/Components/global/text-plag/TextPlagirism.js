import React from 'react';
import { SecondHeading } from "../headings/second-heading/SecondHeading";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './textPlag.module.css';

export const TextPlagirism = ({data2, heading, para}) => {
   
  return (
    <>
        <section className={`${style.plag_sec}`}>
            <div className='custom-container custom_row'>
                <SecondHeading heading={heading} />
                <p className='text-sm color-grey fw-normal text-center'>{para}</p>

                <Row className={`${style.plag_row}`}>
                    {
                        data2.map(({img, title, desc}, i)=>{
                            return(
                                <Col className={`${style.plag_col} color-white text-center`} key={i.toString()}>
                                    <img src={img} alt="" />
                                    <h6>{title}</h6>
                                    <p>{desc}</p>
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
