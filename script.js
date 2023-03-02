//Capturo todos los inputs de formulario
const inputs = document.querySelectorAll('.main-container-registracion .form-control')
const btnSubmit = document.querySelector('.btn-ingresar');
const form = document.getElementById('form')


//Expresiones Regulares para el formulario de Registracion
let expresiones = {
    // email: /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/,
    nombre: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/, //Regex solo letras y espacio
    // sexo: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/,
    // cuit: /^[0-9]{11}$/, //Regex solo 11 numeros
    fecha: /\d{4}-\d{2}-\d{2}/,// Formate fecha dd/mm/aaaa
    // : /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/,
}

//Funcion para validar el Formulario 
const validarFormulario =(e) => {
   switch (e.target.name){
    case "nombre":
        validarInputs(expresiones.nombre, e.target, 'nombre')
    break;
    // case "sexo":
    //     validarInputs(expresiones.sexo, e.target, 'sexo')
    // break;
    case "cuit":
        validarInputs(expresiones.cuit, e.target, 'cuit')
    break;
    case "nacimiento":
        validarInputs(expresiones.fecha, e.target, 'nacimiento')
    break;
    case "organismo":
        validarInputs(expresiones.organismo, e.target, 'organismo')
    break;
   }
  }




//Funcion para comparar regex con el valor del input agregando estilos
const validarInputs = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`input-${campo}`).classList.remove('is-invalid')
        document.getElementById(`input-${campo}`).classList.add('is-valid')
        document.getElementById(`notificacion-${campo}`).classList.add('visually-hidden')
    }else{
        document.getElementById(`input-${campo}`).classList.add('is-invalid')
        document.getElementById(`notificacion-${campo}`).classList.remove('visually-hidden')
    }
}



//Validacion sexo
const select = document.getElementById('input-sexo');
const notificacion = document.getElementById('notificacion-sexo')

const validacionSexo = () => {
    if(select.value != '1' && select.value != '2'){
        select.classList.add('is-invalid')
        notificacion.classList.remove('visually-hidden')
        console.log(select.value)
    } else {
        select.classList.remove('is-invalid')
        select.classList.add('is-valid')
        notificacion.classList.add('visually-hidden')
        console.log(select.value)
    }
}

const inputParentesco = document.getElementById('input-parentesco')
const notificacionParentesco = document.getElementById('notificacion-parentesco')
const validacionParentesco = () => {
    if(inputParentesco.value != 'Desplegar opciones'){
        select.classList.add('is-invalid')
        notificacion.classList.remove('visually-hidden')
        console.log(inputParentesco.value)
    } else {
        select.classList.remove('is-invalid')
        select.classList.add('is-valid')
        notificacion.classList.add('visually-hidden')
        console.log(inputParentesco.value)
    }
}
//btn para enviar la registracion
const formRegistracion = (e) => {
    e.preventDefault()
    const register = document.getElementById('registracion')
    register.textContent = `Su solicitud de registracion se ha enviado correctamente`
}

// form.addEventListener('submit', formRegistracion)

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

select.addEventListener('change', validacionSexo)
inputParentesco.addEventListener('change', validacionParentesco)

// validacionSexo()