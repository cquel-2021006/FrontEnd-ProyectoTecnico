import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";

import { sendData } from "../helpers/formUsuario"
import { usuario } from "../models/usuario";


export const CreateUsuario = () => {
    const [agregar, setAgregar] = useState(usuario);
    const [agregarAño, setAgregarAño] = useState({
        usuario: {
            startDate: '',
            fechaNacimiento: '',
        }
    });

    const handleFechaNacimientoChange = (event) => {
        const fechaNacimiento = event.target.value;
        const today = new Date();
        const selectedDate = new Date(fechaNacimiento);
        const ageDiffMillis = today - selectedDate;
        const ageDate = new Date(ageDiffMillis);

        if ((ageDate.getUTCFullYear() - 1970) < 18) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No se pudo porque es menor de edad",
            });
            console.log("La persona es menor de 18 años.");
        } else {
            setAgregar({
                usuario: {
                    ...agregar.usuario,
                    fechaNacimiento: fechaNacimiento
                }
            });
            Swal.fire({
                icon: "success",
                title: "Genial!",
                text: "El usuario es mayor de edad",
            });
        }
    };

    console.log(agregar)
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData(agregar, 1);
    };

    return (
        <>
            <br />
            <div className="container" style={{ width: "50%" }}>
                <h1 id='create-evento' style={{ textAlign: "center" }}>Agregar Usuario</h1>
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Carnet</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Carnet"
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
                            required
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
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
                            required
                            type="text"
                            className="form-control"
                            placeholder="Dirección"
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
                        <Form.Select aria-label="Default select example"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        genero: event.target.value
                                    }
                                })}>
                            <option required>Elegir...</option>
                            <option >Masculino</option>
                            <option >Femenino</option>
                            <option>Sin especificar</option>
                        </Form.Select>
                    </div>

                    <div className="form-group">
                        <label className="text-black">Telefono</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Telefono"
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
                            required
                            type="date"
                            name="startDate"
                            value={usuario.startDate}
                            placeholder="Fecha de Nacimiento"
                            onChange={handleFechaNacimientoChange}
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">Carrrera de Estudio</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Carrera de Estudio"
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
                        <Form.Select aria-label="Default select example"
                            onChange={(event) =>
                                setAgregar({
                                    usuario: {
                                        ...agregar.usuario,
                                        generoPoesia: event.target.value
                                    }
                                })}>
                            <option required>Elegir...</option>
                            <option >lírica</option>
                            <option >épica</option>
                            <option>dramática</option>
                        </Form.Select>

                    </div>
                    <br />
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