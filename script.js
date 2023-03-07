//Capturo todos los inputs de formulario
const inputs = document.querySelectorAll('.main-container-componente .form-control')
const btnConfirmar = document.querySelector('.btn-confirmar');
const btnAgregar = document.querySelector('.btn-agregar')
const form = document.getElementById('form-componente')
const inputSexo = document.getElementById('input-sexo');
const inputParentesco = document.getElementById('input-parentesco')


//Expresiones Regulares para el formulario de Componentes
let expresiones = {
    nombre: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]{1,50}$/, //Regex solo letras y espacio
    fecha: /\d{4}-\d{2}-\d{2}/,// Formate fecha dd/mm/aaaa
}

//Funcion para validar inputs sin desplegable del Formulario 
const validarFormulario =(e) => {
   switch (e.target.name){
    case "nombre":
        validarInputs(expresiones.nombre, e.target, 'nombre')
    break;
    case "nacimiento":
        validarInputs(expresiones.fecha, e.target, 'nacimiento')
    break;
   }
  }

  //----FUNCIONES PARA VALIDAR LOS DESPLEGABLES---
  
  //Funcion Validacion sexo
const validacionSexo = (e) => {
    validacionDesplegables(e.target, 'sexo')
    }

// Funcion Validacion Parentesco 
const validacionParentesco = (e) => {
    validacionDesplegables(e.target, 'parentesco')
}


//Funcion para comparar regex con el valor del input agregando estilos
const validarInputs = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`input-${campo}`).classList.remove('is-invalid')
        document.getElementById(`input-${campo}`).classList.add('is-valid')
        document.getElementById(`notificacion-${campo}`).classList.add('invisible')
    }else{
        document.getElementById(`input-${campo}`).classList.add('is-invalid')
        document.getElementById(`notificacion-${campo}`).classList.remove('invisible')
    }
}
 //Funcion valida desplegables
const validacionDesplegables = (input, campo) => {
    if(input.value !== 'Desplegar opciones'){
            document.getElementById(`input-${campo}`).classList.remove('is-invalid')
            document.getElementById(`input-${campo}`).classList.add('is-valid')
            document.getElementById(`notificacion-${campo}`).classList.add('invisible')
        }else{
            document.getElementById(`input-${campo}`).classList.add('is-invalid')
            document.getElementById(`notificacion-${campo}`).classList.remove('invisible')
    }
}


//btn para enviar los componentes agregados
const formSubmit = (e) => {
    e.preventDefault()
    const register = document.getElementById('registracion')
    register.textContent = `Su solicitud de registracion se ha enviado correctamente`
}



//----COMPONENTES AGREGADOS----



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)

})

inputSexo.addEventListener('change', validacionSexo)
inputParentesco.addEventListener('change', validacionParentesco)


let componentes = [];
const formAgregar = (e) =>{
    const nombre = document.getElementById('input-nombre').value
    const nacimiento = document.getElementById('input-nacimiento').value
    console.log('click')
    e.preventDefault
    componentes.push (nombre, nacimiento, inputSexo.value, inputParentesco.value)
    console.log(componentes)
}

form.addEventListener('submit', formSubmit);
btnAgregar.addEventListener('click', formAgregar);