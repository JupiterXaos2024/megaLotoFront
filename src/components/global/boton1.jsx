import './css/StiloBotones.css'
function Boton1({text,onClick}){
    return(
        <div className='cont'>
            <div className="boton-1" onClick={onClick}> {text}</div>
        </div>
    )
}
export default Boton1