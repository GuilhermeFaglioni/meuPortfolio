import React from "react";
import './aboutMe.css'
import profilePic from './assets/download.png'
import profile from './assets/profile2.png'

function AboutMe() {


    return (
        <>
            <div className="aboutAll">
                <div className="aboutContent">
                    <div className="aboutText">
                        <span class="gradientText"><h2>Sobre Mim</h2></span>
                        <p> Oi! Eu sou o <span class="gradientText">Guilherme Faglioni</span> <br /><br />
                            um estudante de <span class="gradientText">Ciência da Computação,</span> <br />
                            entusiasta do <span class="gradientText">mercado financeiro,</span><br />
                            atleta de <span class="gradientText">handball</span> </p>
                    </div>
                    <div className="profileImage">
                        <div className="card">
                            <div class="front">
                                <img id="pixel" src={profilePic} alt="" />
                            </div>
                            <div class="back">
                                <p id="p1">"Costinha" || "Paraguaio"</p>
                                <p id="p2">20 anos</p>
                                <img id="profile" src={profile} alt="" />
                                <p id="p3">natural de BH, morando em Uberlândia</p>
                            </div>
                        </div>
                            <p id="cardDescription">passe o mouse por cima!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe