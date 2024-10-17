const { Usuario } = require('../model/associacao')

const cadastrarUsuario = async (req, res) => {
    const valores = req.body
    console.log(valores)
    try {
        const pesq = Usuario.create(valores, { raw: true })
        res.status(201).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao cadastrar o usuário', err)
        res.status(500).json({ message: 'Erro ao cadastrar o usuário' })
    }
}

/*------------------------------------------------*/

const listarUsuario = async (req, res) => {
    try {
        const pesq = Usuario.findAll()
        console.log(pesq)
        res.status(200).json({ message: "Cadastro Concluído com Sucesso" })
    } catch (err) {
        console.error('Erro ao listar o usuário', err)
        res.status(500).json({ message: 'Erro ao listar o usuário' })
    }
}

module.exports = { cadastrarUsuario, listarUsuario }