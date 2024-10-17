const { Tarefa } = require('../model/associacao')

const cadastrarTarefa = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = Tarefa.create(valores, { raw: true })
        res.status(201).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao cadastrar a tarefa', err)
        res.status(500).json({ message: 'Erro ao cadastrar a tarefa' })
    }
}

module.exports = { cadastrarTarefa }