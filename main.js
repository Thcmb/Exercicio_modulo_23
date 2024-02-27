document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.profile-avatar')
    const nome = document.querySelector('.profile-name');
    const usuario = document.querySelector('.profile-username');
    const repositorios = document.querySelector('.repositorios')
    const seguidores = document.querySelector('.seguidores');
    const seguindo = document.querySelector('.seguindo')
    const perfil = document.querySelector('.profile-link')

    fetch("https://api.github.com/users/Thcmb")
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        nome.innerHTML = json.name;
        usuario.innerHTML = '@' + json.login;
        repositorios.innerHTML = json.public_repos;
        seguidores.innerHTML = json.followers;
        seguindo.innerHTML = json.following;
        perfil.href = json.html_url;
    })
})