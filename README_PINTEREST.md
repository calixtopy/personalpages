# Layout Pinterest para Portfólio

## 🎨 Funcionalidades Implementadas

### Layout Estilo Pinterest
- **Tamanhos Aleatórios**: As imagens agora têm tamanhos diferentes (small, medium, large, xlarge)
- **Grid Responsivo**: Layout que se adapta a diferentes tamanhos de tela
- **Efeito Masonry**: Cards se organizam automaticamente criando um efeito visual interessante

### Classes de Tamanho
- **Small**: 150px de altura
- **Medium**: 200px de altura  
- **Large**: 250px de altura
- **XLarge**: 300px de altura

### Botões Interativos
- **🔄 Reorganizar**: Clique para reorganizar os cards com novos tamanhos aleatórios
- **← Voltar**: Retorna para a página principal

## 📱 Responsividade

### Desktop
- Grid com múltiplas colunas
- Tamanhos variados para criar efeito Pinterest

### Tablet (768px)
- Colunas ajustadas para melhor visualização
- Tamanhos proporcionais reduzidos

### Mobile (480px)
- Layout otimizado para telas pequenas
- Tamanhos compactos mantendo a variedade

## 🎯 Como Usar

1. **Visualização Automática**: Os cards são gerados automaticamente com tamanhos aleatórios
2. **Reorganização Manual**: Clique no botão "🔄 Reorganizar" para mudar os tamanhos
3. **Modo de Exibição**: Use `setDisplayMode("on")` para mostrar textos ou `setDisplayMode("off")` para apenas imagens

## 🔧 Personalização

### Adicionar Novos Cards
```javascript
window.portfolioManager.addNewCard({
    id: 11,
    title: "Novo Projeto",
    description: "Descrição do projeto",
    image: "caminho/para/imagem.jpg",
    alt: "Alt text",
    tags: ["Tag1", "Tag2"],
    category: "copywriting"
});
```

### Reorganizar Cards
```javascript
window.portfolioManager.reorganizeCards();
```

### Mudar Modo de Exibição
```javascript
window.portfolioManager.setDisplayMode("on"); // Com texto
window.portfolioManager.setDisplayMode("off"); // Apenas imagens
```

## 🎨 CSS Customizável

As classes de tamanho podem ser facilmente modificadas no CSS:

```css
.portfolio-item.small {
    grid-row-end: span 15; /* 150px */
}

.portfolio-item.medium {
    grid-row-end: span 20; /* 200px */
}

.portfolio-item.large {
    grid-row-end: span 25; /* 250px */
}

.portfolio-item.xlarge {
    grid-row-end: span 30; /* 300px */
}
```

## ✨ Efeitos Visuais

- **Hover**: Cards se elevam suavemente ao passar o mouse
- **Animações**: Transições suaves ao reorganizar
- **Sombras**: Efeitos de profundidade nos cards
- **Responsividade**: Adaptação automática para diferentes dispositivos
