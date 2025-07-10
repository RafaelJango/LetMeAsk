# Server - LetmeAsk

Backend da aplicação LetmeAsk desenvolvido com Fastify, Drizzle ORM e PostgreSQL.

## 🚀 Tecnologias

- **Fastify** - Framework web
- **Drizzle ORM** - ORM para TypeScript
- **PostgreSQL** - Banco de dados
- **Zod** - Validação de schemas
- **TypeScript** - Tipagem estática

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- npm ou yarn

## ⚙️ Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar banco de dados

```bash
# Iniciar PostgreSQL com Docker
docker-compose up -d
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do servidor:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Executar migrações (se necessário)

```bash
npm run db:seed
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento

```bash
npm run dev
```

### Produção

```bash
npm start
```

O servidor estará disponível em `http://localhost:3333`

## 📁 Estrutura

```
src/
├── db/              # Configuração do banco
├── http/            # Rotas da API
├── env.ts           # Variáveis de ambiente
└── server.ts        # Servidor principal
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento com hot reload
- `npm start` - Executa em modo produção
- `npm run db:seed` - Executa seed do banco de dados
