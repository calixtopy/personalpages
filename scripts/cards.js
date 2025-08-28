// Configuração do modo de exibição
let displayMode = "off"; // "on" = com texto, "off" = apenas imagens (estilo Pinterest)

// Dados dos cards do portfólio de Copywriting
const portfolioCards = [
    {
        id: 1,
        title: "Campanha \"Clareza Absoluta\"",
        description: "Série de anúncios para startup de tecnologia, focando na simplicidade da comunicação.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        alt: "Copywriting Project - Tech",
        tags: ["Copywriting", "Tech", "Simplicidade"],
        category: "copywriting"
    },
    {
        id: 2,
        title: "Landing \"Resultado Garantido\"",
        description: "Página de vendas para curso online com copy focado em benefícios e urgência.",
        image: "./img/1.png",
        alt: "Copywriting Project - Landing Page",
        tags: ["Copywriting", "Landing Page", "Conversão"],
        category: "copywriting"
    },
    {
        id: 3,
        title: "Sequência \"Conversão\"",
        description: "Automação de emails para e-commerce com storytelling persuasivo e gatilhos mentais.",
        image: "./img/4.jpg",
        alt: "Copywriting Project - Email Marketing",
        tags: ["Copywriting", "Email", "Storytelling"],
        category: "copywriting"
    },
    {
        id: 4,
        title: "Newsletter \"Insights\"",
        description: "Boletim semanal para profissionais de marketing com conteúdo de valor.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=280&fit=crop",
        alt: "Copywriting Project - Newsletter",
        tags: ["Copywriting", "Newsletter", "Educativo"],
        category: "copywriting"
    },
    {
        id: 5,
        title: "Estratégia \"Conecta\"",
        description: "Planejamento de conteúdo para rede social com foco em engajamento orgânico.",
        image: "https://images.unsplash.com/photo-1611162617213-9d7c39fa143e?w=400&h=320&fit=crop",
        alt: "Copywriting Project - Social Media",
        tags: ["Copywriting", "Social Media", "Engajamento"],
        category: "copywriting"
    },
    {
        id: 6,
        title: "Identidade \"Essência Pura\"",
        description: "Rebranding completo para marca de cosméticos naturais, transmitindo autenticidade.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=360&fit=crop",
        alt: "Copywriting Project - Branding",
        tags: ["Copywriting", "Branding", "Autenticidade"],
        category: "copywriting"
    },
    {
        id: 7,
        title: "Campanha \"Impacto Digital\"",
        description: "Estratégia de marketing digital para empresa de tecnologia com foco em resultados mensuráveis.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
        alt: "Copywriting Project - Digital Marketing",
        tags: ["Copywriting", "Digital", "Resultados"],
        category: "copywriting"
    },
    {
        id: 8,
        title: "Copy \"Transformação\"",
        description: "Série de textos para programa de coaching com foco em transformação pessoal.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        alt: "Copywriting Project - Coaching",
        tags: ["Copywriting", "Coaching", "Transformação"],
        category: "copywriting"
    },
    {
        id: 9,
        title: "E-book \"Guia Completo\"",
        description: "Conteúdo educativo sobre copywriting para iniciantes no marketing digital.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
        alt: "Copywriting Project - E-book",
        tags: ["Copywriting", "E-book", "Educativo"],
        category: "copywriting"
    },
    {
        id: 10,
        title: "Slogan \"Marca Forte\"",
        description: "Desenvolvimento de slogans e taglines para fortalecimento de marca.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=350&fit=crop",
        alt: "Copywriting Project - Slogan",
        tags: ["Copywriting", "Slogan", "Branding"],
        category: "copywriting"
    }
];

// Função para gerar os cards dinamicamente
function generatePortfolioCards() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (!portfolioGrid) {
        console.error('Portfolio grid não encontrado');
        return;
    }

    // Limpa o grid
    portfolioGrid.innerHTML = '';

    // Gera cada card
    portfolioCards.forEach(card => {
        const cardElement = createCardElement(card);
        portfolioGrid.appendChild(cardElement);
    });
}

// Função para alternar o modo de exibição
function setDisplayMode(mode) {
    if (mode !== "on" && mode !== "off") {
        console.error('Modo deve ser "on" ou "off"');
        return;
    }
    
    displayMode = mode;
    generatePortfolioCards();
    applyAnimations();
}

// Função para criar um elemento de card
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'portfolio-item';
    cardDiv.setAttribute('data-category', card.category);
    cardDiv.setAttribute('data-id', card.id);

    // Aplica um tamanho aleatório para criar o efeito Pinterest
    const sizes = ['small', 'medium', 'large', 'xlarge'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    cardDiv.classList.add(randomSize);

    // Gera as tags HTML
    const tagsHTML = card.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Cria o conteúdo baseado no modo de exibição
    if (displayMode === "on") {
        // Modo "on" - com texto completo
        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.alt}" class="portfolio-image">
            <div class="portfolio-content">
                <h3 class="portfolio-title">${card.title}</h3>
                <p class="portfolio-description">${card.description}</p>
                <div class="portfolio-tags">
                    ${tagsHTML}
                </div>
            </div>
        `;
    } else {
        // Modo "off" - apenas imagem (estilo Pinterest)
        cardDiv.innerHTML = `
            <img src="${card.image}" alt="${card.alt}" class="portfolio-image">
        `;
    }

    return cardDiv;
}

// Função para adicionar um novo card
function addNewCard(newCard) {
    // Adiciona ID único se não fornecido
    if (!newCard.id) {
        newCard.id = portfolioCards.length + 1;
    }
    
    // Adiciona categoria padrão se não fornecida
    if (!newCard.category) {
        newCard.category = 'copywriting';
    }
    
    portfolioCards.push(newCard);
    
    // Regenera os cards
    generatePortfolioCards();
    
    // Reaplica as animações
    applyAnimations();
}

// Função para remover um card por ID
function removeCard(cardId) {
    const index = portfolioCards.findIndex(card => card.id === cardId);
    if (index > -1) {
        portfolioCards.splice(index, 1);
        generatePortfolioCards();
        applyAnimations();
    }
}

// Função para editar um card existente
function editCard(cardId, updatedData) {
    const card = portfolioCards.find(card => card.id === cardId);
    if (card) {
        Object.assign(card, updatedData);
        generatePortfolioCards();
        applyAnimations();
    }
}

// Função para aplicar animações aos cards
function applyAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Função para reorganizar os cards com novos tamanhos aleatórios
function reorganizeCards() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        // Remove classes de tamanho existentes
        item.classList.remove('small', 'medium', 'large', 'xlarge');
        
        // Aplica um novo tamanho aleatório
        const sizes = ['small', 'medium', 'large', 'xlarge'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        item.classList.add(randomSize);
        
        // Adiciona uma animação suave
        item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    // Remove a transição após a animação
    setTimeout(() => {
        portfolioItems.forEach(item => {
            item.style.transition = '';
        });
    }, 600);
}

// Exporta as funções para uso global
window.portfolioManager = {
    generatePortfolioCards,
    addNewCard,
    removeCard,
    editCard,
    applyAnimations,
    setDisplayMode,
    reorganizeCards,
    cards: portfolioCards,
    getDisplayMode: () => displayMode
};
