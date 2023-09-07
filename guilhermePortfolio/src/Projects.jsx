import React from "react";
import { useEffect, useState, useRef } from "react";
import './projetos.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [pokemon, setPokemon] = useState('');
    const [pokemonURL, setPokemonURL] = useState('');
    const [lol, setLol] = useState('');
    const [lolURL, setLolURL] = useState('');
    const [myPortofolio, setMyPortofolio] = useState('');
    const [myPortofolioURL, setMyPortofolioURL] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/GuilhermeFaglioni/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);

                // Encontre os repositórios específicos e defina os estados
                const lolRepo = data.find(repo => repo.id === 530885974);
                const myPortofolioRepo = data.find(repo => repo.id === 688129261);
                const pokemonRepo = data.find(repo => repo.id === 530889055);

                if (lolRepo) setLol(lolRepo.name); setLolURL(lolRepo.html_url);
                if (myPortofolioRepo) setMyPortofolio(myPortofolioRepo.name); setMyPortofolioURL(myPortofolioRepo.html_url);
                if (pokemonRepo) setPokemon(pokemonRepo.name); setPokemonURL(pokemonRepo.html_url);
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <div id="projectsContent">
                <h2>Projetos</h2>
                <div id="projectsAll">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="projectCard ">

                            <a href={pokemonURL}>
                                <div id="bg1" className="bgPicture"></div>
                                <hr />
                                <div className="projectText">
                                    <p id="Pokedex">Nome: {pokemon}</p>
                                    <p>Descrição: HTML, CSS, JS, PokemonAPI</p>
                                </div>
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="projectCard">
                            <a href={lolURL}>
                                <div id="bg2" className="bgPicture"></div>
                                <hr />
                                <div className="projectText">
                                    <p id="lolClone">Nome: {lol}</p>
                                    <p>Descrição: HTML, CSS, JS</p>
                                </div>
                            </a>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide><div className="projectCard">
                            <a href={myPortofolioURL}>
                                <div id="bg3" className="bgPicture"></div>
                                <hr />
                                <div className="projectText">
                                    <p id="portfolioAPI">Nome: {myPortofolio}</p>
                                    <p>Descrição: React, Slider, GithubAPI</p>
                                </div>
                            </a>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Projects