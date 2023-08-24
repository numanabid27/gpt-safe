import React from 'react';
import { FirstHeading } from "../../global/headings/first-heading/FirstHeading";
import style from "./banner.module.css";

export const Banner = () => {
  return (
    <>
        <section>
            <div className='custom-container'>
                <div className={style.banner_heading}>
                    <p>Blogs</p>
                    <FirstHeading heading={<>News ,<span className='color-green'>Tips and Resources</span> about GPTSAFE</>} />
                </div>
                <div className={style.banner_search}>
                    <img src='./images/search.png' alt='' />
                    <input type='search' name='search' placeholder='Search for articles'/>
                </div>
            </div>


        </section>
    </>
  )
}
