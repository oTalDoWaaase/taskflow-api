import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export function setupSwagger(app: Express) {
  const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "TaskFlow API",
        version: "1.0.0",
        description:
          "API REST para **Gerenciamento de Tarefas**.\n\n" +
          "Permite criar, listar, atualizar e remover tarefas de forma simples. " +
          "Ideal para estudos de backend com Node.js, TypeScript e Swagger.",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Ambiente de desenvolvimento",
        },
      ],
      tags: [
        {
          name: "Tasks",
          description: "Operações de gerenciamento de tarefas",
        },
      ],
      components: {
        schemas: {
          Task: {
            type: "object",
            properties: {
              id: {
                type: "string",
                example: "1",
              },
              title: {
                type: "string",
                example: "Estudar Node.js",
              },
              description: {
                type: "string",
                example: "Assistir aula sobre Express e praticar rotas",
              },
              status: {
                type: "string",
                description: "Estado atual da tarefa",
                enum: ["pending", "in_progress", "done"],
                example: "pending",
              },
              createdAt: {
                type: "string",
                format: "date-time",
                example: "2025-12-09T10:00:00.000Z",
              },
              updatedAt: {
                type: "string",
                format: "date-time",
                example: "2025-12-09T11:00:00.000Z",
              },
            },
          },
          TaskInput: {
            type: "object",
            required: ["title"],
            properties: {
              title: {
                type: "string",
                example: "Criar API TaskFlow",
              },
              description: {
                type: "string",
                example: "Implementar CRUD de tarefas em TypeScript",
              },
              status: {
                type: "string",
                enum: ["pending", "in_progress", "done"],
                example: "pending",
              },
            },
          },
          Error: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Tarefa não encontrada",
              },
            },
          },
        },
      },
      paths: {
        "/tasks": {
          get: {
            tags: ["Tasks"],
            summary: "Lista todas as tarefas",
            description:
              "Retorna um array com **todas as tarefas cadastradas**.",
            responses: {
              200: {
                description: "Lista de tarefas retornada com sucesso",
                content: {
                  "application/json": {
                    schema: {
                      type: "array",
                      items: { $ref: "#/components/schemas/Task" },
                    },
                  },
                },
              },
            },
          },
          post: {
            tags: ["Tasks"],
            summary: "Cria uma nova tarefa",
            description:
              "Cria uma nova tarefa a partir dos dados enviados no corpo da requisição.",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TaskInput" },
                  example: {
                    title: "Estudar Swagger",
                    description: "Ler documentação e configurar projeto",
                    status: "pending",
                  },
                },
              },
            },
            responses: {
              201: {
                description: "Tarefa criada com sucesso",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Task" },
                  },
                },
              },
              400: {
                description: "Dados inválidos",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Error" },
                  },
                },
              },
            },
          },
        },
        "/tasks/{id}": {
          put: {
            tags: ["Tasks"],
            summary: "Atualiza uma tarefa",
            description:
              "Atualiza os dados de uma tarefa existente a partir do seu **ID**.",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                description: "ID da tarefa",
                schema: {
                  type: "string",
                  example: "1",
                },
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TaskInput" },
                  example: {
                    title: "Estudar Swagger (atualizado)",
                    description: "Atualizar documentação da API",
                    status: "in_progress",
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Tarefa atualizada com sucesso",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Task" },
                  },
                },
              },
              404: {
                description: "Tarefa não encontrada",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Error" },
                  },
                },
              },
            },
          },
          delete: {
            tags: ["Tasks"],
            summary: "Remove uma tarefa",
            description:
              "Remove uma tarefa do sistema a partir do seu **ID**.",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                description: "ID da tarefa",
                schema: {
                  type: "string",
                  example: "1",
                },
              },
            ],
            responses: {
              204: {
                description: "Tarefa removida com sucesso",
              },
              404: {
                description: "Tarefa não encontrada",
                content: {
                  "application/json": {
                    schema: { $ref: "#/components/schemas/Error" },
                  },
                },
              },
            },
          },
        },
      },
    },
    apis: [], // se você fosse usar JSDoc nas rotas, colocaria os paths dos arquivos aqui
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
