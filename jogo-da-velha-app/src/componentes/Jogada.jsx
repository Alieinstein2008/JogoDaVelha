export default function Jogada(props) {
    const jogada = props.jogada 
    return (
        <div className="Jogada" onClick={props.onClick}>
            {jogada[0] || '_'} | {jogada[1] || '_'} | {jogada[2] || '_'}<br />
            {jogada[3] || '_'} | {jogada[4] || '_'} | {jogada[5] || '_'}<br />
            {jogada[6] || '_'} | {jogada[7] || '_'} | {jogada[8] || '_'}
        </div>
    )
}