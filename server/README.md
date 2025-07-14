# Backend - LetmeAsk

Este é o backend do projeto LetmeAsk, desenvolvido durante o evento **NLW Agents** da Rocketseat. Ele fornece a API para criação de salas, envio e listagem de perguntas em tempo real.

## **Funcionalidades**

- API para criar salas de perguntas
- Envio e listagem de perguntas
- Validação de dados com Zod
- Integração com banco de dados PostgreSQL

## **Tecnologias Utilizadas**

- Fastify
- Drizzle ORM
- PostgreSQL
- Zod
- TypeScript
- Docker

## **Instalação e Execução**

1. Instale as dependências:

```bash
npm install
```

2. Suba o banco de dados com Docker:

```bash
docker-compose up -d
```

3. Copie o arquivo `.env.example` para `.env` e ajuste se necessário.

4. Rode as migrações e seed:

```bash
npm run db:seed
```

5. Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

O backend estará disponível em `http://localhost:3333`.

## **Estrutura de Pastas**

```
src/
├── db/        # Banco de dados e schemas
├── http/      # Rotas da API
├── env.ts     # Variáveis de ambiente
└── server.ts  # Servidor principal
```



## **Aprendizados**

- Criação de APIs REST com Fastify
- Validação de dados com Zod
- Gerenciamento de banco de dados com Drizzle ORM
- Integração com Docker

---

Desenvolvido durante o NLW Agents da Rocketseat! 🚀
