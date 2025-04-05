import { consult } from "../database/conexao.js"

class SelecaoRepository {

    //CRUD
    creat(selecao) {
        const sql = "INSERT INTO favoritos SET ?;"
        return consult(sql, selecao, 'Não foi possivel Cadastrar!')
    }

    findAll() {
        const sql = "SELECT * FROM favoritos;"
        return consult(sql, 'Não foi possivel Localizar!')
    }

    findById(id) {
        const sql = "SELECT * FROM favoritos WHERE id=?;"
        return consult(sql, id, 'Não foi possivel Localizar!')
    }

    update(selecao, id) {
        const sql = "UPDATE favoritos SET ? WHERE id=?;"
        return consult(sql, [selecao, id], 'Não foi possivel Atualizar!')
    }

    delete(id) {
        const sql = "DELETE FROM favoritos WHERE id=?;"
        return consult(sql, id, 'Não foi possivel Apagar!')
    }

}

// Padrão Sigleton
export default new SelecaoRepository()
