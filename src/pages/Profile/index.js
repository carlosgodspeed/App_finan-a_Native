import React from 'react';
import { Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText } from './styles';
import Header from '../../components/Header';

export default function Profile(){
  return(
    <Container>
      <Header title="Perfil" />

      <Message>
        Welcome back brasil
      </Message>

      <Name numberOflines={1}>
        Nome usuario
      </Name>

      <NewLink>
        <NewText>Fazer Registro</NewText>
      </NewLink>

      <LogoutButton>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}