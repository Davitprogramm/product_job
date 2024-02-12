import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
export const Address = React.memo(() => {
    return (
        <div className="containers">
            <div style={{ width: "100%", height: "50px" }}>
               <Link style={{textDecoration:"none",marginTop:"50px"}} to={"/"}><button style={{width:"100px",height:"40px",fontSize:"20px",marginLeft:"30px",}} id="btn1">Ելք</button></Link> 
            </div>
            <ol >
                <li style={{ margin: "20px" }}>Նոր Գեղի</li>
                <ol style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
                    <a >Հ․ Մաթևոսյան փող</a>
                    <a >Ա․ Բարսեղյան փող</a>
                    <a >Ց․ Խաչատրյան փող 1 նրբ․</a>
                    <a >Ց․ Խաչատրյան փող 2 նրբ․</a>
                    <a >Ց․ Խաչատրյան փող 3 նրբ․</a>
                    <a >Ց․ Խաչատրյան փող 4 նրբ․</a>
                    <a >Ց․ Խաչատրյան փող 5 նրբ․</a>
                    <a >Ց․ Խաչատրյան փող 6 նրբ․</a>
                    <a >Մ․ Մաշտոց փող</a>
                    <a >Ա․ Բաբաջանյան 1փկղ 1շ</a>
                    <a >Ա․ Բաբաջանյան 1փկղ 2շ</a>
                    <a >Ա․ Բաբաջանյան փող</a>
                    <a >Աղբյուրակի փող</a>
                    <a >Ֆ․ Տևոսյան փող 1շ</a>
                    <a >Ֆ․ Տևոսյան փող 2շ</a>
                    <a >Ֆ․ Տևոսյան փող</a>
                    <a >Ուսանողական փող 8շ</a>
                    <a >Ուսանողական փող 14շ</a>
                    <a >Ուսանողական փող 18շ</a>
                    <a >Ուսանողական փող</a>
                    <a >Արցախի փող</a>
                    <a >Շոիշի փող</a>
                    <a >Հ․ Ներսիսյան փող</a>
                    <a >Մ․ Մկրտչյան փող</a>
                    <a >Ա․ Խանջյան փող</a>
                    <a >Խ․ Աբովյան փող</a>
                    <a >Մ․ Բաղրամյան փող</a>
                    <a >Եղվարդի խճղ</a>
                    <a >Պ․ Սևակի փող</a>
                </ol>
                <li style={{ margin: "20px" }}>Նոր Հաճն</li>
                <ol style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
                    <a >Սպորտային փող 3շ</a>
                    <a >Իսահակյան փող 3շ</a>
                    <a >Իսահակյան փող 5շ</a>
                    <a >Իսահակյան փող 7շ</a>
                    <a >Չարենցի փող 1շ</a>
                    <a >Չարենցի փող 3շ</a>
                    <a >Չարենցի փող 5շ</a>
                    <a >Չարենցի փող 17շ</a>
                    <a >Չարենցի փող 22շ</a>
                    <a >Չարենցի փող 33շ</a>
                    <a >Տոռոզյան փող 10շ</a>
                    <a >Տոռոզյան փող 12շ</a>
                    <a >Տոռոզյան փող 27շ</a>
                    <a >Տոռոզյան փող 6շ</a>
                    <a >Պ․ Սևակի ????? փող</a>
                </ol>
                <li style={{ margin: "20px" }}>Նոր Արտամետ</li>
                <ol style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
                    <a >0 փող</a>
                    <a >1 փող</a>
                    <a >2 փող</a>
                    <a >3 փող</a>
                    <a >4 փող</a>
                </ol>
                <li style={{ margin: "20px" }}>Եղվարդ</li>
                <ol style={{ display: "flex", flexDirection: "column", marginLeft: "50px" }}>
                    <a >Անտառտնտեսություն 1 փող</a>
                    <a >Անտառտնտեսություն 2 փող</a>
                </ol>
            </ol>
        </div >
    )
})