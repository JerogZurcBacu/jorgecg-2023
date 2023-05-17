import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {ProyContainer,
        ProyImgContainer,
        ProyTxtContainer,
} from "./proyectos.elements";
import ejproy from "../../imagenes/Ej_proyectos_img.png";

const Proyectos = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="subtitulo" className="subtitulos">Pro<br />yec<br />tos</h2>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={ejproy} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Proyecto 3</h3>
                                <p className="texto_proy">lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="der">
                                <img src={ejproy} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Proyecto 3</h3>
                                <p className="texto_proy">lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={ejproy} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Proyecto 3</h3>
                                <p className="texto_proy">lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="der">
                                <img src={ejproy} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Proyecto 3</h3>
                                <p className="texto_proy">lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                        <ProyContainer>
                            <ProyImgContainer className="izq">
                                <img src={ejproy} alt="Proyecto" />
                            </ProyImgContainer>
                            <ProyTxtContainer>
                                <h3>Proyecto 3</h3>
                                <p className="texto_proy">lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                            </ProyTxtContainer>
                        </ProyContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};

export default Proyectos;