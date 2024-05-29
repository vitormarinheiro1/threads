import styled, { createGlobalStyle } from "styled-components";

type TypeTextoCustomizavel = {
    color: string;
    size: string;
    left?: string;
    top?: string;
    weigth?: string;
}

type TypeIcone = {
    width?: string;
    bottom?: string;
    left?: string;
    top?: string;
    radius?: string;
    border?: string;
}

type TypeDivThreadsOuRespostas = {
    outlined: string
}

type TypeContainerThreads = {
    display?: string;
}

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
    width: 630px;
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
    margin-top: -5px;
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
    letter-spacing: 0.5px;
    margin-top: 5px;
    margin: 0;
    border: 0;
`;

export const NomePerfil = styled.h2`
    font-size: 14px;
    color: #F3F5F7;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    text-decoration: none;
    margin: 0;
    border: 0;
`;

export const BotaoThreads = styled.button`
    padding: 5px 7px;
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    background-color: #1E1E1E;
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

export const Biografia = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-top: 15px;
`;

export const TextoBiografia = styled.h3`
    border: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 0.5px;
    color: #F3F5F7;
    font-weight: 300;
    margin-bottom: -3px;
`;

export const ContainerSeguidoresLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 25px;
`;

export const DivSeguidoresLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DivIconesInstagram = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

export const TextoCustomizavel = styled.p<TypeTextoCustomizavel>`
    border: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.2px;
    color: ${(props) => (props.color ? props.color : "white")};
    font-size: ${(props) => (props.size ? `${props.size}px` : "15px")};
    margin-left: ${(props) => (props.left ? `${props.left}px` : "0px")};
    margin-top: ${(props) => (props.top ? `${props.top}px` : "0px")};
    font-weight: ${(props) => (props.weigth ? props.weigth : 300)};
`;

export const Icone = styled.img<TypeIcone>`
    width: 100%;
    border-radius: ${(props) => props.radius ? props.radius : "0px"};
    border: ${(props) => props.border ? props.border : "0px"};
    max-width: ${(props) => props.width ? `${props.width}px` : "23px"};
    margin-right: 15px;
    margin-bottom: ${(props) => props.bottom ? `${props.bottom}px` : "0px"};
    margin-left: ${(props) => props.left ? `${props.left}px` : "0px"};
    margin-top: ${(props) => props.top ? `${props.top}px` : "0px"};
`;

export const ContainerThreadsOuRespostas = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const DivThreadsOuRespostas = styled.div<TypeDivThreadsOuRespostas>`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 0px;
    margin-top: 15px;
    border-bottom: ${(props) => props.outlined === "true" ? "1px solid white" : "0px"};
    cursor: pointer;
`;

export const ContainerThreads = styled.div<TypeContainerThreads>`
    display: ${(props) => props.display ? props.display : "block"};
    color: white;
    width: 100%;
    padding-top: 30px;
`;

export const DivFotoThreadsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const FotoThreadsDiv = styled.img`
    border-radius: 50%;
    width: 100%;
    max-width: 37px;
    max-height: 37px;
`;

export const DivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    width: 100%;
    margin-left: -25px;
`;

export const HeaderDivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const PerfilThreads = styled.div`
    display: flex;
    flex: 1;
    cursor: pointer;

`;

export const TempoPostThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 1;
`;

export const DivPostThreads = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const DivIconesThreads = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0px;
    margin-top: 15px;
`;

export const ContainerDownload = styled.div`
    margin-top: 35px;
    background-color: #0A0A0A;
    width: 100%;
    max-width: 500px;
    border-radius: 15px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
`;

export const BotaoBaixarThreads = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: #F3F5F7;
    border: 1.5px solid #5D5D5D;
    background-color: transparent;
    padding: 7px 12px;
    border-radius: 10px;
    font-weight: 300px;
    margin-top: 30px;
`;