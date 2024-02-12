import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Biznes } from "../Biznes";
import { Report } from "../Report";
import { Error } from "../Error";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page3 } from "../Page3";
import { Page4 } from "../Page4";
import { Page5 } from "../Page5";
import { Page6 } from "../Page6";
import { Address } from "../Address";

export const Router = React.memo(() => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/biznes" element={<Biznes />}></Route>
                    <Route path="/report" element={<Report />}></Route>
                    <Route path="/*" element={<Error />}></Route>
                    <Route path="/page1" element={<Page1 />}></Route>
                    <Route path="/page2" element={<Page2 />}></Route>
                    <Route path="/page3" element={<Page3 />}></Route>
                    <Route path="/page4" element={<Page4 />}></Route>
                    <Route path="/page5" element={<Page5 />}></Route>
                    <Route path="/page6" element={<Page6 />}></Route>
                    <Route path="/address" element={<Address />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
})