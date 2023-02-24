/*  El evento principal para el DOM es el siguiente:

DOMContentloaded (es un evento que ocurre cuando carga todo el DOM). Este evento es importante cuando no sabes en qué momento existirá el elemento al que vas a llamar.

Los principales eventos del navegador son los siguientes:

load ( este es parecido al DOMContentloaded pero, este se ejecuta cuando carga toda la página).
scroll ( se ejecuta cuando haces scroll ).
resize ( se ejecuta cuando redimensionas la pantalla ).
Inner se refiere a la parte interna del navegador, la ventana o el viewport, y  */



//* UNA FORMA DE SOLUCIONAR EL PROBLEMA DE QUE EL SCRIPT CARGE ANTES QUE EL DOCUMENTO HTML, ES CON LA PROPIEDAD DE: DOMContentloaded */

window.addEventListener('DOMContentloaded',(()=>{



/* EN ESTE APARTADO PONEMOS LA PALABRA RESERVADA WINDOW QUE INDICA QUE SE EJECUTA POR SOBRE TODOS LOS DEMAS ELEMENTOS, AUNQUE TAMBIEN PODEMOS
   PRESINDIR DE EL */


const rememberpassword = document.getElementById('remember-password')

rememberpassword.addEventListener('change',((e)=>{
    
        if(e.target.checked){ 
            /* CHECKED NOS DICE SI UN ELMENTO A SIDIO ACTIVADO */
            alert(`quiere cambiar su password`)
        }

            else{

            alert(`no quiere cambiar su password`)
        }
    }))
    
}))




window.addEventListener('scroll',((e)=>{
    // console.log(e);
    console.log(scrollX,scrollY) /* NOS DEVUELVE LAS OORDENADAS DE LA PANTALLA AL HACER SCROOL */
}))



/* ESTA PROPIEDAD ES UTIL CUANDO REDIMENSIONAMOS LA PANTALLA */

window.addEventListener('resize',((e)=>{
        // console.log(e)
        console.log(innerWidth,innerHeight) /* es la medida del area de la pantalla interna es decir la que abarca solo el interior del marco */
    
        console.log(outerWidth,outerHeight) /* es la medida de la toda la ventana del navegador */
}))


