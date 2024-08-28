import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Chat from "../Messaging/Chat/Chat";

function Router(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/*<Route  element={<Layout />} >*/}
                    {/*    <Route path="/" element={<Home />} />*/}
                    {/*    <Route path="about" element={<About />} />*/}
                    {/*    <Route path="contact" element={<Contact />} />*/}
                    {/*</Route>*/}
                    <Route path="/" element={<Main />} />
                    <Route path="chat" element={<Chat />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
