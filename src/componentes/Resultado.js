import React from 'react';

const Resultado = ({total,plazo,cantidad}) => {
    let Mensual=(total/plazo);
    return(
  <div className="resultado">
      <h2>Resumen:</h2>
      <p>La cantidad solicitada es:${cantidad}</p>
      <p>A pagar en : ${plazo} meses</p>
      <p>Su pago mensual es de : ${Mensual.toFixed(2)} </p>
      <p> Total a pagar : ${total}</p>
  </div>
    )
}
 
export default Resultado;