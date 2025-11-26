📝 **TaskFlow API — Gerenciamento de Tarefas**

API REST desenvolvida com Node.js + TypeScript, documentada com Swagger, testada com Thunder Client e preparada para uso com Docker + PostgreSQL.

 Objetivos do Projeto

Gerenciar tarefas com CRUD completo

Disponibilizar documentação automática da API

Estrutura limpa, separada em módulos

Código escalável e fácil de manter

🧠 **Tecnologias Utilizadas**
Tecnologia	Função
Node.js + Express	Servidor HTTP da API
TypeScript	Tipagem estática e segurança
Swagger UI + JSDoc	Documentação automática
Docker + Postgres (futuro)	Banco persistente
Thunder Client	Testes da API
📁 **Estrutura do Projeto**

taskflow-api/
├─ src/
│ ├─ server.ts — inicialização do servidor
│ ├─ routes.ts — rotas CRUD de tarefas
│ └─ swagger.ts — configuração OpenAPI
├─ docker-compose.yml
├─ tsconfig.json
└─ package.json

🔥 **Como Executar**

Clonar o repositório
git clone https://github.com/oTalDoWaaase/taskflow-api.git

cd taskflow-api

**Instalar dependências**
npm install

**Rodar servidor**
npm run dev

🌐 **Endpoints Disponíveis**

GET /tasks → Lista tarefas
POST /tasks → Cria nova tarefa
PUT /tasks/{id} → Atualiza uma tarefa
DELETE /tasks/{id} → Remove tarefa

📘 **Documentação Swagger**

Abrir no navegador:

http://localhost:3000/docs

🐳 Docker (Banco PostgreSQL — opcional futuro)

docker-compose up -d

Conexão:
host: localhost
port: 5432
user: taskflow
password: taskflow
database: taskflow

📌 Conclusão

O desenvolvimento do projeto TaskFlow API proporcionou experiência completa de backend profissional com rotas REST, documentação, versionamento e testes.
A estrutura do código permite expansão para autenticação, banco de dados, dashboard web e mais funcionalidades futuramente.
