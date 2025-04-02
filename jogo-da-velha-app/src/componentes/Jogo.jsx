import './Jogo.css'
import Cabecalho from './Cabecalho';
import Celula from './Celula';
import Rodape from './Rodape';
import { useState } from 'react';
//import Jogada from './Jogada';

export default function Jogo() {
    const [vezJogador, setVezJogador] = useState('x');
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null));
    const [historicoJogadas, setHistoricoJogadas] = useState([]);

    const HandleClick = (IndiceCelula) => {
        if (!estadoTabuleiro[IndiceCelula] && !FimJogo(estadoTabuleiro)) {
            let Vez = vezJogador;
            let Jogada = [...estadoTabuleiro];
            Jogada[IndiceCelula] = Vez;
            Vez === 'x' ? Vez = 'o' : Vez = 'x'

            const Vencedor = FimJogo(Jogada)
            const Velha = DeuVelha(Jogada)

            if (Vencedor) {
                alert(`O jogo acabou tendo como vencedor ${Vencedor}`)
            }
            if (Velha && !Vencedor) {
                alert(`Deu velha!!!`)
            }


            let Historico = [...historicoJogadas]
            Historico.push(Jogada)
            setHistoricoJogadas(Historico)

            setVezJogador(Vez)
            setEstadoTabuleiro(Jogada)
            console.log(Jogada)
        }

    }
    const FimJogo = (tab) => {
        if (tab[0] && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0]
        if (tab[3] && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3]
        if (tab[6] && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6]
        if (tab[0] && tab[0] === tab[3] && tab[0] === tab[6]) return tab[0]
        if (tab[1] && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1]
        if (tab[2] && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2]
        if (tab[0] && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0]
        if (tab[2] && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2]
        return null
    }
    const DeuVelha = (tab) => {
        if (tab[0] && tab[1] && tab[3] && tab[4] && tab[5] && tab[6] && tab[7] && tab[8]) return tab[1]
    }

    const RetornarJogada = (jogada) => {
        let indexJogadaSelecionada = historicoJogadas.indexOf(jogada)
        setHistoricoJogadas(historicoJogadas.filter((item, indexItem) => (indexItem <= indexJogadaSelecionada)))
        setEstadoTabuleiro(jogada)

    }

    const ReiniciarJogo = () => {
        setEstadoTabuleiro(estadoTabuleiro.map((CelulaTabuleiro) => {
            return CelulaTabuleiro = null;
        }))
        setHistoricoJogadas([])
    }


    return (
        <div className="Jogo">
            <Cabecalho vez={vezJogador}></Cabecalho>
            <div className='Tabuleiro'>
                <div className='LinhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[0]} onClick={() => HandleClick(0)}></Celula>
                    <Celula valor={estadoTabuleiro[1]} onClick={() => HandleClick(1)}></Celula>
                    <Celula valor={estadoTabuleiro[2]} onClick={() => HandleClick(2)}></Celula>
                </div>
                <div className='LinhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[3]} onClick={() => HandleClick(3)}></Celula>
                    <Celula valor={estadoTabuleiro[4]} onClick={() => HandleClick(4)}></Celula>
                    <Celula valor={estadoTabuleiro[5]} onClick={() => HandleClick(5)}></Celula>
                </div>
                <div className='LinhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[6]} onClick={() => HandleClick(6)}></Celula>
                    <Celula valor={estadoTabuleiro[7]} onClick={() => HandleClick(7)}></Celula>
                    <Celula valor={estadoTabuleiro[8]} onClick={() => HandleClick(8)}></Celula>
                </div>
                <div className="BoardButton">
                    <button onClick={() => ReiniciarJogo()}>Reiniciar</button>
                </div>

            </div>

            <Rodape jogadas={historicoJogadas} FuncaoRetorno={RetornarJogada}></Rodape>
        </div>
    );
}