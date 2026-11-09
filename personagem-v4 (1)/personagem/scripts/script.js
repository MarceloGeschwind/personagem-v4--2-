const form = document.getElementById("form");

form.onsubmit = function(event) 
{
    event.preventDefault();

    let sucesso = true;     // variável de estado que irá determinar se pode salvar personagem ou não
    const mensagemErro = document.getElementById("mensagemErro");

    // Resetando a mensagem de erro a cada tentativa
    mensagemErro.classList.add("d-none");

    const novo_personagem = {
        id: Date.now(),
        nome: document.getElementById("nomeInput").value,
        email: document.getElementById("emailInput").value,
        descricao: document.getElementById("descInput").value,
        ano: document.getElementById("anoInput").value,
        classe: document.getElementById("classeInput").value,
        urlAvatar: document.getElementById("avatarUrlInput").value,
        favorito: false
    };


    // validação da descrição
    if(novo_personagem.descricao.length < 20)
    {
        sucesso = false;
        mensagemErro.textContent = "Preencha a descrição corretamente! Ela deve ter mais de 20 caracteres.";
        mensagemErro.classList.remove("d-none");     
    }

    if(sucesso === true)
    {
        const lista_personagens = JSON.parse(localStorage.getItem("personagens")) || [];

        lista_personagens.push(novo_personagem);

        localStorage.setItem("personagens", JSON.stringify(lista_personagens));

        window.location.href = "personagens.html";
    }
}