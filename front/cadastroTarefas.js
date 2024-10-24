function carregarUsuarios() {
    fetch('http://localhost:3000/usuarios')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            // tarefas.forEach(tarefa => {
            //     const card = criarCard(tarefa)
            //     const coluna = document.getElementById(`${tarefa.status.toLowerCase().replace(' ', '-')}`)

            //     if (coluna) {
            //         coluna.appendChild(card)
            //    }
            //})
        }).catch((err) => {
            console.error('Erro ao listar tarefas', err)
        })

}

window.onload = carregarTarefas