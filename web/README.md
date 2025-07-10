# Web - LetmeAsk

Frontend da aplicação LetmeAsk desenvolvido com React 19, Vite e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Biblioteca para interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **TanStack Query** - Gerenciamento de estado do servidor
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **TypeScript** - Tipagem estática

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn

## ⚙️ Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente (se necessário)

Crie um arquivo `.env` na raiz do web:

```env
VITE_API_URL=http://localhost:3333
```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
```

### Preview da build

```bash
npm run preview
```

A aplicação estará disponível em `http://localhost:5173`

## 📁 Estrutura

```
src/
├── components/       # Componentes reutilizáveis
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários
├── app.tsx          # Componente principal
└── main.tsx         # Ponto de entrada
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview da build de produção

## 🎨 UI/UX

- Design responsivo com Tailwind CSS
- Componentes acessíveis com Radix UI
- Animações suaves
- Interface moderna e intuitiva
