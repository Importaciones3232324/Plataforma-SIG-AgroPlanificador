const mapaInteractivo = document.getElementById('idcajaMapaInteractivo');
const botonMapa1 = document.getElementById('botonInteractivoMapa1');
const botonMapa2 = document.getElementById('botonInteractivoMapa2');
const botonMapa3 = document.getElementById('botonInteractivoMapa3');
const mapaInteracLeyenda = document.getElementById('idcajaMapaInteractivoLeyenda');

function noTienesCuenta() {
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        window.location.href = "index.html";
        alert("No hay usuario registrado.");
    }
}
noTienesCuenta();

const estiloMapa = document.createElement('iframe');
    estiloMapa.src = 'https://www.google.com/maps/d/u/0/embed?mid=1_iRYtvjwoyK2qnOUoZjKdr4Erukc4ls&ehbc=2E312F&noprof=1';
    estiloMapa.width = '100%';
    estiloMapa.height = '100%';
    estiloMapa.style.border = 'none';
    estiloMapa.style.borderRadius = "15px";

    mapaInteractivo.appendChild(estiloMapa);

    botonMapa1.classList.add("botonesActivo");

    mapaInteracLeyenda.innerHTML = `
    <p class='textoLeyenda'>🔵 Frío extremo</p>
    <p class='textoLeyenda'>⚪ Baja temperatura</p>
    <p class='textoLeyenda'>🟢 Templado</p>
    <p class='textoLeyenda'>🟡 Calor moderado</p>
    <p class='textoLeyenda'>🔴 Calor intenso</p>
`;

botonMapa1.addEventListener("click", function() {
    botonMapa1.classList.add("botonesActivo");
    botonMapa2.classList.remove("botonesActivo");
    botonMapa3.classList.remove("botonesActivo");

    estiloMapa.src = 'https://www.google.com/maps/d/u/0/embed?mid=1_iRYtvjwoyK2qnOUoZjKdr4Erukc4ls&ehbc=2E312F&noprof=1';
    mapaInteractivo.appendChild(estiloMapa);

    mapaInteracLeyenda.innerHTML = `
    <p class='textoLeyenda'>🔵 Frío extremo</p>
    <p class='textoLeyenda'>⚪ Baja temperatura</p>
    <p class='textoLeyenda'>🟢 Templado</p>
    <p class='textoLeyenda'>🟡 Calor moderado</p>
    <p class='textoLeyenda'>🔴 Calor intenso</p>
    `;
});
botonMapa2.addEventListener("click", function() {
    botonMapa1.classList.remove("botonesActivo");
    botonMapa2.classList.add("botonesActivo");
    botonMapa3.classList.remove("botonesActivo");

    estiloMapa.src = 'https://www.google.com/maps/d/u/0/embed?mid=1x7eTidf4DFtM0PiBnQY30eodxgKiQo8&ehbc=2E312F&noprof=1';
    mapaInteractivo.appendChild(estiloMapa);

    mapaInteracLeyenda.innerHTML = `
    <p class='textoLeyenda'>⚪ Muy baja humedad</p>
    <p class='textoLeyenda'>🟡 Baja humedad</p>
    <p class='textoLeyenda'>🟢 Humedad moderada</p>
    <p class='textoLeyenda'>🔵 Alta humedad</p>
    <p class='textoLeyenda'>🟣 Humedad extrema</p>
    `;

});
botonMapa3.addEventListener("click", function() {
    botonMapa1.classList.remove("botonesActivo");
    botonMapa2.classList.remove("botonesActivo");
    botonMapa3.classList.add("botonesActivo");

    estiloMapa.src = 'https://www.google.com/maps/d/u/0/embed?mid=1JTrxmsQqRZHLcP3kCOcCQHcLLg7usyE&ehbc=2E312F&noprof=1';
    mapaInteractivo.appendChild(estiloMapa);
    
    mapaInteracLeyenda.innerHTML = `
    <p class="textoLeyenda">🟤 Fertilidad muy baja</p>
    <p class="textoLeyenda">🟡 Fertilidad baja</p>
    <p class="textoLeyenda">🟠 Fertilidad intermedia</p>
    <p class="textoLeyenda">🟣 Fertilidad elevada</p>
    <p class="textoLeyenda">🟢 Fertilidad óptima</p>
    `;
});