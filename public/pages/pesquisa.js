   function renderizarMapa(latitude, longitude) {
            var map = L.map('map').setView([latitude, longitude], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Você está aqui.')
                .openPopup();
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                document.querySelector('p').innerHTML = "Latitude = " + position.coords.latitude + "<br>Longitude = " + position.coords.longitude;
                renderizarMapa(position.coords.latitude, position.coords.longitude);
            });
        } else {
            document.querySelector('p').innerHTML = "Geolocalização não suportada pelo seu navegador.";
        }

function telaPerfil(){
    window.location.href = 'van.html'
}
function telaSalvos(){
    window.location.href = 'salvos.html'
}
function telaHome(){
    window.location.href = '../../index.html'
}

function voltar() {
    window.history.back();
}



document.getElementById('salvos').addEventListener('click', telaSalvos)
document.getElementById('home').addEventListener('click', telaHome)
document.getElementById('perfil').addEventListener('click', telaPerfil)
document.getElementById('seta').addEventListener('click', voltar)


