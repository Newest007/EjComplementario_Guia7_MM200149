const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    carnet: /^[A-Z]+[0-9]{6}$/, //Estructura del carnet de la U
    nombre: /^[a-zA-ZÀ-ÿ\s]{10,40}$/, //Permite letras, espacios y acentos
    dui: /^[0-9]{8}-[0-9]{1}$/, //Formato de DUI
    nit: /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/, //Formato de NIT
    fecha: /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/, //Formato de fecha
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Formato de correo
    edad: /^[0-9]{1,2}/ //Formato de edad
}

const campos = {
    carnet: false,
    nombre: false,
    dui: false,
    nit: false,
    fecha: false,
    correo: false,
    edad: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "carnet":
            validarCampo(expresiones.carnet, e.target, 'carnet');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "dui":
            validarCampo(expresiones.dui, e.target, 'dui');
        break;
        case "nit":
            validarCampo(expresiones.nit, e.target, 'nit');
        break;
        case "fecha":
            validarCampo(expresiones.fecha, e.target, 'fecha');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
        break;
    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) {
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos[campo] = true;
    } else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
