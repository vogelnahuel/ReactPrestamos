import React,{Fragment} from 'react';
function Header(props){
    //console.log(props) //es un objeto con un atributo titulo de app.js
    return (
        <Fragment>
        <h1>{props.titulo}</h1> 
       
        </Fragment>
    );//para que lea js en html es { y aca va  JS }
    //lo que se coloca aca es lo que se retorna en pantalla
}
export default Header;