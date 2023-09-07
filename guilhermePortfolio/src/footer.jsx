import React from "react";
import './footer.css'

function Footer() {
    return (
        <>
            <div className="footerAll">
                <div className="footerCard">
                    <span><p>Disclaimer</p></span>
                    <div className="disclaimerText">
                        <p id="p1Disclaimer">Projeto idealizado e desenvolvido por Guilherme Costa Barbosa Faglioni</p>
                        <p>O projeto estará sempre em atualização, refatoramento e aprimoramento de escalabilidade e responsividade</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer