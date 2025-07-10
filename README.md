# LetmeAsk

Projeto desenvolvido durante o evento **NLW Agents** da Rocketseat, uma aplicação de perguntas e respostas em tempo real.

## 🚀 Tecnologias Utilizadas

### Backend

- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno com TypeScript
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **TypeScript** - Tipagem estática

### Frontend

- **React 19** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **TanStack Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones

### Ferramentas

- **Biome** - Linter e formatter
- **Docker** - Containerização
- **TypeScript** - Tipagem estática
- **Drizzle Kit** - CLI para migrações e geração de schemas

## 🏗️ Padrões de Projeto

- **Arquitetura em Camadas** - Separação clara entre rotas, serviços e dados
- **Type Safety** - Uso extensivo de TypeScript em todo o projeto
- **Schema Validation** - Validação de dados com Zod
- **Component-Based Architecture** - Componentes reutilizáveis no frontend
- **Server State Management** - Gerenciamento de estado do servidor com TanStack Query

## 📁 Estrutura do Projeto

```
nlw-agents/
├── server/          # Backend Fastify + Drizzle
├── web/            # Frontend React + Vite
└── README.md
```

## 🎯 Funcionalidades

- Criação de salas de perguntas
- Sistema de perguntas em tempo real
- Interface responsiva e moderna
- Validação de dados robusta

## 🗄️ Banco de Dados

O projeto utiliza **Drizzle ORM** com **PostgreSQL** e **Drizzle Kit** para gerenciamento de migrações.

### Comandos Drizzle Kit

```bash
# Gerar migração baseada nas mudanças do schema
npx drizzle-kit generate

# Executar migrações pendentes
npx drizzle-kit migrate

# Visualizar status das migrações
npx drizzle-kit introspect
```

## 📚 Contexto

Este projeto foi desenvolvido durante o **NLW Agents** da Rocketseat, um evento focado em desenvolvimento com IA e agentes inteligentes. O LetmeAsk demonstra a aplicação de tecnologias modernas para criar uma experiência de perguntas e respostas em tempo real.
