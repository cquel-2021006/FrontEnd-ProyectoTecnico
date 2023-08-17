import React, { useState } from "react"

import { sendData } from "../helpers/formUsuario"
import { usuario } from "../models/usuario";


export const CreateUsuario = () => {
    const [agregar, setAgregar] = useState(usuario);
    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1 );
    };

    return (
        <>
            <br />
            <div className="container">
                <h1 id='create-evento'>Agregar Usuario</h1>
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Carnet</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        carnet: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Nombre</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        nombre: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Direccion</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        direccion: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">Genero</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        genero: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">Telefono</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        telefono: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">Fecha de Nacimiento</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        fechaNacimiento: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">Carrrera de Estudio</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        carreraEstudio: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">Genero de la poseia</label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        generoPoesia: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="container text-center">
                        <button id='btn-enviar' type="submit" className="btn">
                            Enviar
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}