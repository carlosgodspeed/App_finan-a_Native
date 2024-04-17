import React from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";

import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList() {
  return (
    <Container>
      <Tipo>
        <IconView>
            <Icon name="arrow-down" size={20} color="#FFF" />
            <TipoText>Receita</TipoText>
        </IconView>
      </Tipo>

      <ValorText>
        R$ 1200
      </ValorText>
    </Container>
  );
}
