function criarCard(tarefa){
    const card = document.createElement("div")
    card.className = 'card'

    card.innerHTML = `
    `
}

function carregarCartao() {
    const tarefas = [
        {
            codTarefa: 1, codUsuario: 1, tipo: "suporte",
            area: "tecnologia", prioridade: "media", status: "A Fazer"
        },
        {
            codTarefa: 2, codUsuario: 1, tipo: "manutenção",
            area: "tecnologia", prioridade: "alta", status: "Fazendo"
        },
        {
            codTarefa: 3, codUsuario: 1, tipo: "programação",
            area: "tecnologia", prioridade: "baixa", status: "Pronto"
        }
    ]

    tarefa.forEach(tarefa =>{
        const card = criarCard(tarefa)
        const coluna = document.getElementsByClassName(`${tarefa.status.toLowCase}`)
    })
}
window.onload = carregarCartao