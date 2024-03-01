import { Garagem } from "./Componentes/Garagem";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Camila");
  const [automovel, setAutomovel] = useState({
    modelo: "Fusca",
    cor: "Azul",
    ano: 1970,
    flex: false,
    adicionadoPor: "Camila",
  },
  );

  const carro1 = {
    modelo: "Etios",
    cor: "Prata",
    ano: 2017,
    flex: true,
    adicionadoPor: "Jacob"
  }

  const carro2 = {
    modelo: "Yaris",
    cor: "Preto",
    ano: 2022,
    flex: true,
    adicionadoPor: "Camila"
  }

  const carro3 = {
    modelo: "Civic",
    cor: "Preto",
    ano: 2018,
    flex: true,
    adicionadoPor: "Camila"
  }

  
  
  return (
    <div className="App">
      <GlobalStyled />

      <Garagem 
      nome={nome} 
      automovel={automovel}
      setNome={setNome}
      setAutomovel={setAutomovel}
      carro1={carro1}
      carro2={carro2}
      carro3={carro3}
      />
    </div>
  );
}
