# TaskFlow API ✅

API REST para gerenciamento de tarefas, desenvolvida para a disciplina de **Desenvolvimento de Sistemas**.  
O objetivo é disponibilizar um backend organizado, documentado e pronto para integração com um front-end.

---

## 🧰 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Swagger (OpenAPI 3.0)**
- **Docker + PostgreSQL**
- **Thunder Client** (para testes de rotas)

---

## 📂 Estrutura do Projeto

```bash
taskflow-api/
├── src/
│   ├── server.ts      # Configuração do servidor Express
│   ├── routes.ts      # Rotas de tarefas (CRUD)
│   └── swagger.ts     # Configuração da documentação Swagger
├── docker-compose.yml # Container do PostgreSQL
├── package.json
└── tsconfig.json
🚀 Como Rodar o Projeto
1. Clonar o repositório
bash
Copiar código
git clone https://github.com/oTalDoWaaase/taskflow-api.git
cd taskflow-api
2. Instalar dependências
bash
Copiar código
npm install
3. Subir somente a API
bash
Copiar código
npm run dev
A API ficará disponível em:

http://localhost:3000/health → rota de teste

http://localhost:3000/tasks → lista de tarefas

🐘 Banco de Dados com Docker (PostgreSQL)
O arquivo docker-compose.yml prepara um container com PostgreSQL:

yaml
Copiar código
services:
  db:
    image: postgres:16
    container_name: taskflow-db
    restart: always
    environment:
      POSTGRES_USER: taskflow
      POSTGRES_PASSWORD: taskflow
      POSTGRES_DB: taskflow
    ports:
      - "5432:5432"
Para subir o banco:

bash
Copiar código
docker compose up -d
📚 Documentação da API (Swagger)
A documentação automática foi gerada com Swagger UI e swagger-jsdoc.

Após rodar npm run dev, acesse:

text
Copiar código
http://localhost:3000/docs
Lá é possível visualizar e testar todas as rotas da API.

Endpoints disponíveis
GET /tasks → Lista todas as tarefas

POST /tasks → Cria uma nova tarefa

PUT /tasks/{id} → Atualiza uma tarefa existente

DELETE /tasks/{id} → Remove uma tarefa pelo ID

✅ Exemplos de Request
Criar uma tarefa (POST /tasks)
json
Copiar código
{
  "title": "Estudar Desenvolvimento",
  "description": "Aprender rotas, Swagger e Docker"
}
Resposta:

json
Copiar código
{
  "id": 1,
  "title": "Estudar Desenvolvimento",
  "description": "Aprender rotas, Swagger e Docker",
  "status": "pendente"
}
👨‍💻 Autor
Desenvolvido por Luís Eduardo (oTalDoWaaase)
Projeto acadêmico para a disciplina de Desenvolvimento de Sistemas.
