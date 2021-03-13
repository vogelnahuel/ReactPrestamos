import React,{useState,Fragment} from 'react';
import   {calcularTotal} from '../helpers.js'

function Formulario(props){

const {cantidad,guardarCantidad,plazo,guardarPlazo,total,guardarTotal,guardarCargando}=props;

const [error,guardarError]= useState(false)

    //cuando el usuario hace submit
function calcularPrestamo(e){
    e.preventDefault();
    if(cantidad ===0 &&plazo  ===''){
      
        guardarError(true)
        return;
    }
    
    //eliminar error previo
    guardarError(false)


    guardarCargando(true);
    setTimeout(() => {

                //realizar cotizacion
            const total= calcularTotal(cantidad,plazo);

            //una vez calculado guardar total
            guardarTotal(total);

            //desabilitar spinner
            guardarCargando(false);
    }, 3000);

  

   
}
return(
    <Fragment>
        <form onSubmit={calcularPrestamo}>
            
        <div className="row">
            <div>
                <label>Cantidad Prestamo</label>
                <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Ejemplo: 3000" 
                    onChange={guardarCantidad}
                />
            </div>
            <div>
                <label>Plazo para Pagar</label>
                <select 
                    className="u-full-width"
                    onChange={guardarPlazo}
                >
                    <option value="">Seleccionar</option>
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                </select>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Calcular" 
                    className="button-primary u-full-width" 
                />
            </div>
        </div>
</form>
    { error ? <p className="error">Todos los campos son Obligatorios</p> : null }
    

</Fragment>
    )
}
export default Formulario;