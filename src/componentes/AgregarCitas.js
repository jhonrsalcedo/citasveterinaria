import React, {Component} from 'react';
import uuid from 'uuid';

class AgregarCitas extends Component {
    state = {
        error:false,
            id: uuid(),
            nombreMascotaValue:'',
            propietarioValue:'',
            fechaValue:'',
            horaValue:'',
            sintomaValue:'', 
      }
      HandleCrearNuevaCita =(e) =>{
        e.preventDefault();
        if(this.state.nombreMascotaValue === '' || this.state.propietarioValue === '' || this.state.fechaValue === '' || this.state.horaValue === '' || this.state.sintomaValue === ''){
            this.setState({
                error:true
            })
           }else{  
               this.setState({
                error:false,
                id: uuid(),
                nombreMascotaValue:'',
                propietarioValue:'',
                fechaValue:'',
                horaValue:'',
                sintomaValue:'', 
               })
        const citasForm = this.state
    //    console.log(citasForm);
        // console.log(e.target.nombreMascotaValue.value)

        // se envia el objeto hacia el padre para que actualizar el state
        this.props.crearCita(citasForm);

            // reinicia el formulario
            this.setState({
                error:false,
                nombreMascotaValue:'',
                propietarioValue:'',
                fechaValue:'',
                horaValue:'',
                sintomaValue:'', 
            })
           }
    }

    HandleCitasInput = (e) =>{
     
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const existeError =  this.state.error;
        return ( 


            <div className="card mt-5">
            <div className="card-body">
                <h4 className="card-title text-center mb-4">Agrega las citas Aqui</h4>
                <form onSubmit={this.HandleCrearNuevaCita}>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label" htmlFor="nombreMascotaValue">Nombre Mascota</label>
          <div className="col-sm-8 col-lg-10">
              <input type="text" className="form-control" placeholder="Nombre Mascota" name="nombreMascotaValue" id="nombreMascotaValue" onChange={this.HandleCitasInput} value={this.state.nombreMascotaValue}/>
          </div>
      </div>
      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label" htmlFor="propietarioValue">Nombre Dueño</label>
          <div className="col-sm-8 col-lg-10">
              <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" name="propietarioValue" id="propietarioValue" onChange={this.HandleCitasInput} value={this.state.propietarioValue} />
          </div>
      </div>

       <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
          <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input type="date" className="form-control"  name="fechaValue" onChange={this.HandleCitasInput} value={this.state.fechaValue}/>
          </div>                            

          <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
          <div className="col-sm-8 col-lg-4">
              <input type="time" className="form-control" name="horaValue" onChange={this.HandleCitasInput} value={this.state.horaValue}/>
          </div>
      </div>

      <div className="form-group row">
          <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
          <div className="col-sm-8 col-lg-10">
              <textarea  className="form-control" name="sintomaValue" onChange={this.HandleCitasInput} value={this.state.sintomaValue}></textarea>
          </div>
      </div>
      <div className="form-group row justify-content-end">
          <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">Agregar</button>
          </div>
      </div>
  </form>
  {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorio</div> : '' }
                </div>
            </div>
         );
    }
}
 
export default AgregarCitas;