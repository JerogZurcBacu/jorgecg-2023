import styled from "styled-components";
import bgimg_izq from "../../imagenes/bg_proyectos_img_1.png";
import bgimg_der from "../../imagenes/bg_proyectos_img_2.png";

export const ProyContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    justify-content: center;
    h3 {
        font-size: 3rem;
        margin: 1rem 0;
        color: ${({ theme }) => theme.text};
    }
    .izq {
        background:url(${bgimg_izq});
        background-repeat: no-repeat;
        background-size: cover;
    }
    .der {
        background:url(${bgimg_der});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right;
    }
`;

export const ProyImgContainer = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center; 
    img {
        width: 80%;
        margin: auto; 
    }
`;

export const ProyTxtContainer = styled.div`
    width: 100%;
    justify-content: center;
    transition: 0.5s all ease-in;
    .texto_proy {
        font-size: 1rem;
        margin: 1rem 0;
        color: ${({ theme }) => theme.text};
    }
    a {
        text-decoration: none; 
        color: ${({ theme }) => theme.text};
    }
`;