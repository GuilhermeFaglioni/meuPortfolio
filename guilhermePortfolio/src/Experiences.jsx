import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import './experiences.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Experiences() {
    return (
        <>
            <div className="experiencesAll">
                <div className="experiencesContent">
                    <div className="professionExp expCards">
                        <h2>Experiências Profissionais</h2>
                        <ul>
                            <li>Trainee de Assessor de Investimentos - Libra Investimentos</li>
                            <dd>Atuei como Assessor de Investimentos em Curitiba, PR aos 18 anos de idade</dd>
                            <li>Trainee em ASCII Empresa JR</li>
                            <li>Diretor Financeiro e Desenvolvedor em ASCII Empresa JR</li>
                            <dd>Após aprovação no processo de trainee fui designado o cargo de diretor financeiro, além de desenvolvedor</dd>
                        </ul>
                    </div>
                    <div className="personalExp expCards">
                        <h2>Experiências Pessoais</h2>
                        <ul>
                            <li>Startup Weekend BH</li>
                            <dd>Em 2014, aos 11 anos de idade, participei do Startup Weekend BH</dd>
                            <li>Startup Summer Camp, California Entrepreneurship, Technology and Business</li>
                            <dd>Intercâmbio de Business e Inglês em Santa Barbara, CA, em julho de 2018</dd>
                            <li>Participação em Olimpíadas Brasileiras e Internacionais de Matemática, Lógica e Astronomia</li>
                            <dd>Bronze nacional e Prata estadual na olimpíada internacional Matématiques Sans Frontier</dd>
                            <li>Palestrante Magnum Talks</li>
                            <dd>
                                <ul>
                                    <li>Tema: Esportes Eletrônicos em 2018</li>
                                    <li>Tema: Importância dos investimentos para uma vida financeira estável em 2020</li>
                                </ul>
                            </dd>
                            <li>Menções Honrosas em simulações diplomáticas</li>
                            <dd>
                                <ul>
                                    <li>SIMA 2018 e 2019</li>
                                    <li>COMACIN 2019</li>
                                    <li>MUNDE 2019</li>
                                </ul>
                            </dd>
                            <li>Diretor SIMA 2020-2021</li>
                            <li>Bicampeão metropolitano de Handball</li>
                            <dd>Sub-14 em 2017 e sub-16 em 2019</dd>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experiences