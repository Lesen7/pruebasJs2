var enlacesNormales = document.getElementsByTagName('a');
var enlacesExternos = 0;
var elementosDiv = document.getElementsByTagName('div');
var numeroParrafos;
var footer = document.getElementById('footer');


function buscarEnlacesExternos () {
  for (var i = 0; i < enlacesNormales.length; i++) {
    console.log(enlacesNormales[0].getAttribute('href'));

    if (enlacesNormales[i].getAttribute('href').startsWith('http://') || enlacesNormales[i].getAttribute('href').startsWith('http://')) {
      enlacesExternos++;
    }
  }
}

function parrafosPorDiv (numeroDiv) {
  var parrafosDiv = elementosDiv[numeroDiv].getElementsByTagName('p');
  numeroParrafos = parrafosDiv.length;
}

buscarEnlacesExternos();
parrafosPorDiv(1);

alert('El div número 2 tiene ' + numeroParrafos + ' parrafos.' );
alert('La página tiene ' + enlacesNormales.length + ' enlaces.');
alert('La página tiene ' + enlacesExternos + ' enlaces externos.');

var enlaceFacebook = document.createElement('a');
enlaceFacebook.setAttribute('href', 'https://www.facebook.com/');
var contenidoFacebook = document.createTextNode('Facebook');
var parrafoFacebook = document.createElement('p');
enlaceFacebook.appendChild(contenidoFacebook);
parrafoFacebook.appendChild(enlaceFacebook);
footer.appendChild(parrafoFacebook);

var enlaceGoogle = document.createElement('a');
enlaceGoogle.setAttribute('href', 'https://www.google.es/');
var contenidoGoogle = document.createTextNode('Google');
var parrafoGoogle = document.createElement('p');
enlaceGoogle.appendChild(contenidoGoogle);
parrafoGoogle.appendChild(enlaceGoogle);
footer.appendChild(parrafoGoogle);
