import express from 'express';
import cors from 'cors';
import routes from './routes';
import { setupSwagger } from './swagger';

const app = express();

app.use(cors());
app.use(express.json());

// rotas principais
app.use(routes);

// documentação Swagger
setupSwagger(app);

// rota pra teste de vida
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TaskFlow API online 😎' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 TaskFlow API rodando na porta ${PORT}`);
  console.log(`📘 Documentação: http://localhost:${PORT}/docs`);
});
