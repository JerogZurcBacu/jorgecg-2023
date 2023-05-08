import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {ProyContainer,ProyImgContainer,ProyTxtContainer,} from "./proyectos.elements";

const Proyectos = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="subtitulo">Pro<br />yec<br />tos</h2>
                        <ProyContainer>
                            <ProyImgContainer>
                                <img src="" alt="Proyecto" />
                                <ProyTxtContainer>
                                    <h3>Proyecto 3</h3>
                                    <p>lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.lorem ipsum dolor sit amet, consectetur asipiscing elit.</p>
                                    <a href="www.google.com" rel="noreferrer" target="_blank">Ver mas -&gt;</a>
                                </ProyTxtContainer>
                            </ProyImgContainer>
                        </ProyContainer>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};

export default Proyectos;