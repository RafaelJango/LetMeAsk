# LetmeAsk

Este é um projeto de perguntas e respostas em tempo real, desenvolvido durante o evento **NLW Agents** da Rocketseat. O objetivo é praticar e consolidar conceitos modernos de desenvolvimento web fullstack, utilizando tecnologias atuais tanto no backend quanto no frontend.



## **Funcionalidades**

- Criação de salas de perguntas.
- Envio e listagem de perguntas em tempo real.
- Interface responsiva e moderna.
- Validação de dados no frontend e backend.



## **Tecnologias Utilizadas**

- **Backend:** Fastify, Drizzle ORM, PostgreSQL, Zod, TypeScript
- **Frontend:** React 19, Vite, TanStack Query, Tailwind CSS, Radix UI, Lucide React
- **Ferramentas:** Docker, Biome, Drizzle Kit



## **Instalação e Execução**

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/rafaeljango/nlw-agents.git
```

### 2. Acesse o diretório do projeto

```bash
cd nlw-agents
```

### 3. Instale as dependências de cada parte

```bash
cd server && npm install
cd ../web && npm install
```

### 4. Configure o banco de dados

Certifique-se de ter o Docker instalado. No diretório `server`:

```bash
docker-compose up -d
```

### 5. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env` em `server/` e ajuste se necessário.

### 6. Rode as migrações e seed

No diretório `server`:

```bash
npm run db:seed
```

### 7. Inicie o backend

```bash
npm run dev
```

### 8. Inicie o frontend

No diretório `web`:

```bash
npm run dev
```

Acesse a aplicação em `http://localhost:5173`.



## **Estrutura de Pastas**

```
nlw-agents/
├── server/   # Backend (Fastify, Drizzle, PostgreSQL)
├── web/      # Frontend (React, Vite, Tailwind)
```



## **Screenshots**

<div align="center">
  <img src="https://i.ibb.co/MyTpzVKh/Captura-de-Tela-2025-07-14-a-s-16-58-00.png" width="300px" />
  <img src="https://i.ibb.co/ccKNd5b3/Captura-de-Tela-2025-07-14-a-s-17-01-18.png" width="300px" />
  <img src="https://i.ibb.co/6cfrnt01/Captura-de-Tela-2025-07-14-a-s-17-03-01.png" width="300px" />
  <img src="https://i.ibb.co/cS3Yd8Qm/Captura-de-Tela-2025-07-14-a-s-17-03-14.png" width="300px" />
</div>

---

## **Aprendizados**

Durante o desenvolvimento deste projeto, pratiquei:

- Criação de APIs REST com Fastify e validação com Zod.
- Gerenciamento de banco de dados com Drizzle ORM e PostgreSQL.
- Componentização e gerenciamento de estado no React.
- Estilização moderna com Tailwind CSS.
- Integração frontend-backend e deploy local com Docker.

---

<div align= "center"> Desenvolvido com 💜 durante o NLW Agents da Rocketseat! 🚀 </div>
