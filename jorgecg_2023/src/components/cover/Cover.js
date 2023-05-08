import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "./Cover.elements";
import cgdes from "../../imagenes/cgdes.png";
import cgdes_b from "../../imagenes/cgdes_b.png";

const Cover = (props) => {

    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <p>Hola mundo!,</p>
                        <p>yo soy...</p>
                        <h1>Jorge</h1>
                        <img src= {props.theme === 'light' ? cgdes : cgdes_b} alt="Desarrollador Web" id="cgdes" />
                        <ul>
                            <li><a href="#proyectos" ><p>Proyectos -&gt;</p></a></li>
                            <li><a href="#sobremi" ><p>Sobre mi / Servicios -&gt;</p></a></li>
                            <li><a href="#contacto" ><p>Contacto -&gt;</p></a></li>
                        </ul>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};
export default Cover;