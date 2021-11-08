import React from 'react';

export const NavBar = ({ showForm, changeState }) => {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">Simulador de Tweets</span>
                <button 
                    className={ showForm ? 'btn btn-danger' : 'btn btn-success'  } 
                    type="submit"
                    onClick={ changeState }  
                >
                { showForm ? 'Cerrar tweet' : 'Nuevo tweet'  }
                </button>
            </div>
        </nav>
    )
}
