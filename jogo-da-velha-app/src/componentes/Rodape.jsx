import './Rodape.css'
import Jogada from './Jogada'

export default function Rodape(props) {

    const jogadas = props.jogadas.map(
        (jogada, index) => <Jogada key={index} jogada={jogada} onClick={() => props.FuncaoRetorno(jogada)}></Jogada>);
    return (
        <footer className="Rodape">
            <div className="Enunciado">
                <p>Historico de Jogadas:</p>
                <button onClick={() => props.FuncaoReiniciar()}>Reiniciar</button>
            </div>
            <div>
                {jogadas}
            </div>

        </footer>
    )
}
