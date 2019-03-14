import React, {Component} from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

export default class ListaCitas extends Component{
    render(){
        //pasamos del componente App padre a componente hijo(ListaCitas) por props para valicar si hay citas por medio de un object
        const citas = this.props.citas;

        const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administra tus citas aqui";
        return(
            <div className="card mt-5">
                <div className="card-body">
                <h4 className="card-title text-center">{mensaje}</h4>

                   <div>
                       {Object.keys(this.props.citas).map(cita =>(
                           <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                                funcionBorrarCita={this.props.funcionBorrarCita}
                           />
                       ))}
                   </div>

                </div>
            
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    funcionBorrarCita : PropTypes.func.isRequired
}