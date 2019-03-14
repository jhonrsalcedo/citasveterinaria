import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Cita extends Component{
    eliminarCita = () =>{
     
        this.props.funcionBorrarCita(this.props.info.id)
    }
    render(){
        //utilizamos destructuring 
        const {fechaValue, horaValue,nombreMascotaValue, propietarioValue, sintomaValue } = this.props.info;
        console.log(this.props.info);
        return(
            <div className="media mt-3">
                <div className="media-body">
                    <h4 className="mt-0"><span className="badge badge-info">{nombreMascotaValue}</span></h4>
                    <p className="m-0"><b>Nombre del Duenio:</b> {propietarioValue}</p>
                    <p className="m-0"><b>Fecha:</b> {fechaValue}</p>
                    <p className="m-0"><b>Hora:</b> {horaValue}</p>
                    <p className="m-0"><b>Sintomas:</b> </p>
                    <p>{sintomaValue}</p>
                    <button onClick={this.eliminarCita} className="btn btn-danger">Borrar &times;</button>
                </div>

            </div>

        );
    }
}

Cita.propTypes ={
    info: PropTypes.shape({
        fechaValue : PropTypes.string.isRequired,
        horaValue : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        nombreMascotaValue : PropTypes.string.isRequired,
        propietarioValue : PropTypes.string.isRequired,
        sintomaValue : PropTypes.string.isRequired,
    }),
    funcionBorrarCita : PropTypes.func.isRequired
}