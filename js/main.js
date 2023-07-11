import AOS from 'aos';

 AOS.init({
    duration: 1000,
    offset: 100,
 });

 function typeWrite(elemento){
   const textoArray = elemento.innerHTML.split('');
   elemento.innerHTML = ' ';
   textoArray.forEach(function(letra, i){   
     
   setTimeout(() => {
       elemento.innerHTML += letra;
   }, 80 * i)
 });
}
const titulo = document.querySelector('.digitacao');
typeWrite(titulo);