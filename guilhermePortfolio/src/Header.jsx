import React, { useEffect } from "react";
import './Header.css';
import emailLogo from './assets/email.svg';
import githubLogo from './assets/github.svg';
import linkedinLogo from './assets/linkedin.svg';


function Header() {
    useEffect(() => {
        const popup = document.querySelector(".popupEmail");
        const emailImage = document.getElementById("email");

        emailImage.addEventListener('click', function () {
            popup.classList.remove('copied');

            setTimeout(function () {
                popup.classList.add('copied');
            }, 1500);

            const email = "guilhermefaglioni.contato@gmail.com";
            const textArea = document.createElement("textarea");
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        });
    }, []);

    return (
        <>
            <div id="header">
                <div id="content">
                    <h1>Guilherme</h1>
                    <div id="emailQuery">
                        <img id="email" src={emailLogo} alt="Email" />
                        <div class="popupEmail copied" >
                            <p>"guilhermefaglioni.contato@gmail.com"</p>
                            <p>Email copiado para área de transferência</p>
                        </div>
                    </div>
                    <a href="https://github.com/GuilhermeFaglioni"><img id="github" src={githubLogo} alt="GitHub" /></a>
                    <a href="https://www.linkedin.com/in/guilherme-faglioni-692bb1210/"><img id="linkedin" src={linkedinLogo} alt="LinkedIn" /></a>
                </div>
                <h1 id="surname">Faglioni</h1>
                <p class="bold instruction" >clique nos icones para acessar minhas principais redes !</p>
                <div id="contentSignature">
                    <h2 id="signature">WebDev</h2>
                </div>
            </div>
        </>
    );
}

export default Header;
