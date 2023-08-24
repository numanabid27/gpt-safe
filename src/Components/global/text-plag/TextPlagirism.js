import React from 'react';
import { SecondHeading } from "../headings/second-heading/SecondHeading";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './textPlag.module.css';

export const TextPlagirism = ({data2, heading, para, styling, styling2}) => {
   
  return (
    <>
        <section className={`${style.plag_sec} ${styling && style.addClass}`}>
            <div className='custom-container custom_row'>
                <div className={styling && style.Plag_text}>
                    <SecondHeading heading={heading} />
                    <p className='text-sm color-grey fw-normal text-center'>{para}</p>
                </div>

                <Row className={`${style.plag_row} ${styling2 && style.plag_row2}`}>
                    {
                        data2.map(({img, title, desc}, i)=>{
                            return(
                                <Col className={`${ styling2 ? style.plag_col2 : style.plag_col} color-white text-center`} key={i.toString()}>
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
