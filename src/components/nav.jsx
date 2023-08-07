import React from "react";
function Nav(){
    var [position,changeposition]=React.useState(0);
    var [opac,changeopac]=React.useState(0);
    function handledot(event){
        document.querySelector(".dot").style.opacity=1;
        const e=event.target;
        var name=event.target.name;
        if(name=="one"){
            changeposition(30);
            changeopac(1);
        }
        if(name=="two"){
            changeposition(125);
            changeopac(1);
        }
        if(name=="three"){
            changeposition(240);
            changeopac(1);
        }


    }
    function opacChange(){
        changeposition(0);
        changeopac(0);
    }
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
                <a onMouseOver={handledot} onMouseOut={opacChange} name="one">Home</a>               
                <a onMouseOver={handledot} onMouseOut={opacChange} name="two">Contact</a>
                <a onMouseOver={handledot} onMouseOut={opacChange} name="three">About us</a>
                <div className="line">
                     <div className="dot" style={{left:position,opacity:opac}}>

                     </div>
                </div>
            </div>
        </div>
    )
}
export default Nav;