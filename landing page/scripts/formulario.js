let alumnos = [];
// alert("Bienvenido a la pagina de registro de alumnos");
function Validar() {
// Obtener datos del formulario
    let formulario = document.getElementById('formulario');
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fechaNacimiento = document.getElementById('fecha').value;
    let telefono = document.getElementById('telefono').value;

        //Validar que los campos no estén vacíos
    if (nombre === '' || apellido === '' ||  fechaNacimiento === ''|| telefono === '') {
      alert('Por favor, complete todos los campos .');
        return;
      }

        //Validar campo de fecha (puedes personalizar esta validación según tus necesidades)
        if (fechaNacimiento === "") {
          alert("El campo de Fecha de Nacimiento no puede estar vacío");
          return false;
        }
    
    //Validar campo de teléfono (puedes personalizar esta validación según tus necesidades)
    let telefonoRegex = /^\d{3}-\d{8}$/; // Ejemplo de formato: 123-12345678
    if (!telefonoRegex.test(telefono.trim())) {
      alert('El número de teléfono ingresado no es válido. Formato esperado: XXX-XXXXXXXX');
      return;
    }
    
  //Crear código de descuento aleatorio
    // let generarCodigoDescuento() {
      let codigoDescuento = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
      window.alert("su codigo de descuento es:" + codigoDescuento); // Número aleatorio de 0 a 999999999
      //formulario.style.display = "none"; // Convertir a cadena y rellenar con ceros a la izquierda si es necesario

    // Crear un objeto con los valores ingresados
    let alumno = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        codigoDescuento: codigoDescuento, 
        "nombre completo": function() { return this.nombre + ' ' + this.apellido; }
    };
  
    alumnos.push(alumno);

    // Mostrar en la consola de desarrolladores
    console.log(alumnos);

    // Mostrar los registros de alumnos en una tabla
    let alumnosHTML = '<table border="1">\n';
    alumnosHTML += '<thead>\n';
    alumnosHTML += '<tr>\n';
    alumnosHTML += '<th>Nombre</th>\n';
    alumnosHTML += '<th>fechaNacimiento</th>\n';
    alumnosHTML += '<th>Correo</th>\n';
    alumnosHTML += '<th>codigo de descuento</th>\n'
    alumnosHTML += '</tr>\n';
    alumnosHTML += '</thead>\n';
    alumnosHTML += '<tbody>\n';
    for (let i = 0; i < alumnos.length; i++) {
        alumnosHTML += '<tr>\n';
        alumnosHTML += '<td>' + alumnos[i]['nombre completo']() + '</td>\n';
        alumnosHTML += '<td>' + alumnos[i]['fechaNacimiento'] + '</td>\n';
        alumnosHTML += '<td><a href="mailto:' + alumnos[i].correo + '">' + alumnos[i].correo + '</a></td>\n';
        alumnosHTML += '<td>' + alumnos[i]['codigoDescuento'] + '</td>\n';
        alumnosHTML += '</tr>\n';
    }
    alumnosHTML += '</tbody>\n';
    alumnosHTML += '</table>\n';

    // Limpiar formulario y informar que se ha guardado el alumno
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('telefono').value = '';
    window.alert('Se ha guardado el registro de ' + alumno["nombre completo"]());
    document.getElementById('alumnos').innerHTML = alumnosHTML;
  }
  