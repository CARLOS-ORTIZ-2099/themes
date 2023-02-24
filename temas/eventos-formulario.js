

const formulario= document.getElementById('form')
const rememberpassword = document.getElementById('remember-password')

// formulario.addEventListener('submit',((e)=>{
//     console.log(e)
// }))


rememberpassword.addEventListener('change',((e)=>{
//  console.log(e)
    if(e.target.checked){  /* LO QUE ESTOY HACIENDO AQUI ES BASICAMENTE MANIPULANDO LOS VALORES DEVUELTOS POR EL EVENTO, COMO 
                              SABEMOS EL ACCIONAR QUE DESATA ESTOS EVENTOS DEVUELVE, COORDENADAS, VALORES BINARIOS, CALCULOS, ETC.
                              POR TAL RAZON ES IMPOORTANTE PONER UN PARAMETRO AL CALLBACK QUE GUARDE ESOS VALORES PARA SU FUTURA
                              MANIPULACION, EN RESUMEN LO QUE HACEMOS AQUI ES ACCEDER DE MANERA DESCENDENTE A UN DETERMINADO VALOR
                              DEL EVENTO PARA SU MANIPULACION   */
        
        alert(`quiere cambiar su password`)
    }else{
        alert(`no quiere cambiar su password`)
    }
}))




/* Los principales eventos de formulario son los siguientes:

submit ( se ejecuta cuando el formulario se envía)
change ( se ejecuta cuando un input del formulario cambia de valor)
focus ( se ejecuta al hacer click en un input)
blur ( se ejecuta cuando sales del focus)
reset ( se ejecuta cuando reseteas el formulario) */









