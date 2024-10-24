let res = document.getElementById('res')
let cadastrarTarefa = getElementById('cadastrarTarefa')
let prioridade = document.getElementById('prioridade')
let nomeSelect = document.getElementById('nome')
let area = document.getElementById('area')
let tipo = document.getElementById('tipo')

function carregarUsuarios() {
    fetch('http://localhost:3000/usuarios')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)

            usuarios.forEach(usuario => {
                const option = document.createElement('option')
                option.value = usuario.codUsuario
                option.textContent = usuario.nome
                nomeSelect.appendChild(option)
                if (coluna) {
                    coluna.appendChild(card)
                }
            })
        }).catch((err) => {
            console.error('Erro ao listar tarefas', err)
        })

}

window.onload = carregarTarefas