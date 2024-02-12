import React, { useEffect } from "react";
import "./style8.css"
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos";
export const Page6 = React.memo(() => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="div1" >
                    <h1 data-aos="fade-right">Ինտերնետ Սակագնային Փաթեթներ Premium</h1>
                    <Link data-aos="fade-left" className="link11" to={"/"}>Գլխավոր</Link>
                </div>
            </div>
            <div className="div5">
                <div className="container-fluid">
                    <div className="div5_1">
                        <div className="div5_11">
                            <img src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" />
                        </div>
                        <div className="div5_22">
                            <a href="">Գլխավոր</a>
                            <a href="">Ծառայություններ</a>
                            <a href="">Տան համար</a>
                            <a><Link to={"/biznes"} style={{ textDecoration: "none" }}>Բիզնեսի համար</Link></a>
                            <a><Link to={"/report"} style={{ textDecoration: "none" }}>Հաշվետվություններ</Link></a>
                        </div>
                        <div className="div5_33">
                            <h1>namesurname@gmail.com</h1>
                            <a style={{ color: "blue" }}><i className="fa fa-phone"></i>+374 94 551294</a>
                            <a style={{ color: "blue" }}> <i className="fa fa-phone"></i>+374 99 551294</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})