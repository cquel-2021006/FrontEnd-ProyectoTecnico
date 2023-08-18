import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { useReactToPrint } from 'react-to-print';

import { DeleteUsuario, apiUsuario } from "../Api/apiUsuario";


export const ListaUsuario = () => {
    const componentPdf = useRef();

    const [ListaUsuario, setListaUsuario] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const [usuario, setUsuario] = useState([]);

    const navigate = useNavigate();

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleOpenModal = (u) => {
        setShowModal(true);
        setUsuario(u);
    };

    const viewUsuario = async () => {
        const usuarioList = await apiUsuario();
        setListaUsuario(usuarioList);
    }

    useEffect(() => {
        viewUsuario();
    }, [showModal]);

    const generatePDF = useReactToPrint({
        content: () => componentPdf.current,
        documentTitle: "Userdata",
        onAfterPrint: () => alert("Se ha salvado el PDF")

    });

    const eliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará el usuario permanentemente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        });

        if (confirmacion.isConfirmed) {
            let result = await DeleteUsuario(id);
            if (result) {
                setListaUsuario(ListaUsuario.filter((c) => c._id !== id));
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Se eliminó el Usuario correctamente!",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se pudo eliminar el usuario.",
                });
            }
        }
    };


    return (
        <div>
            <div style={{
                backgroundColor: " #f8f7f6",
                textAlign: "center",
                opacity: "100%",
                marginBottom: "20px",
            }}>
                <h1 style={{ opacity: "100%" }}>Lista de Declamacion</h1>
            </div>
            <Link to="/agregarUsuario" className="nav-link" aria-current="page">
                <div className='d-grid gap-2 col-6 mx-auto' style={{ marginBottom: "10px" }}>
                    <button className='btn btn-success' type='button'
                        onClick={(event) => {
                            event.preventDefault();
                            navigate("/agregarUsuario");
                        }}>
                        Agregar Declamante
                    </button>
                </div>
            </Link>

            <div ref={componentPdf} style={{ width: "100%" }}>
                <div className='container'>
                    <Table striped bordered hover>
                        <thead style={{ backgroundColor: "#FAD7A0" }} className="text-center">
                            <tr>
                                <th>CARNET</th>
                                <th>NOMBRE</th>
                                <th>DIRECCION</th>
                                <th>GENERO</th>
                                <th>TELEFONO</th>
                                <th>FECHA NACIMIENTO</th>
                                <th>CARRERA</th>
                                <th>GENERO POESIA</th>
                                <th>FECHA INSCRIPCION</th>
                                <th>OPTIONS</th>
                            </tr>
                        </thead>

                        {ListaUsuario?.map((t) => {
                            return (
                                <tbody key={t._id} className="text-center">
                                    <tr>
                                        <td>{t.carnet}</td>
                                        <td>{t.nombre}</td>
                                        <td>{t.direccion}</td>
                                        <td>{t.genero}</td>
                                        <td>{t.telefono}</td>
                                        <td>{t.fechaNacimiento}</td>
                                        <td>{t.carreraEstudio}</td>
                                        <td>{t.generoPoesia}</td>
                                        <td>{t.fechaInscripcion}</td>

                                        <td>
                                            <div className="d-grid gap-2">
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => {
                                                        eliminar(t._id);
                                                    }}
                                                    style={{ backgroundColor: "#CD5C5C", border: "none" }}
                                                >
                                                    <i className="fa fa-trash mx-2"></i>Eliminar
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </Table>

                </div>
            </div>
            <div style={{
                marginBottom: "20px", textAlign: "center",
                opacity: "100%",
            }} onClick={generatePDF}>
                <button className="btn btn-secondary" type='button'>
                    Imprimir PDF
                </button>
            </div>
        </div>
    );
}
