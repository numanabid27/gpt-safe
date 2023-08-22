import React from 'react';
import { SecondHeading } from "../../global/headings/second-heading/SecondHeading";
import style from "./number.module.css";
import { Row, Col } from 'react-bootstrap';


export const Numbers = ({heading, para, data}) => {
  return (
    <>
        <section className={style.number_sec}>
            <div className='custom-container custom_row'>
                <div className={style.number_text}>
                    <SecondHeading heading={heading} />
                    <p>{para}</p>
                </div>
                <Row className={style.number_row}>
                    {
                        data.map((items, i)=>{
                            return(
                                <Col key={i.toString()} className={style.number_col}>
                                    <h6>{items.title}</h6>
                                    <p>{items.desc}</p>
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
