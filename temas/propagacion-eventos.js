
document.querySelectorAll('div').forEach((e)=>{
    e.addEventListener('click',(()=>{
        console.log(`hizo click`)
    }))
    
})


/* Cada vez que ocurre un evento, este ocurre en el elemento más profundo en el DOM pero, se propaga hacia arriba. El término utilizado para esto es bubble

Esto significa que cada vez que estás dentro de un elemento hijo de otro elemento, al mismo tiempo estás entrando en ambos elementos.

Por ejemplo, tienes un div padre en HTML y dentro tienes un div hijo y dentro de este hijo tienes otro div hijo, si le das click al último hijo que sería en este
caso el tercero, también le estarías dando click al primer div que sería el padre.
Esta prolongación la hará hasta llegar al windows Siempre tener pendiente que con .target podrás hacer énfasis solo a uno de los hijos, porque allí estaría el target
en el elemento más profundo, pero teniendo en cuenta que de todas maneras seguirás pasando de igual forma por los padres. Para detener esta propagación podrás usar el
método stopPropagation() */
