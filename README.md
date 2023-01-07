# DOM-JavaScript
Libreria Moment para poder estandarizar los formatos de las fechas entre todos los navegadores
console.log(moment(calendar.value).format("DD-MM-YYYY"));
Almacenamiento en la memoria del buscador. Existen dos por sesion y local en el siguiente caso se ve por sesion
sessionStorage.setItem("task",JSON.stringify(taskObj));--> donde sessionStorage.setItem selecciona los datos a guardar, 
y "JSON.stringify(taskObj)" es un metodo que toma el objeto de JS y los trasforma a String para que el sessionStorage pueda ser usado.
sessionStorage --> FUNCIONA PARA ALAMCENAR INFORMACION DE UNA INTERFACE, CUANDO SE RECARGA SE PERDERA LA INFORMACION.
localSessionStorage --> FUNCIONA PARA ALAMCENAR INFORMACION 

-->UUID es una libreria que permite generar identificadores unicos (en el proyecto se usa para identificar en el localStorage el indice del elemento a eliminar a darle el check )