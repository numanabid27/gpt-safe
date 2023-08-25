import React from 'react';
import data from "../../data/data.json";
import style from "./blog.module.css";
import { Link } from 'react-router-dom';

export const Blogs = () => {
    
  return (
    <>
        <section className='custom-container'>
            <div className={style.blog_row}>
                {
                    data.data?.map((item)=>{
                        return(
                            <div key={item.id} className={style.blog_col}>
                                <Link to={`/blog/${item.id}`}>
                                    <img src={item.blogImag} alt='' />
                                    <span>{item.catategry}</span>
                                    <h2>{item.title}</h2>
                                    <div className={style.use_row}>
                                        <div>
                                            <img src={item.userImg} alt="" />
                                        </div>
                                        <div>
                                            <h6>{item.userName}</h6>
                                            <p>{item.designation}</p>
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
