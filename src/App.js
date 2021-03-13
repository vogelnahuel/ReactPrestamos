
import React,{Fragment,useState} from 'react';
import Formulario from './componentes/formulario';
import Header from './componentes/Header.js'
import Mensaje from './componentes/Mensaje.js'
import Resultado from './componentes/Resultado.js'
import Spinner from './componentes/Spinner.js'



function App() {
    //definir state
const [cantidad,guardarCantidad] = useState(0);//retorna un vector [ valor,funcion] y uso el destructor para crear 2 variables

const [plazo,guardarPlazo] = useState('');

const [total,guardarTotal] = useState(0);

const [cargando,guardarCargando] = useState(false);

const leerCantidad = (e)=>{
      guardarCantidad(parseInt( e.target.value))
}
const leerPlazo = (e)=>{
    guardarPlazo(parseInt( e.target.value))
}

let componente;
if(cargando){
    componente = <Spinner />

}
else if(total===0){
    componente = <Mensaje />
}
else
{
   componente = <Resultado 
                     total={total}
                     plazo={plazo}
                     cantidad={cantidad}
                />
}

    return ( 
    <Fragment >
        <Header 
        titulo="cotizador de prestamos" 
        
        />
       <div className="container">
           <Formulario
           cantidad={cantidad}
           guardarCantidad={leerCantidad}
           plazo={plazo}
           guardarPlazo={leerPlazo}
           total={total}
           guardarTotal={guardarTotal}
           guardarCargando={guardarCargando}
           />
           <div className="mensajes">
                  {componente}
           </div>
       </div>
      
    </Fragment>
    );//siempre tiene que haber un div que contenga todo el contenido porque solo returna 1 solo componente que contenga los demas
}

export default App;