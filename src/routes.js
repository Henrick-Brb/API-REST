import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router()

//MOSTRA O BANCO DE DADOS
router.get('/selecoes', SelecaoController.index)

//MOSTRA UM ID DO BANCO DE DADOS
router.get('/selecoes/:id', SelecaoController.show)

//ADICIONA UM NOVO ID NO BANCO DE DADOS
router.post('/selecoes', SelecaoController.store)

//ATUALIZA UM ID NO BANCO DE DADOS
router.put('/selecoes/:id', SelecaoController.update)

//EXCLUI UM ID DO BANCO DE DADOS
router.delete('/selecoes/:id', SelecaoController.delete)

export default router
