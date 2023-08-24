import React from 'react';
import data from "../../data/data.json";
import style from "./blog.module.css";
import { Link } from 'react-router-dom';

export const Blogs = () => {
    console.log("....", data)
  return (
    <>
        <section className='custom-container'>
            <div className={style.blog_row}>
                {
                    data.data.map(({title, catategry, blogImag, userImg, userName, designation, id}, i)=>{
                        return(
                            <div key={i.toString()} className={style.blog_col}>
                                <Link to={`/blog/${id}`}>
                                    <img src={blogImag} alt='' />
                                    <span>{catategry}</span>
                                    <h2>{title}</h2>
                                    <div className={style.use_row}>
                                        <div>
                                            <img src={userImg} alt="" />
                                        </div>
                                        <div>
                                            <h6>{userName}</h6>
                                            <p>{designation}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}
