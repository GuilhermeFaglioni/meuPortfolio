import React from "react";
import './MyStack.css'
import htmlLogo from './assets/html5.png'
import cssLogo from './assets/csslogo.png'
import jsLogo from './assets/jslogo.png'
import reactLogo from './assets/reactlogo.png'

function MyStack() {
    return (
        <>
            <div className="myStackAll">
                <h2>Minha Stack Principal</h2>
                <div id="stackImages">
                    <img src={htmlLogo} alt="" className="contrastAnimate" />
                    <img src={cssLogo} alt="" className="contrastAnimate" />
                    <img src={jsLogo} alt="" className="contrastAnimate" />
                    <img src={reactLogo} alt="" className="contrastAnimate" />
                </div>
            </div>
        </>
    )
}

export default MyStack