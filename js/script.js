 // Aquí tu código
 const agregarBtn= document.getElementById('agregar');
 const lista = document.getElementById('lista');
 agregarBtn.addEventListener('click'
 ,function(){
    const nuevoElemento = prompt('ingresa el nuevo:');
    if(nuevoElemento){
        const li = document.createElement('li');
        li.textContent = nuevoElemento;
        lista.appendChild(li);
    }
 });