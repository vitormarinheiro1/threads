import { Container, DivFoto, DivNome, Header, Logo, Nome, NomePerfil, BotaoThreads, DivNomePerfil, FotoPerfil } from "./styled";

import LogoSVG from "../../assets/images/logo.svg"
import Perfil from "../../assets/images/me.jpg"

const Profile = () => {
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
        </Container>
    );
}

export default Profile;