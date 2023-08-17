import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:4000/api/usuarios/"

export const apiUsuario = async () => {
    try {
        const listaUsuario = await axios.get(`${URL}mostrar`);
        console.log(listaUsuario.data);
        return listaUsuario.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteUsuario = async (id) => {
    try {
        const { data } = await axios.delete(`${URL}eliminar/${id}`);

        return true;
    } catch ({
        response: {
            data: { message },
        },
    }) {
        if (message === "Usuario Eliminado") {
            window.location.href = "/";
        }
        if (message) {
            return message;
        }
    }
};

export const createUsuario = async (carnet, nombre, direccion, genero, telefono, fechaNacimiento, carreraEstudio, generoPoesia) => {
    console.log(carnet);
    try {
      const { usuarioGuardado } = await axios.post(
        `${URL}agregar`,
        {
            carnet: carnet.carnet,
            nombre: carnet.nombre,
            direccion: carnet.direccion,
            genero: carnet.genero,
            telefono: carnet.telefono,
            fechaNacimiento: carnet.fechaNacimiento,
            carreraEstudio: carnet.carreraEstudio,
            generoPoesia: carnet.generoPoesia,


        },
      );
      return true;
    } catch (error){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No se pudo agregar el evento.",
      });
    }
  };