import styled from "styled-components";

export const BioContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .sub_secundario {
        font-size: 1.8rem;
    }
    #proximamente_img {
        width: 40%;
        margin: -70px auto 0 auto; 
    }
    #papeles {
        width: 85%;
    }
`;

export const BioInfo = styled.div`
    width: 100%;
    .info_txt {
        margin: 15px auto;
        font-size: 1.1rem;
    }
`;

export const Bioservicios = styled.div`
    width: 100%;
    height: 800px;
    margin-bottom: 65px;
    display: flex;
    flex-wrap: wrap;
`;
export const Bioservsub = styled.div`
    width: 150px;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
    }
    h5 {
        font-size: 1.5rem;
        width: 100%;
        color: ${({ theme }) => theme.text};
    }
    #serv_txt {
        font-size: 1.1rem;
    }
`;

export const Biodescarga = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const Bioboton = styled.div`
    width: 80%;
    height: 50px;
    margin-top: 30px;
    border-radius: 20px;
    background-color: #00FFFF;
    display: flex;
    justify-content: center;
    #boton_txt {
        font-size: 2.5rem;
    }
`;