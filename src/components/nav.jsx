import React from "react";
function Nav(){
    return(
        <div className="main-nav">
            <div className="logo">
                <div className="name">
                    <p>Org</p>
                </div>
                <div className="logo">
                    Logo
                </div>
            </div>
            <div className="options">
                <a>Home</a>               
                <a>Contact</a>
                <a>About us</a>
                <div className="line">
                     <div className="dot">

                     </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;