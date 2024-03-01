import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export function Garagem({ nome, automovel, setNome, setAutomovel, carro1, carro2, carro3 }) {
  const alterarNome = () => {
    setNome("Julieta")
  }

  const alterarCarro = () => {
    setAutomovel(carro2)
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>
      <Botao onClick={alterarCarro}>Alterar Carro</Botao>
      <Estacionamento>
        <Carro
          modelo={automovel.modelo}
          cor={automovel.cor}
          ano={automovel.ano}
          adicionadoPor={automovel.adicionadoPor}
          flex= {automovel.flex}
        />
        
      </Estacionamento>
    </GaragemContainer>
  )
}
