import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
} from "../cover/Cover.elements";
import {
    BioContainer,
    BioInfo,
    Bioservicios,
    Bioboton,
    Biodescarga,
    Bioservsub,
} from "../Bio-Servicios/bioserv.elements";
import proximamente_w from "../../imagenes/proximamente_w.png";
import proximamente_b from "../../imagenes/proximamente_b.png";
import papeles from "../../imagenes/papeles.png";
import serv_img from "../../imagenes/serv_img.png";

const Bioserv = (props) => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <h2 id="bioserv_title" className="subtitulos">Bio<span className="span_contorno">/</span><br />Ser<br />vici<br />os</h2>
                        <BioContainer>    
                            <p className="sub_secundario"><span className="span_contorno">Soy</span> Téc. Sup. en BigData, <span className="span_contorno">y desarrollador</span> Fornt End <span className="span_contorno">/</span> Full Stack</p>
                            <img src= {props.theme === 'light' ? proximamente_w : proximamente_b} alt="Desarrollador Web" id="proximamente_img" />
                            <BioInfo>
                                <p className="info_txt">Por cierto, mi nombre es Jorge Cruz García, tengo 29 años y vivo en Hidalgo, México.</p>
                                <p className="info_txt">Soy desarrollador web freelance enfocado principalmente en Front End y en proceso de aprendizaje de Back End para convertirme en todo un Full Stack.</p>
                                <h4 className="sub_secundario"><span className="span_contorno">-Servicios-</span></h4>
                                <p className="info_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium. Nam vitae mattis nulla. Etiam finibus libero vel molestie vulputate.</p>
                                <Bioservicios>
                                    <Bioservsub>
                                        <img src={serv_img} alt="serv_img"/>
                                        <h5>Servicio 1</h5>
                                        <p id="serv_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium.</p>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <h5>Servicio 1</h5>
                                        <p id="serv_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium.</p>
                                        <img src={serv_img} alt="serv_img"/>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <img src={serv_img} alt="serv_img"/>
                                        <h5>Servicio 1</h5>
                                        <p id="serv_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium.</p>
                                    </Bioservsub>
                                    <Bioservsub>
                                        <h5>Servicio 1</h5>
                                        <p id="serv_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium.</p>
                                        <img src={serv_img} alt="serv_img"/>
                                    </Bioservsub>
                                </Bioservicios>
                                <h4 className="sub_secundario"><span className="span_contorno">-CV-</span></h4>
                                <p className="info_txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id enim sed neque aliquet pretium. Nam vitae mattis nulla. Etiam finibus libero vel molestie vulputate.</p>
                                <Biodescarga>
                                    <img src={papeles} alt="papeles" id="papeles"/>
                                    <Bioboton>
                                        <p id="boton_txt">Descargar</p>
                                    </Bioboton>
                                </Biodescarga>
                            </BioInfo>    
                        </BioContainer>    

                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};

export default Bioserv;