import React from "react";
import { View, Text } from "react-native";

import {
   Background,
   Container,
   Logo,
   AreaInput,
   Input,
   SubmitButton,
   SubmitText,
   Link,
   LinkText
} from "./styles";

export default function SignIn() {
  return (
    <Background>

      <Container>

        <Logo
        source={require("../../assets/Logo.png")} 
        />

        <AreaInput>
        <Input
          placeholder="Seu email"
        />
        </AreaInput>

        <AreaInput>
        <Input
          placeholder="Sua Senha"
        />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText>Criar uma Conta</LinkText>
        </Link>

      </Container>

    </Background>
  );
}
