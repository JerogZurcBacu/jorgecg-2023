import styled from "styled-components";

export const SwitchContiner = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.bgc};
    transition: 0.5s all ease-in;
`;

export const SwitchWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    padding-top: 1rem;
    padding-left: 5rem;
    diplay: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex-direction: row-reverse;
`;

export const SwitchBGC = styled.div`
    position: relative;
    width: 50px;
    height: 22px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.toggle};
    transition: 1s all ease-in;
    svg {
        position: absolute;
        font-size: 1.4rem;
        fill: ${({ theme }) => theme.text};
    }
    #sol {
        left: -28px;
    }
    #luna {
        left: 58px;
    }
`;

export const ButtonSwitch = styled.button`
    position: absolute;
    cursor: pointer;
    bottom: 3px;
    left: ${({ position }) => (position ? "30px" : "5px")};
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    transition: 0.4s all ease-in;
    outline: none;
`;