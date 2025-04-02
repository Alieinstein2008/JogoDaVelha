import './Celula.css'

export default function Celula(props){
    return(
        <button className='Celula' onClick={props.onClick}>
            {props.valor}
        </button>
    )
}