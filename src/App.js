import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
import ListaCitas from './componentes/ListaCitas';
class App extends Component {
  state ={
    citas:[]
  }
  //pasamos la funcion crearCita para AgregarCita para que esta se comunique y puedan pasar los datos del formulario
  funcionCrearCita = (crearCita)=>{
      // console.log("datos desde AgregarCitas");
    const citas = [...this.state.citas, crearCita]
    console.log(citas);

    this.setState({
      citas
    })
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
        <div className="col-md-6">
          <ListaCitas
          citas={this.state.citas}
          />
        </div>
      </div>
     </div>
    );
  }
}

export default App;
