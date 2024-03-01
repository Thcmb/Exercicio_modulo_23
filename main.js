document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.profile-avatar')
    const nome = document.querySelector('.profile-name');
    const usuario = document.querySelector('.profile-username');
    const repositorios = document.querySelector('.repositorios')
    const seguidores = document.querySelector('.seguidores');
    const seguindo = document.querySelector('.seguindo')
    const perfil = document.querySelector('.profile-link')
    const endpoint = "https://api.github.com/users/Thcmb"

    fetch(endpoint)
    .then(function(resposta) {
        if(resposta.ok){
            return resposta.json();
        }
        throw new Error('Erro ao carregar dados do usuário');
    })
    .then(function(json) {
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        usuario.innerText = '@' + json.login;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        perfil.href = json.html_url;
    })
    .catch(function(erro) {
        alert('Ocorreu um erro: ' + erro.message);
    })
})