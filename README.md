# 📝 TaskFlow API — Gerenciamento de Tarefas

API REST desenvolvida com **Node.js + TypeScript**, documentação com **Swagger**, e ambiente Docker configurado para uso com **PostgreSQL**.  
Projeto focado na demonstração de arquitetura limpa, organização de rotas e testes via Thunder Client.

---

## 🚀 Objetivo

✔ Gerenciamento de Tarefas (CRUD)  
✔ Documentação automática com Swagger  
✔ Estrutura profissional com TypeScript  
✔ Execução simples via NPM  
✔ Preparado para integração com banco de dados  

---

## 🧠 Tecnologias Utilizadas

| Tecnologia | Função |
|-----------|--------|
| **Node.js + Express** | API HTTP principal |
| **TypeScript** | Tipagem estática e segurança |
| **Swagger UI + JSDoc** | Documentação automática |
| **Docker + Postgres** | Banco de dados isolado |
| **Thunder Client** | Testes REST dentro do VSCode |

---

## 📁 Estrutura do Projeto
taskflow-api/
├── src/
│ ├── server.ts // Inicialização do servidor
│ ├── routes.ts // CRUD de tarefas
│ └── swagger.ts // Configuração da documentação
├── docker-compose.yml // DB containerizado
├── package.json
└── tsconfig.json

yaml
Copiar código

---

## 🔥 Como rodar o projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/oTalDoWaaase/taskflow-api.git
cd taskflow-api


2. Instalar dependências
bash
Copiar código
npm install


3. Rodar servidor em dev
bash
Copiar código
npm run dev
🌐 Endpoints
Método	Rota	Descrição
GET	/tasks	Lista todas as tarefas
POST	/tasks	Cria uma nova tarefa
PUT	/tasks/{id}	Atualiza uma tarefa existente
DELETE	/tasks/{id}	Remove uma tarefa

📘 Acessar Documentação Swagger
📌 URL → http://localhost:3000/docs

A interface exibe todos os endpoints, parâmetros e exemplos de uso.

🐳 Docker + PostgreSQL
Caso queira subir o banco pelo Docker:

bash
Copiar código
docker-compose up -d
Banco sobe em:

makefile
Copiar código
localhost:5432
user: taskflow
password: taskflow
database: taskflow
📸 Prints da API em execução
A seguir ficam registradas as telas que comprovam funcionalidade, rotas e documentação do sistema:

🟢 Servidor rodando
🟢 Rotas funcionando
🟢 Swagger documentando corretamente
