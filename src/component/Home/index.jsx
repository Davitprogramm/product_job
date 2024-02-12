import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style1.css"
import Aos from "aos";
import "aos/dist/aos.css"

export const Home = React.memo(() => {
    const [pages, SetPages] = useState([
        { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NB2MXbjbU5COJZ3mjnBcGw3vIBazYzjkAg&usqp=CAU" },
        { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSFwSUv6Kl4GtT-s4DmqkVSTal42a1X14RA&usqp=CAU" },
        { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwu3glydvhmUmhz1eygbLaVozP9mKth39tw&usqp=CAU" },
    ])
    const [page, SetPage] = useState([
        { id: 1, name: "Econom", price: "5000", date: "դր / ամսական", mbv: "Մինչև 30մբ/վ", free: "Անվճար wifi միացում", setting: "Անվճար սպասարկում", page: "page3" },
        { id: 2, name: "Classic", price: "7000", date: "դր / ամսական", mbv: "Մինչև 30մբ/վ", free: "Անվճար wifi միացում", tv: "TV փաթեթ", setting: "Անվճար սպասարկում", page: "page4" },
        { id: 3, name: "Pro", price: "8000", date: "դր / ամսական", mbv: "Մինչև 40մբ/վ", free: "Անվճար wifi միացում", setting: "Անվճար սպասարկում", page: "page5" },
        { id: 4, name: "Premium", price: "10000", date: "դր / ամսական", mbv: "Մինչև 40մբ/վ", free: "Անվճար wifi միացում", tv: "TV փաթեթ", setting: "Անվճար սպասարկում", page: "page6" }
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentDiv, setCurrentDiv] = useState(0)
    useEffect(() => {
        const diver = setTimeout(() => {
            if (currentDiv === 2) {
                setCurrentDiv(1)
            } else {
                setCurrentDiv(currentDiv + 1)
            }
        }, 3000)
        return () => clearTimeout(diver)
    }, [currentDiv])

    



    const nextPages = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pages.length);
    };

    const prevPages = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);

    };
    const nextPagess = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % page.length);
    };

    const prevPagess = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + page.length) % page.length);

    };
    

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex === 3) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentIndex])
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex === 2) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }, 5000)
        return () => clearTimeout(timer)
    }, [currentIndex])
    const currentItem = pages.find((e) => e.id === currentIndex + 1)
    const currentItem1 = page.find((e) => e.id === currentIndex + 1)

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div>
            <div className="global container-fluid p-3">
                <div id="menu">
                    <div className="container-fluid  p-5 bg-white navbar ">
                        <img src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" />
                        <a className="link1" href="#global">Գլխավոր</a>
                        <a className="link1" href="#div2">Ծառայություններ</a>
                        <div className="dropdown">
                            <a type="button" className="link22" href="#div4_div4"  >
                                Տան համար
                            </a>
                        </div>

                        <Link className="link1" to={"/biznes"}>Բիզնեսի համար</Link>
                        <Link className="link1" to={"/report"}>Հաշվետվություններ</Link>
                        <div className="menu_div2">
                            <i className="fa fa-map-marker"></i>
                            <Link className="link2" data-bs-toggle="dropdown">Մեր Հասանելիությունը</Link>
                            <ul className="dropdown-menu">
                                <ul className="menu33">

                                    <li>

                                        <a className="sub-button2">Նոր Գեղի</a>
                                        <div className="submenu3">
                                            <a className="sub-button3">Հ․ Մաթևոսյան փող</a>
                                            <a className="sub-button3">Ա․ Բարսեղյան փող</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 1 նրբ․</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 2 նրբ․</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 3 նրբ․</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 4 նրբ․</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 5 նրբ․</a>
                                            <a className="sub-button3">Ց․ Խաչատրյան փող 6 նրբ․</a>
                                            <a className="sub-button3">Մ․ Մաշտոց փող</a>
                                            <a className="sub-button3">Ա․ Բաբաջանյան 1փկղ 1շ</a>
                                            <a className="sub-button3">Ա․ Բաբաջանյան 1փկղ 2շ</a>
                                            <a className="sub-button3">Ա․ Բաբաջանյան փող</a>
                                            <a className="sub-button3">Աղբյուրակի փող</a>
                                            <a className="sub-button3">Ֆ․ Տևոսյան փող 1շ</a>
                                            <a className="sub-button3">Ֆ․ Տևոսյան փող 2շ</a>
                                            <a className="sub-button3">Ֆ․ Տևոսյան փող</a>
                                            <a className="sub-button3">Ուսանողական փող 8շ</a>
                                            <a className="sub-button3">Ուսանողական փող 14շ</a>
                                            <a className="sub-button3">Ուսանողական փող 18շ</a>
                                            <a className="sub-button3">Ուսանողական փող</a>
                                            <a className="sub-button3">Արցախի փող</a>
                                            <a className="sub-button3">Շոիշի փող</a>
                                            <a className="sub-button3">Հ․ Ներսիսյան փող</a>
                                            <a className="sub-button3">Մ․ Մկրտչյան փող</a>
                                            <a className="sub-button3">Ա․ Խանջյան փող</a>
                                            <a className="sub-button3">Խ․ Աբովյան փող</a>
                                            <a className="sub-button3">Մ․ Բաղրամյան փող</a>
                                            <a className="sub-button3">Եղվարդի խճղ</a>
                                            <a className="sub-button3">Պ․ Սևակի փող</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="menu33">
                                    <li>
                                        <a className="sub-button2">Նոր Հաճն</a>

                                        <div className="submenu3">
                                            <a className="sub-button3">Սպորտային փող 3շ</a>
                                            <a className="sub-button3">Իսահակյան փող 3շ</a>
                                            <a className="sub-button3">Իսահակյան փող 5շ</a>
                                            <a className="sub-button3">Իսահակյան փող 7շ</a>
                                            <a className="sub-button3">Չարենցի փող 1շ</a>
                                            <a className="sub-button3">Չարենցի փող 3շ</a>
                                            <a className="sub-button3">Չարենցի փող 5շ</a>
                                            <a className="sub-button3">Չարենցի փող 17շ</a>
                                            <a className="sub-button3">Չարենցի փող 22շ</a>
                                            <a className="sub-button3">Չարենցի փող 33շ</a>
                                            <a className="sub-button3">Տոռոզյան փող 10շ</a>
                                            <a className="sub-button3">Տոռոզյան փող 12շ</a>
                                            <a className="sub-button3">Տոռոզյան փող 27շ</a>
                                            <a className="sub-button3">Տոռոզյան փող 6շ</a>
                                            <a className="sub-button3">Պ․ Սևակի ????? փող</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="menu33">
                                    <li>
                                        <a className="sub-button2">Նոր Արտամետ</a>
                                        <div className="submenu3">
                                            <a className="sub-button3">0 փող</a>
                                            <a className="sub-button3">1 փող</a>
                                            <a className="sub-button3">2 փող</a>
                                            <a className="sub-button3">3 փող</a>
                                            <a className="sub-button3">4 փող</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="menu33">
                                    <li>
                                        <a className="sub-button2" >Եղվարդ</a>
                                        <div className="submenu3">
                                            <a className="sub-button3">Անտառտնտեսություն 1 փող</a>
                                            <a className="sub-button3">Անտառտնտեսություն 2 փող</a>
                                        </div>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                        <div className="menu_div1" style={{ display: "flex", flexDirection: "column", color: "blue" }}>
                            <a><i className="fa fa-phone"></i>+374 91 555118</a>
                            <a><i className="fa fa-phone"></i>+374 43 232377</a>
                        </div>



                    </div>

                </div>
                <div className="menu2">
                    <div className="container-fluid p-3  pe-2 bg-white">

                        <div id="myLinks">
                            <img className="active" src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" />
                            <ul>
                                <nav>

                                    <input type="checkbox" id="check" defaultChecked={true} />
                                    <label for="check">
                                        <i className="fa fa-times" id="btn" ></i>
                                        <i className="fa fa-bars" id="cancel"></i>
                                    </label>

                                    <ul>
                                        <div className="submenu">
                                            <li> <Link className="sub-button" to={"/biznes"}>Բիզնեսի համար</Link></li>
                                            <li><Link className="sub-button" to={"/report"}>Հաշվետվություններ</Link></li>
                                            <li><Link to={"/address"} className="sub-button">Մեր Հասանելիությունը</Link></li>
                                        </div>

                                    </ul>

                                </nav>


                            </ul>


                        </div>


                    </div>
                </div>

            </div>
            <div className="container-fluid p-0">
                <div className="title">
                    <h1>Մատչելի Առաջարկ</h1>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="titles" >
                    <div className="show" data-aos="fade-right">
                        <div className="container-fluid p-3">
                            <h1 className="show_h1" >Նոր Բաժանորդների համար`Karo-ISP-ն առաջարկում է գերարագ և մատչելի Ինտերնետ ծառայություն և որակյալ թվային հեռուստատեսություն:</h1>
                            <a href="#div3" id="btn1">Իմանալ ավելին</a>
                        </div>

                    </div>
                    <div className="carousel" data-aos="fade-left">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="container-fluid  ">
                                <div className="carousel_div1">
                                    <button onClick={() => prevPages()} class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <div >{currentItem && <img className="slider-img" style={{ borderRadius: "10px" }} src={currentItem.img} width={400} height={250} />}</div>
                                    <button onClick={() => nextPages()} class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div >

            <div id="div1">
                <div className="container-fluid p-0">
                    <div id="div2">
                        <div className="div2_div1">
                            <img className="image11" src="https://cdn-icons-png.flaticon.com/128/1734/1734180.png" />
                            <h1 className="div2_h1">Որակյալ թվային հեռուստա- տեսություն </h1>

                        </div>
                        <div className="div2_div2">
                            <img className="image11" src="https://cdn-icons-png.flaticon.com/128/3904/3904299.png" />
                            <h1 className="div2_h1">Գերարագ կայուն ինտերնետ </h1>

                        </div>
                        <div className="div2_div3">
                            <img className="image11" src="https://cdn-icons-png.flaticon.com/128/4415/4415428.png" />
                            <h1 className="div2_h1">Որակյալ տեխնիկական սպասարկում</h1>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid p-0">
                <div id="div3">
                    <div className="div3_div1" >
                        <h1>Առաջարկվող Սակագներ</h1>
                        <p>Մենք առաջարկում ենք միանալ մեր Single և Standart սակագնային փաթեթներից ցանկացած մեկին որի դեպքում կստանաք մինչև 100մբ/վ․ գերարագ ինտերնետ և 100 որակյալ թվային հեռուստաալիքներ,ներառյալ անվճար wifi միացում և անվճար տեխնիկական սպասարկում։</p>
                    </div>

                    <div className="container-fluid p-0">
                        <div className="div3_div2">
                            <div className="gl_product1" data-aos="fade-right">
                                <div className="product1" >
                                    <div className="div4">
                                        <div className="div4_1">
                                            <h1>Ակցիա</h1>
                                        </div>
                                        <div className="div4_2">
                                            <h1>Single</h1>
                                        </div>
                                        <div className="div4_3">
                                            <h1>4000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_4">
                                            <h3>Մինչև 100մբ/վ</h3>
                                        </div>
                                        <div className="div4_5">
                                            <div className="div4_5_1">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_2">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                        </div>
                                        <div className="div4_6">
                                            <Link to={"/page1"}>
                                                <button className="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text1">
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gl_product2" data-aos="fade-left">
                                <div className="product2" >
                                    <div className="div4">
                                        <div className="div4_1">
                                            <h1>Ակցիա</h1>
                                        </div>
                                        <div className="div4_2">
                                            <h1>Standart</h1>
                                        </div>
                                        <div className="div4_3">
                                            <h1>5000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_4">
                                            <h3>Մինչև 100մբ/վ</h3>
                                        </div>
                                        <div className="div4_5">
                                            <div className="div4_5_1">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_2">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                            <div className="div4_5_3">
                                                <i className="fa fa-tv"></i>
                                                <h4>TV Փաթեթ</h4>
                                            </div>
                                        </div>
                                        <div className="div4_6" >
                                            <Link to={"/page2"}>
                                                <button className="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text1" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="div3_div3">
                            <div className="gl_product1" data-aos="zoom-in">
                                <div className="product1" >
                                    <div className="div4">
                                        <div className="div4_1">
                                            <h1>Ակցիա</h1>
                                        </div>
                                        <div className="div4_2">
                                            <h1>Single</h1>
                                        </div>
                                        <div className="div4_3">
                                            <h1>4000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_4">
                                            <h3>Մինչև 100մբ/վ</h3>
                                        </div>
                                        <div className="div4_5">
                                            <div className="div4_5_1">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_2">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                        </div>
                                        <div className="div4_6">
                                            <Link to={"/page1"}>
                                                <button className="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text1">
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gl_product2" data-aos="zoom-in">
                                <div className="product2" >
                                    <div className="div4">
                                        <div className="div4_1">
                                            <h1>Ակցիա</h1>
                                        </div>
                                        <div className="div4_2">
                                            <h1>Single</h1>
                                        </div>
                                        <div className="div4_3">
                                            <h1>4000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_4">
                                            <h3>Մինչև 100մբ/վ</h3>
                                        </div>
                                        <div className="div4_5">
                                            <div className="div4_5_1">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_2">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                            <div className="div4_5_3">
                                                <i className="fa fa-tv"></i>
                                                <h4>TV Փաթեթ</h4>
                                            </div>
                                        </div>
                                        <div className="div4_6" >
                                            <Link to={"/page2"}>
                                                <button className="button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text1" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="div4_div4">
                <div className="container-fluid">
                    <div className="title1">
                        <h1 >Սակագնային Փաթեթներ</h1>
                    </div>
                </div>
                <div className="div_global">
                    <div className="gl-product3" data-aos="fade-top">
                        <div className="container-fluid" >
                            <div className="global_divs">
                                <div className="product3" >
                                    <div className="div4">
                                        <div className="div4_11">
                                            <h1>Econom</h1>
                                        </div>
                                        <div className="div4_33">
                                            <h1>5000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_44">
                                            <h3>Մինչև 30մբ/վ</h3>
                                        </div>
                                        <div className="div4_55">
                                            <div className="div4_5_11">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_22">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                        </div>
                                        <div className="div4_66" >
                                            <Link to={"/page3"}>
                                                <button className="button1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text11" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="product3" >
                                    <div className="div4">
                                        <div className="div4_11">
                                            <h1>Classic</h1>
                                        </div>
                                        <div className="div4_33">
                                            <h1>7000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_44">
                                            <h3>Մինչև 30մբ/վ</h3>
                                        </div>
                                        <div className="div4_55">
                                            <div className="div4_5_11">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_22">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                            <div className="div4_5_33">
                                                <i className="fa fa-tv"></i>
                                                <h4>TV Փաթեթ</h4>
                                            </div>
                                        </div>
                                        <div className="div4_66" >
                                            <Link to={"/page4"}>
                                                <button className="button1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text11" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="product3" >
                                    <div className="div4">
                                        <div className="div4_11">
                                            <h1>Pro</h1>
                                        </div>
                                        <div className="div4_33">
                                            <h1>8000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_44">
                                            <h3>Մինչև 40մբ/վ</h3>
                                        </div>
                                        <div className="div4_55">
                                            <div className="div4_5_11">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_22">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                        </div>
                                        <div className="div4_66" >
                                            <Link to={"/page5"}>
                                                <button className="button1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text11" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="product3" >
                                    <div className="div4">
                                        <div className="div4_11">
                                            <h1>Premium</h1>
                                        </div>
                                        <div className="div4_33">
                                            <h1>10000</h1>
                                            <p>դր / ամսական</p>
                                        </div>
                                        <div className="div4_44">
                                            <h3>Մինչև 40մբ/վ</h3>
                                        </div>
                                        <div className="div4_55">
                                            <div className="div4_5_11">
                                                <i className="fa fa-wifi"></i>
                                                <h4>Անվճար wifi միացում</h4>
                                            </div>
                                            <div className="div4_5_22">
                                                <i className="fa fa-wrench"></i>
                                                <h4>Անվճար սպասարկում</h4>
                                            </div>
                                            <div className="div4_5_33">
                                                <i className="fa fa-tv"></i>
                                                <h4>TV Փաթեթ</h4>
                                            </div>
                                        </div>
                                        <div className="div4_66" >
                                            <Link to={"/page6"}>
                                                <button className="button1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text11" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="global_divs1">
                                <button onClick={() => prevPagess()} class="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <div className="product3" style={{ margin: "0" }}>
                                    <div className="div4">
                                        <div className="div4_11">
                                            <h1>{currentItem1.name}</h1>
                                        </div>
                                        <div className="div4_33">
                                            <h1>{currentItem1.price}</h1>
                                            <p>{currentItem1.date}</p>
                                        </div>
                                        <div className="div4_44">
                                            <h3>{currentItem1.mbv}</h3>
                                        </div>
                                        <div className="div4_55">
                                            <div className="div4_5_11">
                                                <i className="fa fa-wifi"></i>
                                                <h4>{currentItem1.free}</h4>
                                            </div>
                                            <div className="div4_5_22">
                                                <i className="fa fa-wrench"></i>
                                                <h4>{currentItem1.setting}</h4>
                                            </div>
                                            <div className="div4_5_33">
                                                {currentItem1.tv
                                                    ?
                                                    <i className="fa fa-tv"></i>
                                                    :
                                                    <p></p>


                                                }
                                                <h4>{currentItem1.tv}</h4>
                                            </div>
                                        </div>
                                        <div className="div4_66" >
                                            <Link to={currentItem1.page}>
                                                <button className="button1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                                    </svg>
                                                    <div className="text11" >
                                                        <h6>Իմանալ ավելին</h6>
                                                    </div>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => nextPagess()} class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="div5">
                <div className="container-fluid">
                    <div className="div5_1">
                        <div className="div5_11">
                            <img src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" />
                        </div>
                        <div className="div5_22">
                            <a href="#menu">Գլխավոր</a>
                            <a href="#div2">Ծառայություններ</a>
                            <a href="#div4_div4">Տան համար</a>
                            <a><Link to={"/biznes"} style={{ textDecoration: "none" }}>Բիզնեսի համար</Link></a>
                            <a><Link to={"/report"} style={{ textDecoration: "none" }}>Հաշվետվություններ</Link></a>
                        </div>
                        <div className="div5_33">
                            <h1>davittorosyan0@gmail.com</h1>
                            <a style={{color:"blue"}}><i className="fa fa-phone"></i>+374 91 555118</a>
                            <a style={{color:"blue"}}> <i className="fa fa-phone"></i>+374 43 232377</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

})