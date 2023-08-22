import React from 'react';
import style from "./footer.module.css";
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer className={style.footer_bg}>
                <div className='custom-container custom_row'>
                    <Row className={style.footer_row}>
                        <Col className={style.footer_logo_col}>
                            <img src='./images/footer-logo.png' alt="" />
                        </Col>
                        <Col>
                            <ul className={style.footer_list}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="#">Blogs</Link></li>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <ul className={style.social_list}>
                                <li><Link to="#"><img src="./images/fb.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="./images/insta.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="./images/twitter.png" alt="" /></Link></li>
                                <li><Link to="#"><img src="./images/linkdin.png" alt="" /></Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <div className={style.footer_bottom}>
                        <a href='#'>2023 GptSafe. All right reserved.</a>
                        <a href='#'>Privacy Policy</a>
                        <a href='#'>Terms of Service</a>
                        <a href='#'>Cookies Settings</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
