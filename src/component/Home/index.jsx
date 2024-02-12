import { Link } from "react-router-dom"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./style.css"
import React, { useEffect, useState } from "react"


export const Home = React.memo(() => {
    const [pages, SetPages] = useState([
        { id: 1, name: "Econom", price: "5000", date: "դր / ամսական", mbv: "Մինչև 30մբ/վ", free: "Անվճար wifi միացում", setting: "Անվճար սպասարկում", page: "page3" },
        { id: 2, name: "Classic", price: "7000", date: "դր / ամսական", mbv: "Մինչև 30մբ/վ", free: "Անվճար wifi միացում", tv: "TV փաթեթ", setting: "Անվճար սպասարկում", page: "page4" },
        { id: 3, name: "Pro", price: "8000", date: "դր / ամսական", mbv: "Մինչև 40մբ/վ", free: "Անվճար wifi միացում", setting: "Անվճար սպասարկում", page: "page5" },
        { id: 4, name: "Premium", price: "10000", date: "դր / ամսական", mbv: "Մինչև 40մբ/վ", free: "Անվճար wifi միացում", tv: "TV փաթեթ", setting: "Անվճար սպասարկում", page: "page6" }
    ])
    const [currentIndex, setCurrentIndex] = useState(0);

    const [currentDiv, setCurrentDiv] = useState(0)
    useEffect(() => {
        const diver = setTimeout(() => {
            if (currentDiv === 3) {
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


    const currentItem = pages.find((e) => e.id === currentIndex + 1)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex === 3) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }, 4000)
        return () => clearTimeout(timer)
    }, [currentIndex])


    return (
        <div className="globals">
           
            <img id="global"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAZneuXHbvIYHRJeRou8Xc0FUoEnhqNfX64Tdtbu8uVEHBiV7pqc9qO2FEZA0VQd6tJM&usqp=CAU" />
            <div className="menu_1">
                <div className="menu_1_div1">
                    <img src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" />
                    <AnchorLink className="link1" href="#global">Գլխավոր</AnchorLink>
                    <AnchorLink className="link1" href="#div3_div1">Ծառայություններ</AnchorLink>
                    <ul className="menuu">
                        <li>
                            <Link className="link22">Տան համար</Link>
                            <div className="submenu">
                                <AnchorLink className="sub-button" style={{ width: "120px", textDecoration: "none" }} href="#div5">Ինտերնետ</AnchorLink>
                                <AnchorLink className="sub-button" style={{ width: "120px", textDecoration: "none" }} href="#div5">ինտերնետ + TV</AnchorLink>
                            </div>
                        </li>
                    </ul>

                    <Link className="link1" to={"/biznes"}>Բիզնեսի համար</Link>
                    <Link className="link1" to={"/report"}>Հաշվետվություններ</Link>

                </div>
                <div className="menu_1_div2">

                    <ul className="menuu1">
                        <nav>

                            <input type="checkbox" id="check" defaultChecked={true} />
                            <label for="check">
                                <i className="fa fa-times" id="btn" ></i>
                                <i className="fa fa-bars" id="cancel"></i>
                            </label>

                            <ul>
                                <div className="submenu">
                                    <li><AnchorLink className="sub-button" href="#global">Գլխավոր</AnchorLink></li>
                                    <li> <AnchorLink className="sub-button" href="#div6">Տան համար</AnchorLink></li>
                                    <li><AnchorLink className="sub-button" href="#div3_div1">Ծառայություններ</AnchorLink></li>
                                    <li> <Link className="sub-button" to={"/biznes"}>Բիզնեսի համար</Link></li>
                                    <li><Link className="sub-button" to={"/report"}>Հաշվետվություններ</Link></li>
                                    <li><Link to={"/address"} className="sub-button">Մեր Հասանելիությունը</Link></li>
                                </div>

                            </ul>

                        </nav>


                    </ul>

                    <div className="menu_1_div2_icon">

                        <ul className="menu22">
                            <li>
                                <i className="fa fa-map-marker" style={{ fontSize: "20px" }}></i>
                                <Link className="link2">Մեր Հասանելիությունը</Link>
                                <div className="submenu2">
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
                                </div>
                            </li>
                        </ul>


                    </div>


                    <div className="menu_1_div2_number">
                        <h4><i className="fa fa-phone" style={{ fontSize: "15px" }}></i>+374 94 551294</h4>
                        <h4><i className="fa fa-phone" style={{ fontSize: "15px" }}></i>+374 99 551294</h4>
                    </div>
                </div>
            </div>
            <div className="div111">
                <p className="div111_1"> Մատչելի<p className="div111_11"></p>Առաջարկ</p>

            </div>
            <div className="div3">

                <div className="div3_2">
                    <h1>Նոր Բաժանորդների համար`Karo-ISP-ն առաջարկում է գերարագ և մատչելի Ինտերնետ ծառայություն և որակյալ թվային հեռուստատեսություն:</h1>
                    <AnchorLink href="#div4" id="btn1">Իմանալ ավելին</AnchorLink>
                </div>
                <div className="div3_1">
                    <img className="image1" src="img/image4.jpeg" />

                </div>
                <div className="div3_4">
                    <img className="image2" src="img/sad.jpg" />

                </div>
                <div className="div3_3">
                    <img className="image3" src="img/download.jpeg" />

                </div>


            </div>
            <div id="div3_div1" >
                <img className="img111" src="img/image2.jpg" />

                <div className="div3_global">
                    <div className="div3_div1_d1">
                        <img className="image11" src="https://cdn-icons-png.flaticon.com/128/1734/1734180.png" />
                        <h1>Որակյալ թվային հեռուստատեսություն </h1>
                        <h3></h3>
                    </div>
                    <div className="div3_div1_d2">
                        <img className="image11" src="https://cdn-icons-png.flaticon.com/128/3904/3904299.png" />
                        <h1>Գերարագ և Երկկողմանի կայուն ինտերնետ </h1>
                        <h3> </h3>
                    </div>
                    <div className="div3_div1_d3">
                        <img className="image11" src="https://cdn-icons-png.flaticon.com/128/4415/4415428.png" />
                        <h1>Որակյալ տեխնիկական սպասարկում</h1>
                        <h3></h3>
                    </div>
                </div>

            </div>
            <div id="div4">
                <div className="div4_global">
                    <h1 className="div4_global_h1">Առաջարկվող Սակագներ</h1>
                    <p className="div4_global_p">Մենք առաջարկում ենք միանալ մեր Single և Standart սակագնային փաթեթներից ցանկացած մեկին որի դեպքում կստանաք մինչև 100մբ/վ․ գերարագ ինտերնետ և 100 որակյալ թվային հեռուստաալիքներ,ներառյալ անվճար wifi միացում և անվճար տեխնիկական սպասարկում։</p>
                </div>
                <div className="div44">
                    <div className="div4_1">
                        <div className="div4_1_1">
                            <h1>Ակցիա</h1>
                        </div>
                        <hr />
                        <div className="div4_1_3">
                            <h1>Single</h1>
                        </div>
                        <div className="div4_1_4">
                            <h1>4000</h1>
                            <p>դր / ամսական</p>
                        </div>
                        <div className="div4_1_444">
                            <h3>Մինչև 100մբ/վ</h3>
                        </div>
                        <div className="div4_1_5">
                            <div className="div4_1_5_1">
                                <i className="fa fa-wifi"></i>
                                <h4>Անվճար wifi միացում</h4>
                            </div>
                            <div className="div4_1_5_2">
                                <i className="fa fa-wrench"></i>
                                <h4>Անվճար սպասարկում</h4>
                            </div>

                        </div>
                        <div className="div5_1_6">
                            <Link to={"/page1"}>
                                <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                    </svg>
                                    <div className="text1">
                                        Իմանալ ավելին
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="div4_2">
                        <div className="div4_1_1">
                            <h1>Ակցիա</h1>
                        </div>
                        <hr />
                        {/* <div className="div4_1_2">
                        </div> */}
                        <div className="div4_1_3">
                            <h1>Standart</h1>
                        </div>
                        <div className="div4_1_4">
                            <h1>6000</h1>
                            <p>դր / ամսական</p>
                        </div>
                        <div className="div4_1_444">
                            <h3>Մինչև 100մբ/վ</h3>
                        </div>
                        <div className="div4_1_5">
                            <div className="div4_1_5_1">
                                <i className="fa fa-wifi"></i>
                                <h4>Անվճար wifi միացում</h4>
                            </div>
                            <div className="div4_1_5_2">
                                <i className="fa fa-wrench"></i>
                                <h4>Անվճար սպասարկում</h4>
                            </div>
                            <div className="div4_1_5_3">
                                <i className="fa fa-tv"></i>
                                <h4>TV Փաթեթ</h4>
                            </div>
                        </div>
                        <div className="div5_1_6">
                            <Link to={"/page2"}>
                                <button className="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                    </svg>
                                    <div className="text1">
                                        Իմանալ ավելին
                                    </div>
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>

            <div className="div5_55">
                <h1 >Սակագնային Փաթեթներ</h1>
            </div>
            <div id="div5">

                <div className="div5_1">
                    <div className="div5_1_1">
                        <h1>{currentItem && <p>{currentItem.name}</p>}</h1>
                    </div>
                    <hr />
                    <div className="div5_1_2">
                        <h1>{currentItem && <p>{currentItem.price}</p>}</h1>
                        <p>{currentItem && <p>{currentItem.date}</p>}</p>
                    </div>
                    <div className="div5_1_3">
                        <h1>{currentItem && <p>{currentItem.mbv}</p>}</h1>
                    </div>
                    <div className="div5_1_4">
                        <i className="fa fa-wifi"></i>
                        <h4>{currentItem && <p>{currentItem.free}</p>}</h4>

                    </div>
                    <div className="div5_1_5">
                        <div className="prev">
                            <button className="btn_prev" onClick={() => prevPages()}><i className="	fa fa-chevron-left"></i></button>
                        </div>
                        <i className="fa fa-wrench"></i>
                        <h4>{currentItem && <p>{currentItem.setting}</p>}</h4>
                        <div className="next">
                            <button className="btn_next" onClick={() => nextPages()}><i className="	fa fa-chevron-right"></i></button>
                        </div>
                    </div>
                    <div className="div4_1_5_3">
                        {currentItem.tv
                            ?
                            <i className="fa fa-tv"></i>
                            :
                            <p></p>
                        }

                        <h4>{currentItem && <p>{currentItem.tv}</p>}</h4>
                    </div>

                    <div className="div5_1_6">
                        <Link to={currentItem.page}>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text1">
                                    Իմանալ ավելին
                                </div>
                            </button>
                        </Link>

                    </div>


                </div>



                <div className="div5_2">
                    <div className="div5_1_1">
                        <h1>Econom</h1>
                    </div>
                    <hr />
                    <div className="div5_1_2">
                        <h1>5000</h1>
                        <p>դր / ամսական</p>
                    </div>
                    <div className="div5_1_3">
                        <h1>Մինչև 30մբ/վ</h1>
                    </div>
                    <div className="div5_1_4">
                        <i className="fa fa-wifi"></i>
                        <h4>Անվճար wifi միացում</h4>
                    </div>
                    <div className="div5_1_5">
                        <i className="fa fa-wrench"></i>
                        <h4>Անվճար սպասարկում</h4>
                    </div>
                    <div className="div4_1_5_3">
                        <i className="fa fa-tv"></i>
                    </div>
                    <div className="div5_1_6">
                        <Link to={"/page3"}>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text1">
                                    Իմանալ ավելին
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="div5_2">
                    <div className="div5_1_1">
                        <h1>Classic</h1>
                    </div>
                    <hr />
                    <div className="div5_1_2">
                        <h1>7000</h1>
                        <p>դր / ամսական</p>
                    </div>
                    <div className="div5_1_3">
                        <h1>Մինչև 30մբ/վ</h1>
                    </div>
                    <div className="div5_1_4">
                        <i className="fa fa-wifi"></i>
                        <h4>Անվճար wifi միացում</h4>
                    </div>
                    <div className="div5_1_5">
                        <i className="fa fa-wrench"></i>
                        <h4>Անվճար սպասարկում</h4>
                    </div>
                    <div className="div4_1_5_3">
                        <i className="fa fa-tv"></i>
                        <h4>TV Փաթեթ</h4>
                    </div>
                    <div className="div5_1_6">
                        <Link to={"/page4"}>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text1">
                                    Իմանալ ավելին
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="div5_3">
                    <div className="div5_1_1">
                        <h1>Pro</h1>
                    </div>
                    <hr />
                    <div className="div5_1_2">
                        <h1>8000</h1>
                        <p>դր / ամսական</p>
                    </div>
                    <div className="div5_1_3">
                        <h1>Մինչև 40մբ/վ</h1>
                    </div>
                    <div className="div5_1_4">
                        <i className="fa fa-wifi"></i>
                        <h4>Անվճար wifi միացում</h4>
                    </div>
                    <div className="div5_1_5">
                        <i className="fa fa-wrench"></i>
                        <h4>Անվճար սպասարկում</h4>
                    </div>
                    <div className="div5_1_6">
                        <Link to={"/page5"}>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text1">
                                    Իմանալ ավելին
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="div5_4">
                    <div className="div5_1_1">
                        <h1>Premium</h1>
                    </div>
                    <hr />
                    <div className="div5_1_2">
                        <h1>10000</h1>
                        <p>դր / ամսական</p>
                    </div>
                    <div className="div5_1_3">
                        <h1>Մինչև 40մբ/վ</h1>
                    </div>
                    <div className="div5_1_4">
                        <i className="fa fa-wifi"></i>
                        <h4>Անվճար wifi միացում</h4>
                    </div>
                    <div className="div5_1_5">
                        <i className="fa fa-wrench"></i>
                        <h4>Անվճար սպասարկում</h4>
                    </div>
                    <div className="div4_1_5_3">
                        <i className="fa fa-tv"></i>
                        <h4>TV Փաթեթ</h4>
                    </div>
                    <div className="div5_1_6">
                        <Link to={"/page6"}>
                            <button className="button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                                </svg>
                                <div className="text1">
                                    Իմանալ ավելին
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>


            </div>
            <div id="div6">
                <div className="div6_1">
                    <AnchorLink href="#global"><img className="div6_1_img" src="https://www.easypay.am/media/2022/11/16/a054af09dbb4adae40967b25ef8b8a8a7cf748c5.png" /></AnchorLink>
                </div>
                <div className="div6_2">
                    <AnchorLink className="linker" href="#div4">Փաթեթներ</AnchorLink>
                    <AnchorLink className="linker" href="#div3_div1">Ծառայություններ</AnchorLink>
                    <AnchorLink className="linker" href="#div5">Տան համար</AnchorLink>
                    <Link to={"/biznes"} className="linker">Բիզնեսի համար</Link>
                </div>
                <div className="div6_3">
                    <div className="div6_3_1">
                        <button>
                            <span>Կապվել</span>
                            <div className="container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="blue" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="blue" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="blue" class="bi bi-telegram" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                </svg>
                            </div>
                        </button>
                    </div>
                    <h1 className="div6_3_h1">davittorosyan0@gmail.com</h1>
                    <div className="div6_3_h1">

                        <div>
                            <h1 className="div6_3_hh1"><i className="fa fa-phone" style={{ fontSize: "30px" }}></i>+374 94 55 12 94</h1>
                            <h1 className="div6_3_hh1"><i className="fa fa-phone" style={{ fontSize: "30px" }}></i>+374 99 55 12 94</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
})



