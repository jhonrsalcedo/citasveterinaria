import React from 'react';

//funcional component otra forma de crear componentes
// se puede utilizar cuando no se van ha utilizar varios funciones ni manejar state en el
const Header = (props) =>{
    return(
        <div className="text-center"><h2>{props.titulo}</h2></div>
    )
}

export default Header;