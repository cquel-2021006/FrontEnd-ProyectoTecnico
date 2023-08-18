import Swal from "sweetalert2";
import { createUsuario } from "../Api/apiUsuario";

export const sendData = async (state, option) => {
    let resultado;
    console.log(state.usuario);
    switch (option) {
        case 1:
            resultado = await createUsuario({
                carnet: state.usuario.carnet,
                nombre: state.usuario.nombre,
                direccion: state.usuario.direccion,
                genero: state.usuario.genero,
                telefono: state.usuario.telefono,
                fechaNacimiento: state.usuario.fechaNacimiento,
                carreraEstudio: state.usuario.carreraEstudio,
                generoPoesia: state.usuario.generoPoesia,
                fechaInscripcion: state.usuario.fechaInscripcion
            });
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Se agrego concursante",
                    showConfirmButton: true,
                    confirmButtonText: "Ok",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/"
                    } else {
                        window.location.href = "/"
                    }
                });
            }
            break;
    }
}