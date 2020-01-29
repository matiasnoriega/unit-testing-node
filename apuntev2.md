# Fundamentos de Testing

## ¿Que es testing?
Poner a prueba un codigo para verificar si cumple con los requerimientos

## Tipos de Testing
### Unit Test
* Objetivo: validar la funcionalidad del codigo aislado
* Consiste en testear la salidad de una "unidad" (funcion pura)
* no dependen de otros recursos (DB)
### Test de Integracion
* Objetivo: verificar el fluo de datos y la interaccion de los componentes
* testear el comportamiento de dos o mas unidades juntas, es un test de integracion
### End to End
* Verificar el comportamiento cconjunto de toda la aplicacion
* Se utiliza poco si ya se si hucieron los unitarios y de integracion
* Son costosos y demandan tiempo
## Ventajas
* Automatización
* Ahorro de tiempo (y dinero)
* Seguridad para continuar desarrollando
## Forma de trabajo
### Habitual
1. Diseño
2. Codigo
3. Test
### Ideal
1. Diseño
2. Test
3. Codigo

## Beneficios del TDD
1. Codigo mas limpio
2. Mejora la calidad del producto
3. Los test sirven como documentacion y ejemplos de uso

## Buenas prácticas de testeo
* El nombre del test debe describir el proposito y la especificacion
* Un test unitario abarca solamente un concepto
* Codigo limpio, no redundante, prolijo
* Comentarios unicamente si aportan claridad
* TEstear todo lo necesario, incluso aunque parezca obvio

En *npm.com* en la pagina de cada paquete "coverage" muestra lo referente al testing

Primero codear el unit test y después codear la función per sé

Siempre se acompaña el test en paralelo, con el nombre del archivo çon la extensión .test antes de la extensión propiamente dicha.

 `npx mocha src/**/*.test.js` con esto se corren los testeos con Mocha y Chai