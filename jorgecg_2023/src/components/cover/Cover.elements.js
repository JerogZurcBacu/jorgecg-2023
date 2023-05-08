import styled from "styled-components";
import bgimg from "../../imagenes/Maqueta_White1.png";

export const CoverContainer = styled.div`
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: ${({ theme }) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const CoverWrapper = styled.div`
    width: 100%;
    padding: 6rem 0;
    margin: auto;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background:url(${bgimg}); 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 35% center;
`;

export const InfoContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    svg {
        font-size: 1.5rem;
        margin: auto;
        fill: ${({ theme }) => theme.text};
    }

    p {
        color: ${({ theme }) => theme.text};
        margin: 0;
        font-size: 5rem;
        font-weight: 700;
        &:nth-of-type(2) {
            font-size: 2rem;
            font-weight: 400;
        }
    }
    #cgdes {
        width: 100%;
    }
    ul {
        margin: 3rem 0 0 -1.1rem;
        list-style: none;
        li {
            margin-top: 1rem;
            a {
                text-decoration:none;
                p {
                    font-size: 1rem; 
                }
            }
        }    
    }

    h1 {
        margin: 0;
        width: 100%;
        color: ${({ theme }) => theme.text};
        font-weight: 700;
        font-size: 7rem;
    }
`;