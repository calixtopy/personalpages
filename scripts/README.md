# 📚 Portfólio Manager - Guia de Uso

Este arquivo contém todas as funções para gerenciar dinamicamente os cards do portfólio.

## 🚀 Como Usar

### 1. **Adicionar um Novo Card**
```javascript
// Exemplo de como adicionar um novo card
portfolioManager.addNewCard({
    title: "Novo Projeto de Copywriting",
    description: "Descrição do novo projeto...",
    image: "https://images.unsplash.com/photo-1234567890?w=400&h=300&fit=crop",
    alt: "Novo Projeto",
    tags: ["Copywriting", "Novo", "Projeto"],
    category: "copywriting"
});
```

### 2. **Editar um Card Existente**
```javascript
// Editar o card com ID 1
portfolioManager.editCard(1, {
    title: "Título Atualizado",
    description: "Nova descrição...",
    tags: ["Copywriting", "Atualizado", "Tag"]
});
```

### 3. **Remover um Card**
```javascript
// Remover o card com ID 2
portfolioManager.removeCard(2);
```

### 4. **Acessar Todos os Cards**
```javascript
// Ver todos os cards atuais
console.log(portfolioManager.cards);
```

## 📋 Estrutura do Card

Cada card deve ter esta estrutura:
```javascript
{
    id: 1,                    // ID único (opcional - será gerado automaticamente)
    title: "Título do Projeto",
    description: "Descrição detalhada...",
    image: "URL da imagem",
    alt: "Texto alternativo da imagem",
    tags: ["Tag1", "Tag2", "Tag3"],
    category: "copywriting"   // Categoria (padrão: copywriting)
}
```

## 🎯 Funções Disponíveis

- `generatePortfolioCards()` - Gera todos os cards no grid
- `addNewCard(newCard)` - Adiciona um novo card
- `removeCard(cardId)` - Remove um card por ID
- `editCard(cardId, updatedData)` - Edita um card existente
- `applyAnimations()` - Aplica animações aos cards
- `setDisplayMode(mode)` - Alterna entre modo "on" (com texto) e "off" (apenas imagens)
- `getDisplayMode()` - Retorna o modo atual de exibição

## 🎨 Modos de Exibição

### **Modo "on"** - Texto Completo
- Mostra título, descrição e tags
- Layout tradicional de portfólio
- Ideal para apresentações detalhadas

### **Modo "off"** - Apenas Imagens (Estilo Pinterest)
- Mostra apenas as imagens dos projetos
- Layout mais limpo e visual
- Ideal para galerias e inspiração

## 💡 Dicas

1. **Para adicionar um card**: Basta editar o array `portfolioCards` no arquivo `cards.js`
2. **Para modificar**: Use as funções do `portfolioManager` no console do navegador
3. **Imagens**: Use URLs do Unsplash ou outras fontes gratuitas
4. **Tags**: Mantenha sempre "Copywriting" como primeira tag para consistência

## 🔧 Exemplos de Uso

### **Adicionar um Novo Projeto:**
```javascript
// Adicionar um novo projeto
portfolioManager.addNewCard({
    title: "Campanha \"Persuasão Digital\"",
    description: "Copywriting para campanhas de marketing digital com foco em conversão.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=350&fit=crop",
    alt: "Copywriting - Marketing Digital",
    tags: ["Copywriting", "Marketing Digital", "Conversão"],
    category: "copywriting"
});
```

### **Alternar Modo de Exibição:**
```javascript
// Modo "off" - apenas imagens (estilo Pinterest)
portfolioManager.setDisplayMode("off");

// Modo "on" - com texto completo
portfolioManager.setDisplayMode("on");

// Verificar modo atual
console.log(portfolioManager.getDisplayMode()); // "off" ou "on"
```

Agora você pode gerenciar seu portfólio de forma dinâmica e organizada! 🎨✨
