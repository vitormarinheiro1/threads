import React, { useState } from "react";

import {
    Container,
    DivFoto,
    DivNome,
    Header,
    Logo,
    Nome,
    NomePerfil,
    BotaoThreads,
    DivNomePerfil,
    FotoPerfil,
    TextoBiografia,
    Biografia,
    ContainerSeguidoresLink,
    DivSeguidoresLink,
    DivIconesInstagram,
    TextoCustomizavel,
    Icone,
    ContainerThreadsOuRespostas,
    DivThreadsOuRespostas,
    ContainerThreads,
    DivFotoThreadsContainer,
    DivPostThreadsContainer,
    FotoThreadsDiv,
    HeaderDivPostThreadsContainer,
    PerfilThreads,
    TempoPostThreads,
    DivPostThreads,
    DivIconesThreads,
    ContainerDownload,
    BotaoBaixarThreads
} from "./styled";

import LogoSVG from "../../assets/images/logo.svg"
import LogoInstagramSVG from "../../assets/images/instagram.svg"
import MaisSVG from "../../assets/images/ellipsis-circle.svg"
import EllipsesSVG from "../../assets/images/ellipsis.svg"
import CurtirSVG from "../../assets/images/curtir.svg"
import ComentariosSVG from "../../assets/images/comentarios.svg"
import RepostSVG from "../../assets/images/repost.svg"
import SendSVG from "../../assets/images/send.svg"
import Perfil from "../../assets/images/me.jpg"

const Profile = () => {

    const [ThreadsOuRespostas, setThreadsOuRespostas] = useState("threads");

    return (
        <Container>
            <Logo src={LogoSVG} alt="teste" />


            <Header>
                <DivNome>
                    <Nome>Vitor Marinheiro</Nome> <br />

                    <DivNomePerfil>
                        <NomePerfil>marinheiroz</NomePerfil>
                        <BotaoThreads>threads.net</BotaoThreads>
                    </DivNomePerfil>
                </DivNome>
                <DivFoto>
                    <FotoPerfil src={Perfil} alt="Me"></FotoPerfil>
                </DivFoto>
            </Header>

            <Biografia>
                <TextoBiografia>
                    🕐 Programador fullstack há 2 anos.
                </TextoBiografia>
                <TextoBiografia>
                    🥇 Ciência da computação
                </TextoBiografia>
                <TextoBiografia>
                    🧠 Dev Fullstack
                </TextoBiografia>
                <TextoBiografia>
                    🔥 Meu portfólio 👇
                </TextoBiografia>
            </Biografia>

            <ContainerSeguidoresLink>
                <DivSeguidoresLink>
                    <TextoCustomizavel color="#616161" size="14.5">
                        174 seguidores . vitormarinheiro.vercel.app
                    </TextoCustomizavel>
                </DivSeguidoresLink>

                <DivIconesInstagram>
                    <Icone src={LogoInstagramSVG}></Icone>
                    <Icone src={MaisSVG}></Icone>
                </DivIconesInstagram>
            </ContainerSeguidoresLink>

            <ContainerThreadsOuRespostas>
                <DivThreadsOuRespostas onClick={() => { setThreadsOuRespostas("threads") }} outlined={ThreadsOuRespostas === "threads" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Threads
                    </TextoCustomizavel>
                </DivThreadsOuRespostas>
                <DivThreadsOuRespostas onClick={() => { setThreadsOuRespostas("respostas") }} outlined={ThreadsOuRespostas === "respostas" ? "true" : "false"}>
                    <TextoCustomizavel color="white" size="15">
                        Respostas
                    </TextoCustomizavel>
                </DivThreadsOuRespostas>
            </ContainerThreadsOuRespostas>

            <ContainerThreads display={ThreadsOuRespostas === "threads" ? "flex" : "none"}>
                <DivFotoThreadsContainer>
                    <FotoThreadsDiv src={Perfil} />
                </DivFotoThreadsContainer>

                <DivPostThreadsContainer>
                    <HeaderDivPostThreadsContainer>
                        <PerfilThreads>
                            <TextoCustomizavel color="white" size="14">
                                marinheiroz
                            </TextoCustomizavel>
                        </PerfilThreads>
                        <TempoPostThreads>
                            <TextoCustomizavel size="14" color="grey">
                                3sem <Icone bottom="-4" src={EllipsesSVG} width="18" />
                            </TextoCustomizavel>
                        </TempoPostThreads>
                    </HeaderDivPostThreadsContainer>

                    <DivPostThreads>
                        <TextoCustomizavel size="15" top="15" color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </TextoCustomizavel>

                        <TextoCustomizavel size="15" top="15" color="white">
                            Fusce nec justo id tortor facilisis fermentum. Integer vitae vestibulum ante.
                        </TextoCustomizavel>

                        <TextoCustomizavel size="15" top="15" color="white">
                            Sed pharetra convallis sapien, nec congue dolor aliquam in. Nulla ultrices nulla vitae velit iaculis malesuada.
                        </TextoCustomizavel>
                    </DivPostThreads>

                    <DivIconesThreads>
                        <Icone src={CurtirSVG} width="20" />
                        <Icone src={ComentariosSVG} width="25" />
                        <Icone src={RepostSVG} width="22" />
                        <Icone src={SendSVG} width="20" />
                    </DivIconesThreads>

                    <TextoCustomizavel size="15" color="grey" top="5">9 curtidas</TextoCustomizavel>
                </DivPostThreadsContainer>
            </ContainerThreads>

            <ContainerDownload>
                <Icone src={LogoSVG} width="42" left="-40"  />
                <Icone src={Perfil} width="55" left="20" top="-28" border="5px solid #0A0A0A" radius="50%"  />
                <TextoCustomizavel size="14" top="15" color="#5D5D5D">
                    Baixe o app Threads para ver mais de marinheiroz.
                </TextoCustomizavel>

                <BotaoBaixarThreads>
                    Baixar o Threads
                </BotaoBaixarThreads>
            </ContainerDownload>
        </Container>
    );
}

export default Profile;