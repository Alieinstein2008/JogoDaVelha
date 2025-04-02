import './Cabecalho.css'

export default function Cabecalho({vez}){
    return(
        <header className="Cabecalho">
            <h1>J<span>o</span>g<span>o</span> da Velha</h1>
            <p>Vez de Jogador: <span className='CorVez'>{vez}</span></p>
        </header>
    )
}