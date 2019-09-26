import React from 'react';
import Modal from './Modal';

function SavePokemonsModal(props) {
    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <div className="SavePokemonsModal">
            <h1>¿Estás seguro?</h1>
            <p>Los pokemones que vas a guardar son los siguientes:</p>
                
            <div>
                <button onClick={props.onClose} className="btn btn-success mr-4">Guardar</button>
                <button onClick={props.onClose} className="btn btn-primary">Cancelar</button>
            </div>
        </div>
    </Modal>
}

export default SavePokemonsModal;