#  API-REST

API-REST desenvolvida com Node.js para gerenciamento de **seleções de times**. Permite realizar operações **CRUD** completas com persistência dos dados em um banco **MySQL**. As requisições são testadas usando o **Insomnia**.

---

## 🚀 Tecnologias

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="Express" style="background-color: white; padding: 5px; border-radius: 5px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" alt="MySQL"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="NPM"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"/> 
</p>

---

## 🛠️ Como Rodar

```bash
# Instale as dependências
npm install

# Inicie o servidor em modo desenvolvimento
npm run dev
```

---

## 📦 Requisitos

- ✅ **Node.js** e **npm**
- ✅ **MySQL** instalado e rodando
- ✅ **Insomnia** (ou qualquer cliente REST) para testar as rotas

---

## 📌 Funcionalidades

- ✅ **GET** - Listar seleções
- ✅ **POST** - Criar nova seleção
- ✅ **PUT** - Atualizar seleção
- ✅ **DELETE** - Deletar seleção

---

## 🧪 Exemplos de Requisições

### 🔸 GET - Listar todas
```
GET http://localhost:3000/selecoes
```

### 🔸 POST - Criar nova
```json
POST http://localhost:3000/selecoes

{
  "id": 10,
  "nome": "Inglaterra",
  "grupo": "C"
}
```

### 🔸 PUT - Atualizar
```json
PUT http://localhost:3000/selecoes/1

{
  "id": 8,
  "nome": "Belgica",
  "grupo": "F"
}
```

### 🔸 DELETE - Remover
```
DELETE http://localhost:3000/selecoes/8
```

---

## 📜 Licença

Este projeto está licenciado sob a **LICENSE**.  
Sinta-se livre para estudar, modificar e utilizar como quiser.

---

## 🙌 Observações

- Projeto criado para fins de **aprendizado** e **prática com API REST**.
- Nenhuma contribuição externa é necessária no momento.

---
