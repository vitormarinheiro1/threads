import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #101010;
        display: flex;
        justify-content: center;
    }
`;

export const Container = styled.div`
    display: flex;
    width: 610px;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;
`;

export const Logo = styled.img`
    width: 100%;
    max-width: 23px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
`;

export const DivNome = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`;

export const DivNomePerfil = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: -10px;
`;

export const DivFoto = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const Nome = styled.h1`
    font-size: 25px;
    color: #F3F5F7;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
    margin-top: 5px;
    margin: 0;
    border: 0;
`;

export const NomePerfil = styled.h2`
    font-size: 14px;
    color: #F3F5F7;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-decoration: none;
    margin: 0;
    border: 0;
`;

export const BotaoThreads = styled.button`
    padding: 5px 7px;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #3A3A3A;
    border: 0;
    color: #616161;
    font-size: 10px;
    letter-spacing: 0.2px;
    margin-left: 5px;
`;

export const FotoPerfil = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 85px;
`;