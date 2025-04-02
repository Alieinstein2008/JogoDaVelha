import './Rodape.css'
import Jogada from './Jogada'

export default function Rodape(props){
    
    

    const jogadas = props.jogadas.map(
        (jogada, index) => <Jogada key={index} jogada={jogada} onClick={()=>props.FuncaoRetorno(jogada)}></Jogada>);
    return(
        <footer className="Rodape">
            <p>Histórico de Jogadas:</p>
            <div>
                {jogadas}
            </div>
            
        </footer>
    )
}