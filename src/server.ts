import express from "express";
import cors from "cors";              // 👈 novo import
import { setupSwagger } from "./swagger";
import routes from "./routes";

const app = express();

app.use(cors());                     // 👈 habilita o CORS
app.use(express.json());

// rotas da API
app.use(routes);

// swagger
setupSwagger(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
