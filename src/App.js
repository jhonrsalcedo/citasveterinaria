import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
class App extends Component {
  state ={}
  //pasamos la funcion crearCita para AgregarCita para que esta se comunique y puedan pasar los datos del formulario
  funcionCrearCita = ()=>{
   
    console.log("datos desde AgregarCitas");
  }
  render() {
    return (
     <div className="container">
      <Header
        titulo={"Administrador de Pacientes de Veterinaria"}
      />
      <div className="row">
        <div className="col-md-6">
        <AgregarCitas
        crearCita ={this.funcionCrearCita}
      />
        </div>
      </div>
     </div>
    );
  }
}

export default App;
