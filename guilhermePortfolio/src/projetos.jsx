import React from "react";
import { useEffect, useState } from "react";
import './projetos.css'

function projetos() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/GuilhermeFaglioni/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <>
            <div id="projectsAll">
                <div className="projectCard"></div>
            </div>
        </>
    )
}

export default projetos