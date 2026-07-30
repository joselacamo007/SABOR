// ============================================
// CONFIGURAÇÕES DO SISTEMA
// ============================================
const CONFIG = {
    whatsappNumber: "5581995923940",
    whatsappGroupLink: "https://chat.whatsapp.com/DGJ4iTZbY7X4BIW53LNeMo",
    storeName: "MEU HAMBÚRGUER",
    currency: "R$",
    maxCartItems: 20,
    maxItemQuantity: 10,
    deliveryFee: 0.00, // Taxa de entrega
    giftOptions: {
        'pipoca': { name: 'Pipoca', emoji: '🍿', icon: 'fa-popcorn' },
        'pirulito': { name: 'Pirulito', emoji: '🍭', icon: 'fa-candy-cane' },
        //'chocolate': { name: 'Chocolate', emoji: '🍫', icon: 'fa-cookie-bite' },
        'nenhum': { name: 'Sem brinde', emoji: '❌', icon: 'fa-times-circle' }
    },
    paymentMethods: {
        'Dinheiro': 'Dinheiro',
        'Cartão': 'Cartão',
        'Pix': 'PIX'
    },
    storageKey: 'burgerOrderData_v3',
    
    // Google Forms Configuration
    googleFormId: 'https://docs.google.com/forms/d/e/1FAIpQLSeEfYeibHjK58glQ954JYJrDnzgfHsvmB2sD4-aCTMrV5E3Jw/formResponse',
    formEntries: {
        nome: 'entry.1423794930',
        telefone: 'entry.1959732539',
        bairro: 'entry.873423111',
        pagamento: 'entry.141250512',
        observacoes: 'entry.1749157495',
        itens_pedido: 'entry.1257731678',
        total: 'entry.65862780',
        entrega: 'entry.1954558547'
    },
    
    promotions: {
        comboFamilia: {
            name: "Combo Família",
            description: "4 hambúrgueres",
            price: 60.00,
            items: [
                { itemId: 1, quantity: 1 },
                { itemId: 100, quantity: 1 }
            ],
            discount: 15.00
        }
    }
};

// ============================================
// DADOS DO CARDÁPIO
// ============================================
const menuItems = [
    // HAMBÚRGUERES
    {
        id: 1,
        name: " Sabor hamburguer",
        description: "Pão, 120g carne, salada e molho especial.",
        basePrice: 11.99,
        image: "imagem/1.png",
        category: "hamburguer",
        additions: [
            { id: 1, name: "Bacon", price: 2.00 },
            { id: 2, name: "Ovo", price: 0.00 },
            { id: 3, name: "Cheddar", price: 2.00 },
            
        ]
    },
    {
        id: 2,
        name: "Sabor combo Bacon",
        description: " Pão, 120g carne, salada e molho especial, E O lendário sabor Bacon é um mito pelo seu sabor inigualável.",
        basePrice: 19.99,
        image: "imagem/duplo.png",
        category: "hamburguer",
        additions: [
            { id: 5, name: "Sem cebola Caramelizada", price: 0.00 },
            
            { id: 7, name: "Molho da Casa", price: 0.00 },
            { id: 8, name: "Bacon Extra", price: 3.00 }
        ]
    },
    {
        id: 3,
        name: " Triplo Cheese",
        description: "Pão, 3 carnes angus, 6 fatias de queijo e molho.",
        basePrice: 22.99,
        image: "imagem/55.png",
        category: "hamburguer",
        additions: [
            { id: 5, name: "Sem cebola Caramelizada", price: 0.00 },
            
            { id: 7, name: "Molho da Casa", price: 0.00 },
            { id: 8, name: "Bacon Extra", price: 3.00 }
        ]
    },



    {
        id: 4,
        name: " Sabor forró",
        description: "Tudo que é bom, queremos em dobro! com 2 deliciosas carnes de 180g ao ponto, com 4 fatias de queijo cheddar e pão brioche selado na manteiga.",
        basePrice: 20.90,
        image: "imagem/smash.png",
        category: "hamburguer",
        additions: [
            { id: 5, name: "Sem cebola Caramelizada", price: 0.00 },
            
            { id: 7, name: "Molho da Casa", price: 0.00 },
            { id: 8, name: "Bacon Extra", price: 3.00 }
        ]
    },
    {
        id: 5,
        name: "Sabor Bacon",
        description: "O lendário sabor Bacon é um mito pelo seu sabor inigualável! Com carne angus de 120g coberto com queijo derretido, finas fatias de bacon crocante, salada e molho especial.",
        basePrice: 17.99,
        image: "imagem/duplo bacon.png",
        category: "hamburguer",
        additions: [
           
            
            { id: 11, name: "Cream Cheese", price: 3.00 },
            { id: 12, name: "Cebola Roxa", price: 2.00 }
        ]
    },
    {
        id: 6,
        name: " Sabor Calabresa",
        description: "Pão, 120g carne especial, queijo derretido, calabresa, salada, e molho especial.",
        basePrice: 16,
        image: "imagem/5.png",
        category: "hamburguer",
        additions: [
            { id: 13, name: "Sem cebola Caramelizada", price: 0.00 },
            { id: 14, name: "Milho", price: 2.00 },
            { id: 15, name: "Bacon", price: 2.00 },
            { id: 16, name: "Molho Agridoce", price: 2.00 }
        ]
    },
    /*{
        id: 7,
        name: " Sabor Frango",
        description: "Pão, 120g frango especial, queijo, salada e molho especial.",
        basePrice: 17,
        image: "imagem/vegetariano.png",
        category: "hamburguer",
        additions: [
            { id: 23, name: "Bacon Extra", price: 4.00 },
            
            
            { id: 5, name: "Sem cebola Caramelizada", price: 0.00 },
        ]
    },*/
    {
        id: 8,
        name: "Sabor Egg",
        description: "Pão, 120g carne especial, queijo derretido, ovo, salada e molho especial.",
        basePrice: 15,
        image: "imagem/egg.png",
        category: "hamburguer",
        additions: [
            { id: 5, name: "Sem cebola Caramelizada", price: 0.00 },
            { id: 22, name: "Ovo", price: 2.00 },
            { id: 23, name: "Bacon Extra", price: 4.00 },
            { id: 24, name: "Molho Barbecue", price: 2.00 }
        ]
    },
    {
        id: 9,
        name: "Sabor combo calabresa",
        description: "Pão, 120g carne, salada e molho especial E Pão, 120g carne especial, queijo derretido, calabresa, salada, e molho especial.",
        basePrice: 19.99,
        image: "imagem/88.png",
        category: "hamburguer",
        additions: [
            { id: 21, name: "Sem cebola Caramelizada", price: 0.00 },
            { id: 22, name: "Ovo", price: 2.00 },
            { id: 23, name: "Bacon Extra", price: 4.00 },
            { id: 24, name: "Molho Barbecue", price: 2.00 }
        ]
    },


    {
        id: 10,
        name: " Sabor hamburguer",
        description: "Pão, 120g carne, salada e molho especial.",
        basePrice: 11.99,
        image: "imagem/1.png",
        category: "hamburguer",
        additions: [
            { id: 1, name: "Bacon", price: 2.00 },
            { id: 2, name: "Ovo", price: 0.00 },
            { id: 3, name: "Cheddar", price: 2.00 },
           
        ]
    },

    // AÇAÍ
    /*{
        id: 200,
        name: "🫐 Açaí 200ml",
        description: "Açaí tradicional na tigela de 300ml. Escolha seus recheios favoritos!",
        basePrice: 3.99,
        image: "imagem/300.png",
        category: "acai",
        isAcai: true,
        additions: [
            { id: 100, name: "Granola", price: 0.00 },
            { id: 101, name: "Leite Condensado", price: 0.00 },
            { id: 102, name: "Leite em Pó", price: 0.00 },
           // { id: 103, name: "Paçoca", price: 2.00 },
            { id: 104, name: "Banana", price: 0.00 },
            { id: 105, name: "Morango", price: 3.00 },
            { id: 106, name: "Kiwi", price: 3.00 },
            { id: 107, name: "Nutella", price: 4.00 },
            { id: 108, name: "Ovomaltine", price: 3.00 },
            { id: 109, name: "Chantilly", price: 2.00 },
            //{ id: 110, name: "Coco Ralado", price: 2.00 },
            { id: 111, name: "Gotas de Chocolate", price: 2.00 }
        ]
    },*/
    /*{
        id: 201,
        name: "🫐 Açaí 300ml",
        description: "Açaí tradicional na tigela de 500ml. Escolha seus recheios favoritos!",
        basePrice: 5.99,
        image: "imagem/500.png",
        category: "acai",
        isAcai: true,
        additions: [
            { id: 100, name: "Granola", price: 2.00 },
            { id: 101, name: "Leite Condensado", price: 2.00 },
            { id: 102, name: "Leite em Pó", price: 2.00 },
            { id: 103, name: "Paçoca", price: 2.00 },
            { id: 104, name: "Banana", price: 2.00 },
            { id: 105, name: "Morango", price: 3.00 },
            { id: 106, name: "Kiwi", price: 3.00 },
            { id: 107, name: "Nutella", price: 4.00 },
            { id: 108, name: "Ovomaltine", price: 3.00 },
            { id: 109, name: "Chantilly", price: 2.00 },
            { id: 110, name: "Coco Ralado", price: 2.00 },
            { id: 111, name: "Gotas de Chocolate", price: 2.00 }
        ]
    },*/
    
    
    // BEBIDAS
    {
        id: 100,
        name: " Refrigerante",
        description: "Lata 350ml. Opções: Coca-Cola, Guaraná, Fanta, Sprite.",
        basePrice: 5.00,
        image: "imagem/refrigerante.png",
        category: "bebida",
        additions: []
    },
    {
        id: 101,
        name: " Suco Natural",
        description: "Suco natural 500ml. Sabores: Laranja, Maracujá, Abacaxi.",
        basePrice: 3.00,
        image: "imagem/suco.png",
        category: "bebida",
        additions: []
    },
    
    {
        id: 103,
        name: " Cerveja Brahma",
        description: "Lata 350ml. A cerveja brasileira mais tradicional.",
        basePrice: 4.50,
        image: "imagem/cerveja.png",
        category: "bebida",
        additions: []
    },
    {
        id: 104,
        name: " Água Mineral",
        description: "Garrafa 500ml. Com ou sem gás.",
        basePrice: 3.00,
        image: "imagem/agua.png",
        category: "bebida",
        additions: []
    }
];

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================
const state = {
    cart: {
        items: [],
        total: 0,
        count: 0
    },
    customer: {
        name: '',
        phone: '',
        deliveryType: 'pickup',
        neighborhood: '',
        street: '',
        paymentMethod: '',
        observations: '',
        selectedGift: 'nenhum'
    },
    ui: {
        currentModal: null,
        currentItemId: null,
        selectedAdditions: new Set()
    },
    promotions: {
        applied: []
    },
    version: '3.0'
};

// ============================================
// INTEGRAÇÃO COM GOOGLE FORMS
// ============================================
let submitted = false;

// ============================================
// CACHE DE ELEMENTOS DOM
// ============================================
const DOM = {};

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    cacheDOMElements();
    setupEventListeners();
    setupFormListeners();
    setupDeliveryListeners();
    renderMenu();
    loadFromLocalStorage();
    updateCartDisplay();
    updateCurrentYear();
    setupAccessibility();
    updateDeliveryFields();
    
    console.log('🍔🫐 Cardápio Digital inicializado com sucesso!');
    logAnalytics('page_view');
}

function cacheDOMElements() {
    DOM.cartCount = document.querySelector('.cart-count');
    DOM.cartTotal = document.querySelector('.cart-total');
    DOM.floatingCartCount = document.querySelector('.floating-cart-count');
    DOM.floatingCartTotal = document.querySelector('.floating-cart-total');
    DOM.cartInfo = document.getElementById('cartInfo');
    DOM.cartFloatingMobile = document.getElementById('cartFloatingMobile');
    
    DOM.cartModal = document.getElementById('cartModal');
    DOM.additionsModal = document.getElementById('additionsModal');
    DOM.closeCartModal = document.getElementById('closeCartModal');
    DOM.closeAdditionsModal = document.getElementById('closeAdditionsModal');
    
    DOM.viewCartBtnDesktop = document.getElementById('viewCartBtnDesktop');
    DOM.viewCartBtnMobile = document.getElementById('viewCartBtnMobile');
    DOM.addToCartBtn = document.getElementById('addToCartBtn');
    DOM.cancelAdditionsBtn = document.getElementById('cancelAdditionsBtn');
    DOM.finalizeOrderBtn = document.getElementById('finalizeOrderBtn');
    DOM.finalizeFromSummaryBtn = document.getElementById('finalizeFromSummaryBtn');
    DOM.viewFullCartBtn = document.getElementById('viewFullCartBtn');
    DOM.proceedToFormBtn = document.getElementById('proceedToFormBtn');
    DOM.continueShoppingBtn = document.getElementById('continueShoppingBtn');
    
    DOM.orderForm = document.getElementById('orderForm');
    DOM.customerNameInput = document.getElementById('customerName');
    DOM.customerPhoneInput = document.getElementById('customerPhone');
    DOM.neighborhoodInput = document.getElementById('neighborhood');
    DOM.streetInput = document.getElementById('street');
    DOM.paymentMethodSelect = document.getElementById('paymentMethod');
    DOM.observationsTextarea = document.getElementById('observations');
    DOM.charCount = document.getElementById('charCount');
    DOM.backToOrderBtn = document.getElementById('backToOrderBtn');
    DOM.backToFormBtn = document.getElementById('backToFormBtn');
    
    DOM.menuSection = document.querySelector('.menu-section');
    DOM.menuGrid = document.getElementById('menuGrid');
    DOM.orderSummary = document.getElementById('orderSummary');
    DOM.customerForm = document.getElementById('customerForm');
    DOM.whatsappSection = document.getElementById('whatsappSection');
    
    DOM.whatsappMessage = document.getElementById('whatsappMessage');
    DOM.whatsappLink = document.getElementById('whatsappLink');
    
    DOM.giftOptions = document.querySelectorAll('.gift-option');
    
    DOM.submitFormBtn = document.getElementById('submitFormBtn');
    
    DOM.deliveryOptionsForm = document.querySelectorAll('.delivery-option-form');
    DOM.streetGroup = document.getElementById('streetGroup');
    DOM.deliverySummaryText = document.getElementById('deliverySummaryText');
    
    DOM.hiddenCustomerName = document.getElementById('hiddenCustomerName');
    DOM.hiddenPhone = document.getElementById('hiddenPhone');
    DOM.hiddenNeighborhood = document.getElementById('hiddenNeighborhood');
    DOM.hiddenPaymentMethod = document.getElementById('hiddenPaymentMethod');
    DOM.hiddenObservations = document.getElementById('hiddenObservations');
    DOM.hiddenOrderItems = document.getElementById('hiddenOrderItems');
    DOM.hiddenTotalAmount = document.getElementById('hiddenTotalAmount');
    DOM.hiddenDeliveryType = document.getElementById('hiddenDeliveryType');
}

// ============================================
// MANIPULAÇÃO DO CARDÁPIO COM PREÇO AO LADO DO NOME
// ============================================
function renderMenu() {
    if (!DOM.menuGrid) return;
    
    DOM.menuGrid.innerHTML = '';
    
    const burgers = menuItems.filter(item => item.category === 'hamburguer');
    const acaiItems = menuItems.filter(item => item.category === 'acai');
    const drinks = menuItems.filter(item => item.category === 'bebida');
    
    const fragment = document.createDocumentFragment();
    
    // Categoria Hambúrgueres
    if (burgers.length > 0) {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'menu-category-title';
        titleDiv.style.gridColumn = '1 / -1';
        titleDiv.innerHTML = `<h3><i class="fas fa-hamburger"></i> HAMBÚRGUERES</h3>`;
        fragment.appendChild(titleDiv);
    }
    
    burgers.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        fragment.appendChild(menuItemElement);
    });
    
    // Categoria Açaí
    if (acaiItems.length > 0) {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'menu-category-title acai-category';
        titleDiv.style.gridColumn = '1 / -1';
        titleDiv.innerHTML = `<h3><i class="fas fa-ice-cream"></i> AÇAÍ</h3>`;
        fragment.appendChild(titleDiv);
    }
    
    acaiItems.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        fragment.appendChild(menuItemElement);
    });
    
    // Categoria Bebidas
    if (drinks.length > 0) {
        const titleDiv = document.createElement('div');
        titleDiv.className = 'menu-category-title';
        titleDiv.style.gridColumn = '1 / -1';
        titleDiv.innerHTML = `<h3><i class="fas fa-glass-whiskey"></i> BEBIDAS</h3>`;
        fragment.appendChild(titleDiv);
    }
    
    drinks.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        fragment.appendChild(menuItemElement);
    });
    
    DOM.menuGrid.appendChild(fragment);
}

function createMenuItemElement(item) {
    const div = document.createElement('div');
    div.className = `menu-item ${item.isAcai ? 'acai-item' : ''}`;
    div.dataset.id = item.id;
    
    div.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-details">
            <div class="item-header">
                <h3 class="item-name">
                    ${item.name}
                </h3>
                <div class="item-price-inline">
                    ${formatCurrency(item.basePrice)}
                </div>
            </div>
            <p class="item-description">${item.description}</p>
            
            <button class="btn btn-add" data-id="${item.id}" 
                    aria-label="${item.isAcai ? 'Escolher recheios e adicionar' : 'Personalizar e adicionar'} ${item.name} ao carrinho">
                <i class="fas fa-cart-plus"></i> ${item.isAcai ? 'ESCOLHER RECHEIOS' : 'PERSONALIZAR E ADICIONAR'}
            </button>
        </div>
    `;
    
    const img = div.querySelector('img');
    const imageDiv = div.querySelector('.item-image');
    
    img.addEventListener('error', function() {
        this.style.display = 'none';
        
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.innerHTML = `
            <i class="fas ${item.isAcai ? 'fa-ice-cream' : 'fa-hamburger'}"></i>
            <span>${item.name.substring(2)}</span>
        `;
        
        imageDiv.appendChild(placeholder);
    });
    
    return div;
}

// ============================================
// LISTENERS PARA OPÇÕES DE ENTREGA
// ============================================
function setupDeliveryListeners() {
    DOM.deliveryOptionsForm?.forEach(option => {
        option.addEventListener('click', () => {
            const type = option.dataset.type;
            state.customer.deliveryType = type;
            
            DOM.deliveryOptionsForm.forEach(o => {
                o.classList.remove('selected');
                const radio = o.querySelector('.delivery-radio');
                radio.classList.remove('selected');
            });
            
            option.classList.add('selected');
            option.querySelector('.delivery-radio').classList.add('selected');
            
            updateDeliveryFields();
            updateCartDisplay(); // Atualiza para mostrar/esconder taxa
            saveToLocalStorage();
            
            logAnalytics('delivery_option_selected', { delivery_type: type });
        });
    });
    
    if (DOM.streetInput) {
        DOM.streetInput.addEventListener('input', function() {
            state.customer.street = this.value;
            saveToLocalStorage();
        });
    }
}

function updateDeliveryFields() {
    const isDelivery = state.customer.deliveryType === 'delivery';
    
    if (DOM.streetInput) {
        if (isDelivery) {
            DOM.streetInput.required = true;
            DOM.streetInput.placeholder = "Rua Exemplo, 123 - Complemento";
        } else {
            DOM.streetInput.required = false;
            DOM.streetInput.placeholder = "Opcional para retirada";
        }
    }
    
    if (DOM.deliverySummaryText) {
        const deliveryText = isDelivery 
            ? `Entrega no endereço: ${state.customer.street || '[endereço não informado]'}, ${state.customer.neighborhood || '[bairro não informado]'} (+ ${formatCurrency(CONFIG.deliveryFee)})`
            : 'Retirada no estabelecimento (Grátis)';
        DOM.deliverySummaryText.textContent = deliveryText;
    }
}

// ============================================
// MANIPULAÇÃO DO CARRINHO
// ============================================
function addItemToCart(itemId, additions = []) {
    if (state.cart.count >= CONFIG.maxCartItems) {
        showNotification(`Limite de ${CONFIG.maxCartItems} itens no carrinho atingido!`, 'warning');
        return false;
    }
    
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return false;
    
    const additionIds = additions.map(a => a.id).sort().join('-');
    const itemKey = `${itemId}-${additionIds}`;
    
    const existingIndex = state.cart.items.findIndex(i => i.key === itemKey);
    
    if (existingIndex >= 0) {
        if (state.cart.items[existingIndex].quantity >= CONFIG.maxItemQuantity) {
            showNotification(`Limite de ${CONFIG.maxItemQuantity} unidades por item!`, 'warning');
            return false;
        }
        state.cart.items[existingIndex].quantity++;
    } else {
        state.cart.items.push({
            ...item,
            key: itemKey,
            selectedAdditions: [...additions],
            quantity: 1,
            addedAt: Date.now()
        });
    }
    
    updateCartState();
    saveToLocalStorage();
    showNotification(`${item.name} adicionado ao carrinho! ${item.isAcai ? '🫐' : '🛒'}`);
    
    logAnalytics('add_to_cart', {
        item_id: itemId,
        item_name: item.name,
        additions_count: additions.length,
        is_acai: item.isAcai || false
    });
    
    return true;
}

function updateCartState() {
    let total = 0;
    let count = 0;
    
    state.cart.items.forEach(item => {
        const itemPrice = item.basePrice + 
                         item.selectedAdditions.reduce((sum, add) => sum + add.price, 0);
        total += itemPrice * item.quantity;
        count += item.quantity;
    });
    
    // Adicionar taxa de entrega se for delivery
    if (state.customer.deliveryType === 'delivery') {
        total += CONFIG.deliveryFee;
    }
    
    state.cart.total = total;
    state.cart.count = count;
    
    updateCartDisplay();
}

function updateCartDisplay() {
    updateElementText(DOM.cartCount, state.cart.count);
    updateElementText(DOM.floatingCartCount, state.cart.count);
    
    const orderTotal = calculateOrderTotal();
    const formattedTotal = formatCurrency(orderTotal.total);
    
    updateElementText(DOM.cartTotal, formattedTotal);
    updateElementText(DOM.floatingCartTotal, formattedTotal);
    
    if (DOM.cartInfo) {
        const itemText = state.cart.count === 1 ? 'item' : 'itens';
        DOM.cartInfo.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-count">${state.cart.count}</span> ${itemText}
            <span class="cart-total">${formattedTotal}</span>
        `;
    }
    
    updateCartSummary();
    toggleFloatingCart();
    
    const modalOrderTotal = document.getElementById('modalOrderTotal');
    if (modalOrderTotal && orderTotal.discount > 0) {
        modalOrderTotal.innerHTML = `
            <div style="text-align: right;">
                <div style="font-size: 0.9rem; color: var(--success-color);">
                    -${formatCurrency(orderTotal.discount)} desconto
                </div>
                ${state.customer.deliveryType === 'delivery' ? `
                <div style="font-size: 0.9rem; color: var(--text-light);">
                    +${formatCurrency(CONFIG.deliveryFee)} entrega
                </div>
                ` : ''}
                <div>${formatCurrency(orderTotal.total)}</div>
            </div>
        `;
    } else if (modalOrderTotal) {
        if (state.customer.deliveryType === 'delivery' && state.cart.count > 0) {
            modalOrderTotal.innerHTML = `
                <div style="text-align: right;">
                    <div style="font-size: 0.9rem; color: var(--text-light);">
                        +${formatCurrency(CONFIG.deliveryFee)} entrega
                    </div>
                    <div>${formattedTotal}</div>
                </div>
            `;
        } else {
            modalOrderTotal.textContent = formattedTotal;
        }
    }
}

function updateCartSummary() {
    const summaryElement = document.getElementById('cartSummaryInfo');
    const summaryTotalElement = document.getElementById('summaryTotal');
    
    if (!summaryElement || !summaryTotalElement) return;
    
    const orderTotal = calculateOrderTotal();
    summaryTotalElement.textContent = formatCurrency(orderTotal.total);
    
    if (state.cart.count === 0) {
        summaryElement.innerHTML = `
            <div class="empty-summary-message">
                <i class="fas fa-shopping-basket"></i>
                <p>Seu carrinho está vazio</p>
                <p>Adicione itens do cardápio!</p>
            </div>
        `;
        return;
    }
    
    const recentItems = [...state.cart.items]
        .sort((a, b) => b.addedAt - a.addedAt)
        .slice(0, 3);
    
    let html = '<div class="cart-summary-items">';
    
    recentItems.forEach(item => {
        const itemTotal = (item.basePrice + 
                          item.selectedAdditions.reduce((sum, add) => sum + add.price, 0)) * 
                          item.quantity;
        
        html += `
            <div class="cart-summary-item">
                <div>
                    <div class="summary-item-name">${item.name}</div>
                    ${item.selectedAdditions.length > 0 ? `
                        <div class="summary-item-details" title="${item.selectedAdditions.map(add => add.name).join(', ')}">
                            ${item.selectedAdditions.slice(0, 2).map(add => `➕ ${add.name}`).join(', ')}
                            ${item.selectedAdditions.length > 2 ? ` +${item.selectedAdditions.length - 2}` : ''}
                        </div>
                    ` : ''}
                </div>
                <div style="text-align: right;">
                    <div class="summary-item-quantity">${item.quantity}x</div>
                    <div class="summary-item-price">${formatCurrency(itemTotal)}</div>
                </div>
            </div>
        `;
    });
    
    if (state.cart.items.length > 3) {
        html += `
            <div class="more-items-indicator">
                +${state.cart.items.length - 3} mais itens...
            </div>
        `;
    }
    
    // Adicionar taxa de entrega no resumo
    if (state.customer.deliveryType === 'delivery') {
        html += `
            <div class="delivery-fee-row">
                <span>Taxa de entrega:</span>
                <span class="fee-value">+ ${formatCurrency(CONFIG.deliveryFee)}</span>
            </div>
        `;
    }
    
    html += '</div>';
    summaryElement.innerHTML = html;
}

function toggleFloatingCart() {
    if (!DOM.cartFloatingMobile) return;
    
    if (state.cart.count > 0) {
        DOM.cartFloatingMobile.classList.remove('hidden');
    } else {
        DOM.cartFloatingMobile.classList.add('hidden');
    }
}

// ============================================
// GERENCIAMENTO DE PROMOÇÕES
// ============================================
function applyComboPromotion(comboType) {
    if (comboType === 'familia') {
        if (state.cart.count + 8 > CONFIG.maxCartItems) {
            showNotification(`Limite de ${CONFIG.maxCartItems} itens no carrinho!`, 'warning');
            return false;
        }
        
        for (let i = 0; i < 4; i++) {
            const hamburger = menuItems.find(item => item.id === 1);
            if (hamburger) {
                state.cart.items.push({
                    ...hamburger,
                    key: `combo-hamburger-${i}-${Date.now()}`,
                    selectedAdditions: [],
                    quantity: 1,
                    originalPrice: hamburger.basePrice,
                    basePrice: hamburger.basePrice * 0.8,
                    isPromotional: true,
                    promotionName: 'Combo Família'
                });
            }
        }
        
        for (let i = 0; i < 4; i++) {
            const soda = menuItems.find(item => item.id === 100);
            if (soda) {
                state.cart.items.push({
                    ...soda,
                    key: `combo-soda-${i}-${Date.now()}`,
                    selectedAdditions: [],
                    quantity: 1,
                    originalPrice: soda.basePrice,
                    basePrice: soda.basePrice * 0.8,
                    isPromotional: true,
                    promotionName: 'Combo Família'
                });
            }
        }
        
        state.promotions.applied.push('comboFamilia');
        updateCartState();
        saveToLocalStorage();
        
        showNotification('🎊 Combo Família adicionado! Economia de R$ 15,00!');
        
        logAnalytics('apply_promotion', {
            promotion: 'combo_familia',
            items_count: 8
        });
        
        return true;
    }
    
    return false;
}

// ============================================
// CALCULAR DESCONTOS E TOTAIS
// ============================================
function calculateOrderTotal() {
    let subtotal = 0;
    let discount = 0;
    
    state.cart.items.forEach(item => {
        const itemPrice = item.basePrice + 
                         item.selectedAdditions.reduce((sum, add) => sum + add.price, 0);
        const itemTotal = itemPrice * item.quantity;
        
        if (item.isPromotional && item.originalPrice) {
            const originalTotal = (item.originalPrice + 
                                  item.selectedAdditions.reduce((sum, add) => sum + add.price, 0)) * 
                                  item.quantity;
            discount += originalTotal - itemTotal;
        }
        
        subtotal += itemTotal;
    });
    
    const deliveryFee = state.customer.deliveryType === 'delivery' ? CONFIG.deliveryFee : 0;
    
    return {
        subtotal: subtotal + discount,
        discount: discount,
        deliveryFee: deliveryFee,
        total: subtotal + deliveryFee
    };
}

// ============================================
// MODAL DE ADICIONAIS (COM SUPORTE A AÇAÍ)
// ============================================
function openAdditionsModal(itemId) {
    state.ui.currentItemId = itemId;
    state.ui.selectedAdditions.clear();
    
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const additionsItemName = document.getElementById('additionsItemName');
    const additionsModalHeader = document.querySelector('.additions-modal-header');
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    if (additionsItemName) {
        additionsItemName.textContent = item.isAcai ? 
            `Escolher recheios para ${item.name}` : 
            `Personalizar ${item.name}`;
    }
    
    // Aplicar estilo especial para Açaí
    if (additionsModalHeader) {
        if (item.isAcai) {
            additionsModalHeader.classList.add('acai-header');
        } else {
            additionsModalHeader.classList.remove('acai-header');
        }
    }
    
    if (addToCartBtn) {
        if (item.isAcai) {
            addToCartBtn.classList.add('acai-btn');
            addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> ADICIONAR AO CARRINHO';
        } else {
            addToCartBtn.classList.remove('acai-btn');
            addToCartBtn.innerHTML = '<i class="fas fa-cart-plus"></i> ADICIONAR AO CARRINHO';
        }
    }
    
    renderAdditionsList(item);
    updateAdditionsTotal(item);
    
    DOM.additionsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    state.ui.currentModal = 'additions';
    
    logAnalytics('open_additions_modal', { 
        item_id: itemId,
        is_acai: item.isAcai || false
    });
}

function renderAdditionsList(item) {
    const additionsList = document.getElementById('additionsList');
    if (!additionsList) return;
    
    additionsList.innerHTML = '';
    
    if (!item.additions || item.additions.length === 0) {
        additionsList.innerHTML = `
            <div style="text-align: center; padding: 30px; color: var(--text-light);">
                <i class="fas fa-info-circle" style="font-size: 2rem; margin-bottom: 15px; display: block;"></i>
                <p>Este item não possui adicionais disponíveis.</p>
            </div>
        `;
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    item.additions.forEach(addition => {
        const isSelected = state.ui.selectedAdditions.has(addition.id);
        
        const additionElement = document.createElement('div');
        additionElement.className = `addition-option ${isSelected ? 'selected' : ''} ${item.isAcai ? 'acai-addition' : ''}`;
        additionElement.dataset.id = addition.id;
        additionElement.innerHTML = `
            <div class="addition-option-info">
                <div class="addition-checkbox"></div>
                <span class="addition-option-name">${addition.name}</span>
            </div>
            <span class="addition-option-price">${addition.price === 0 ? 'INCLUÍDO' : '+' + formatCurrency(addition.price)}</span>
        `;
        
        additionElement.addEventListener('click', () => toggleAddition(addition, item));
        fragment.appendChild(additionElement);
    });
    
    additionsList.appendChild(fragment);
}

function toggleAddition(addition, item) {
    if (state.ui.selectedAdditions.has(addition.id)) {
        state.ui.selectedAdditions.delete(addition.id);
    } else {
        state.ui.selectedAdditions.add(addition.id);
    }
    
    if (item) {
        renderAdditionsList(item);
        updateAdditionsTotal(item);
    }
}

function updateAdditionsTotal(item) {
    const additionsItemTotal = document.getElementById('additionsItemTotal');
    if (!additionsItemTotal || !item) return;
    
    const additionsTotal = Array.from(state.ui.selectedAdditions).reduce((total, additionId) => {
        const addition = item.additions.find(a => a.id === additionId);
        return total + (addition ? addition.price : 0);
    }, 0);
    
    const itemTotal = item.basePrice + additionsTotal;
    additionsItemTotal.textContent = formatCurrency(itemTotal);
}

// ============================================
// MODAL DO CARRINHO
// ============================================
function openCartModal() {
    renderCartItems();
    DOM.cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    state.ui.currentModal = 'cart';
    
    logAnalytics('open_cart_modal');
}

function closeCartModal() {
    DOM.cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    state.ui.currentModal = null;
}

function closeAdditionsModal() {
    DOM.additionsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    state.ui.selectedAdditions.clear();
    state.ui.currentModal = null;
}

function closeAllModals() {
    closeCartModal();
    closeAdditionsModal();
}

function renderCartItems() {
    const cartItemsElement = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (!cartItemsElement || !emptyCartMessage) return;
    
    cartItemsElement.innerHTML = '';
    
    if (state.cart.items.length === 0) {
        emptyCartMessage.style.display = 'block';
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    
    const fragment = document.createDocumentFragment();
    
    state.cart.items.forEach((item, index) => {
        const cartItemElement = createCartItemElement(item, index);
        fragment.appendChild(cartItemElement);
    });
    
    cartItemsElement.appendChild(fragment);
    
    // Adicionar linha de taxa de entrega se for delivery
    if (state.customer.deliveryType === 'delivery') {
        const deliveryFeeElement = document.createElement('div');
        deliveryFeeElement.className = 'cart-delivery-fee';
        deliveryFeeElement.innerHTML = `
            <span>Taxa de entrega:</span>
            <span>+ ${formatCurrency(CONFIG.deliveryFee)}</span>
        `;
        cartItemsElement.appendChild(deliveryFeeElement);
    }
}

function createCartItemElement(item, index) {
    const itemTotal = (item.basePrice + 
                      item.selectedAdditions.reduce((sum, add) => sum + add.price, 0)) * 
                      item.quantity;
    
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.dataset.index = index;
    
    div.innerHTML = `
        <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            ${item.selectedAdditions.length > 0 ? `
                <div class="cart-item-additions">
                    ${item.selectedAdditions.map(addition => 
                        `<span>➕ ${addition.name}</span>`
                    ).join('')}
                </div>
            ` : ''}
            <div class="cart-item-price">${formatCurrency(item.basePrice + item.selectedAdditions.reduce((sum, add) => sum + add.price, 0))} cada</div>
        </div>
        <div class="cart-item-controls">
            <div class="quantity-controls">
                <button class="quantity-btn decrease" 
                        data-index="${index}"
                        aria-label="Diminuir quantidade">
                    -
                </button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn increase" 
                        data-index="${index}"
                        aria-label="Aumentar quantidade">
                    +
                </button>
            </div>
            <button class="remove-item" 
                    data-index="${index}"
                    aria-label="Remover item do carrinho">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    return div;
}

// ============================================
// CONTROLES DO CARRINHO
// ============================================
function updateCartItemQuantity(index, change) {
    if (index < 0 || index >= state.cart.items.length) return;
    
    const item = state.cart.items[index];
    const newQuantity = item.quantity + change;
    
    if (newQuantity < 1) {
        removeCartItem(index);
        return;
    }
    
    if (newQuantity > CONFIG.maxItemQuantity) {
        showNotification(`Limite de ${CONFIG.maxItemQuantity} unidades por item!`, 'warning');
        return;
    }
    
    item.quantity = newQuantity;
    updateCartState();
    renderCartItems();
    saveToLocalStorage();
    
    logAnalytics('update_quantity', {
        item_id: item.id,
        item_name: item.name,
        new_quantity: newQuantity
    });
}

function removeCartItem(index) {
    if (index < 0 || index >= state.cart.items.length) return;
    
    const item = state.cart.items[index];
    state.cart.items.splice(index, 1);
    
    updateCartState();
    renderCartItems();
    saveToLocalStorage();
    
    showNotification(`${item.name} removido do carrinho`, 'warning');
    
    logAnalytics('remove_from_cart', {
        item_id: item.id,
        item_name: item.name
    });
}

// ============================================
// CONFIRMAÇÃO DO PEDIDO
// ============================================
function showOrderSummary() {
    if (state.cart.count === 0) {
        showNotification('Adicione itens ao carrinho antes de finalizar o pedido!', 'warning');
        return;
    }
    
    closeAllModals();
    renderOrderSummary();
    
    DOM.menuSection.style.display = 'none';
    DOM.orderSummary.classList.add('active');
    
    window.scrollTo({
        top: DOM.orderSummary.offsetTop - 20,
        behavior: 'smooth'
    });
    
    logAnalytics('start_checkout');
}

function renderOrderSummary() {
    const orderItemsElement = document.getElementById('orderItems');
    const orderTotalElement = document.getElementById('orderTotal');
    
    if (!orderItemsElement || !orderTotalElement) return;
    
    if (state.cart.items.length === 0) {
        orderItemsElement.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-light);">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <p style="font-size: 1.2rem; font-weight: 600;">Seu pedido está vazio</p>
            </div>
        `;
        orderTotalElement.textContent = formatCurrency(0);
        return;
    }
    
    const orderTotal = calculateOrderTotal();
    let itemsHTML = '';
    
    state.cart.items.forEach((item, index) => {
        const itemTotal = (item.basePrice + 
                          item.selectedAdditions.reduce((sum, add) => sum + add.price, 0)) * 
                          item.quantity;
        
        itemsHTML += `
            <div class="order-item" data-index="${index}">
                <div>
                    <strong>${item.name} (${item.quantity}x)</strong>
                    ${item.selectedAdditions.length > 0 ? `
                        <div style="font-size: 0.9rem; color: var(--text-light); margin-top: 5px;">
                            ${item.selectedAdditions.map(addition => `➕ ${addition.name}`).join('<br>')}
                        </div>
                    ` : ''}
                </div>
                <div style="text-align: right;">
                    <div>${formatCurrency(item.basePrice + item.selectedAdditions.reduce((sum, add) => sum + add.price, 0))} cada</div>
                    <div style="font-weight: 600; color: var(--primary-color);">${formatCurrency(itemTotal)}</div>
                </div>
            </div>
        `;
    });
    
    let totalHTML = `
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span>Subtotal:</span>
                <span>${formatCurrency(orderTotal.subtotal)}</span>
            </div>
            ${orderTotal.discount > 0 ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--success-color);">
                <span>Desconto:</span>
                <span>-${formatCurrency(orderTotal.discount)}</span>
            </div>
            ` : ''}
    `;
    
    // Adicionar taxa de entrega
    if (orderTotal.deliveryFee > 0) {
        totalHTML += `
            <div class="order-delivery-fee">
                <span>Taxa de entrega:</span>
                <span>+ ${formatCurrency(orderTotal.deliveryFee)}</span>
            </div>
        `;
    }
    
    totalHTML += `
            <div style="display: flex; justify-content: space-between; font-size: 1.3rem; font-weight: 700; color: var(--primary-color); padding-top: 10px; border-top: 2px solid var(--gray);">
                <span>TOTAL:</span>
                <span>${formatCurrency(orderTotal.total)}</span>
            </div>
        </div>
    `;
    
    orderItemsElement.innerHTML = itemsHTML;
    orderTotalElement.innerHTML = totalHTML;
}

// ============================================
// FORMULÁRIO DO CLIENTE E GOOGLE FORMS
// ============================================
function setupFormListeners() {
    if (!DOM.observationsTextarea || !DOM.charCount) return;
    
    DOM.observationsTextarea.addEventListener('input', function() {
        const length = this.value.length;
        DOM.charCount.textContent = length;
        
        if (length > 450) {
            DOM.charCount.parentElement.classList.add('warning');
        } else {
            DOM.charCount.parentElement.classList.remove('warning');
        }
        
        state.customer.observations = this.value;
        saveToLocalStorage();
    });

    // Validação de telefone com máscara
    if (DOM.customerPhoneInput) {
        DOM.customerPhoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 11) {
                value = value.substring(0, 11);
            }
            
            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
            state.customer.phone = value;
            saveToLocalStorage();
        });
    }
    
    // Salvar outros campos
    if (DOM.customerNameInput) {
        DOM.customerNameInput.addEventListener('input', function() {
            state.customer.name = this.value;
            saveToLocalStorage();
        });
    }
    
    if (DOM.neighborhoodInput) {
        DOM.neighborhoodInput.addEventListener('input', function() {
            state.customer.neighborhood = this.value;
            saveToLocalStorage();
        });
    }
    
    if (DOM.paymentMethodSelect) {
        DOM.paymentMethodSelect.addEventListener('change', function() {
            state.customer.paymentMethod = this.value;
            saveToLocalStorage();
        });
    }
}

// Função para mostrar a seção do WhatsApp após envio do formulário
function showWhatsAppSection() {
    if (submitted) {
        // Gerar mensagem do WhatsApp
        generateWhatsAppMessage();
        
        // Mostrar seção do WhatsApp
        DOM.customerForm.classList.remove('active');
        DOM.whatsappSection.classList.add('active');
        
        // Atualizar resumo da entrega
        updateDeliveryFields();
        
        // Rolar para a seção
        window.scrollTo({
            top: DOM.whatsappSection.offsetTop - 20,
            behavior: 'smooth'
        });
        
        // Registrar no analytics
        logAnalytics('google_form_submitted');
        
        // Resetar flag após 5 segundos (evita múltiplos envios)
        setTimeout(() => {
            submitted = false;
        }, 5000);
    }
}

// Função para preparar dados do formulário para o Google Forms
function prepareFormData() {
    // Atualizar dados do cliente
    state.customer.name = DOM.customerNameInput?.value.trim() || '';
    state.customer.phone = DOM.customerPhoneInput?.value.trim() || '';
    state.customer.neighborhood = DOM.neighborhoodInput?.value.trim() || '';
    state.customer.street = DOM.streetInput?.value.trim() || '';
    state.customer.paymentMethod = DOM.paymentMethodSelect?.value || '';
    state.customer.observations = DOM.observationsTextarea?.value.trim() || '';
    
    // Gerar resumo do pedido
    let orderSummary = `*${CONFIG.storeName} - RESUMO DO PEDIDO*\n\n`;
    
    state.cart.items.forEach((item, index) => {
        const itemPrice = item.basePrice + 
                         item.selectedAdditions.reduce((sum, add) => sum + add.price, 0);
        const itemTotal = itemPrice * item.quantity;
        
        orderSummary += `${item.quantity}x ${item.name}\n`;
        
        if (item.selectedAdditions.length > 0) {
            item.selectedAdditions.forEach(addition => {
                orderSummary += `  + ${addition.name}\n`;
            });
        }
        
        orderSummary += `  Subtotal: ${formatCurrency(itemTotal)}\n\n`;
    });
    
    const orderTotal = calculateOrderTotal();
    orderSummary += `*SUBTOTAL: ${formatCurrency(orderTotal.subtotal)}*\n`;
    
    if (orderTotal.discount > 0) {
        orderSummary += `*DESCONTO: -${formatCurrency(orderTotal.discount)}*\n`;
    }
    
    if (orderTotal.deliveryFee > 0) {
        orderSummary += `*TAXA DE ENTREGA: +${formatCurrency(orderTotal.deliveryFee)}*\n`;
    }
    
    orderSummary += `*TOTAL FINAL: ${formatCurrency(orderTotal.total)}*\n`;
    
    // Preencher campos ocultos do Google Forms
    if (DOM.hiddenCustomerName) {
        DOM.hiddenCustomerName.value = state.customer.name;
    }
    
    if (DOM.hiddenPhone) {
        DOM.hiddenPhone.value = state.customer.phone;
    }
    
    if (DOM.hiddenNeighborhood) {
        DOM.hiddenNeighborhood.value = state.customer.neighborhood;
    }
    
    if (DOM.hiddenPaymentMethod) {
        DOM.hiddenPaymentMethod.value = state.customer.paymentMethod;
    }
    
    if (DOM.hiddenObservations) {
        DOM.hiddenObservations.value = state.customer.observations;
    }
    
    if (DOM.hiddenDeliveryType) {
        // Envia apenas o tipo de entrega (sem a taxa, pois o total já inclui)
        DOM.hiddenDeliveryType.value = state.customer.deliveryType === 'delivery' ? 'Entrega' : 'Retirada';
    }
    
    if (DOM.hiddenOrderItems) {
        DOM.hiddenOrderItems.value = orderSummary;
    }
    
    if (DOM.hiddenTotalAmount) {
        DOM.hiddenTotalAmount.value = orderTotal.total.toFixed(2);
    }
    
    // Salvar no localStorage
    saveToLocalStorage();
    
    return orderSummary;
}

function validateForm() {
    const errors = [];
    
    if (!state.customer.name.trim()) {
        errors.push('Nome completo é obrigatório');
    }
    
    if (!state.customer.phone.trim()) {
        errors.push('WhatsApp é obrigatório');
    } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(state.customer.phone)) {
        errors.push('Formato do WhatsApp inválido. Use: (81) 98888-8888');
    }
    
    if (!state.customer.neighborhood.trim()) {
        errors.push('Bairro é obrigatório');
    }
    
    if (state.customer.deliveryType === 'delivery' && !state.customer.street.trim()) {
        errors.push('Endereço completo é obrigatório para entrega');
    }
    
    if (!state.customer.paymentMethod) {
        errors.push('Forma de pagamento é obrigatória');
    }
    
    if (state.cart.count === 0) {
        errors.push('Adicione itens ao carrinho antes de finalizar');
    }
    
    return errors;
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function generateWhatsAppMessage() {
    if (!DOM.whatsappMessage || !DOM.whatsappLink) return;
    
    let message = `*${CONFIG.storeName}*\n`;
    message += `Olá! Gostaria de fazer um pedido:\n\n`;
    message += `*📋 RESUMO DO PEDIDO:*\n`;
    
    const orderTotal = calculateOrderTotal();
    
    state.cart.items.forEach(item => {
        const itemPrice = item.basePrice + 
                         item.selectedAdditions.reduce((sum, add) => sum + add.price, 0);
        const itemTotal = itemPrice * item.quantity;
        
        message += `• ${item.name} (${item.quantity}x)\n`;
        
        if (item.selectedAdditions.length > 0) {
            item.selectedAdditions.forEach(addition => {
                message += `   ➕ ${addition.name}\n`;
            });
        }
        
        message += `   💰 ${formatCurrency(itemTotal)}\n\n`;
    });
    
    if (state.promotions.applied.length > 0) {
        message += `\n*🎁 PROMOÇÕES APLICADAS:*\n`;
        
        if (state.promotions.applied.includes('comboFamilia')) {
            message += `• Combo Família (20% de desconto)\n`;
        }
        
        if (orderTotal.discount > 0) {
            message += `• Desconto Total: -${formatCurrency(orderTotal.discount)}\n`;
        }
        
        message += `\n`;
    }
    
    // Detalhes do pedido
    message += `*💰 SUBTOTAL: ${formatCurrency(orderTotal.subtotal)}*\n`;
    
    if (orderTotal.discount > 0) {
        message += `*💰 DESCONTO: -${formatCurrency(orderTotal.discount)}*\n`;
    }
    
    if (orderTotal.deliveryFee > 0) {
        message += `*🛵 TAXA DE ENTREGA: +${formatCurrency(orderTotal.deliveryFee)}*\n`;
    }
    
    message += `*💰 TOTAL FINAL: ${formatCurrency(orderTotal.total)}*\n\n`;
    
    if (state.customer.selectedGift !== 'nenhum') {
        const gift = CONFIG.giftOptions[state.customer.selectedGift];
        message += `*🎁 BRINDE ESCOLHIDO:* ${gift.name} ${gift.emoji}\n\n`;
    }
    
    message += `*👤 DADOS DO CLIENTE:*\n`;
    message += `• Nome: ${state.customer.name}\n`;
    message += `• WhatsApp: ${state.customer.phone}\n`;
    message += `• Recebimento: ${state.customer.deliveryType === 'delivery' ? 'Entrega' : 'Retirada'}\n`;
    
    if (state.customer.deliveryType === 'delivery') {
        message += `• Endereço: ${state.customer.street}, ${state.customer.neighborhood}\n`;
    } else {
        message += `• Bairro: ${state.customer.neighborhood}\n`;
        if (state.customer.street.trim()) {
            message += `• Endereço (opcional): ${state.customer.street}\n`;
        }
    }
    
    message += `• Pagamento: ${state.customer.paymentMethod}\n`;
    
    if (state.customer.observations.trim()) {
        message += `• Observações: ${state.customer.observations}\n`;
    }
    
    message += `\n_*Pedido gerado automaticamente pelo cardápio digital*_`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    
    DOM.whatsappMessage.textContent = message;
    DOM.whatsappLink.href = whatsappURL;
    
    document.title = `📱 Enviar pedido - ${CONFIG.storeName}`;
}

// ============================================
// LOCAL STORAGE
// ============================================
function saveToLocalStorage() {
    try {
        const data = {
            cart: state.cart,
            customer: state.customer,
            promotions: state.promotions,
            version: state.version,
            timestamp: Date.now()
        };
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    } catch (error) {
        console.warn('Não foi possível salvar no localStorage:', error);
        showNotification('Não foi possível salvar seu pedido localmente', 'warning');
    }
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (!saved) return;
        
        const data = JSON.parse(saved);
        
        if (!data.version || data.version !== state.version) {
            localStorage.removeItem(CONFIG.storageKey);
            console.log('Dados antigos removidos devido à incompatibilidade de versão');
            return;
        }
        
        if (data.timestamp && Date.now() - data.timestamp > 7 * 24 * 60 * 60 * 1000) {
            localStorage.removeItem(CONFIG.storageKey);
            console.log('Dados antigos removidos (mais de 7 dias)');
            return;
        }
        
        if (data.cart) {
            state.cart = data.cart;
        }
        
        if (data.customer) {
            Object.assign(state.customer, data.customer);
            
            // Preencher campos do formulário
            if (DOM.customerNameInput) DOM.customerNameInput.value = state.customer.name;
            if (DOM.customerPhoneInput) DOM.customerPhoneInput.value = state.customer.phone;
            if (DOM.neighborhoodInput) DOM.neighborhoodInput.value = state.customer.neighborhood;
            if (DOM.streetInput) DOM.streetInput.value = state.customer.street;
            if (DOM.paymentMethodSelect) DOM.paymentMethodSelect.value = state.customer.paymentMethod;
            if (DOM.observationsTextarea) {
                DOM.observationsTextarea.value = state.customer.observations;
                DOM.charCount.textContent = state.customer.observations.length;
            }
            
            // Selecionar opção de entrega/retirada
            if (DOM.deliveryOptionsForm) {
                DOM.deliveryOptionsForm.forEach(option => {
                    option.classList.remove('selected');
                    const radio = option.querySelector('.delivery-radio');
                    radio.classList.remove('selected');
                    
                    if (option.dataset.type === state.customer.deliveryType) {
                        option.classList.add('selected');
                        radio.classList.add('selected');
                    }
                });
            }
            
            // Atualizar campos baseados na seleção
            updateDeliveryFields();
            
            // Selecionar brinde
            const selectedGift = document.querySelector(`.gift-option[data-gift="${state.customer.selectedGift}"]`);
            if (selectedGift) {
                document.querySelectorAll('.gift-option').forEach(opt => opt.classList.remove('selected'));
                selectedGift.classList.add('selected');
            }
        }
        
        if (data.promotions) {
            state.promotions = data.promotions;
        }
        
        console.log('Dados carregados do localStorage:', data);
    } catch (error) {
        console.warn('Não foi possível carregar do localStorage:', error);
        localStorage.removeItem(CONFIG.storageKey);
    }
}

function clearLocalStorage() {
    try {
        localStorage.removeItem(CONFIG.storageKey);
        console.log('Dados do localStorage limpos');
    } catch (error) {
        console.warn('Não foi possível limpar o localStorage:', error);
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Menu - adicionar itens
    DOM.menuGrid?.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.btn-add');
        if (addBtn) {
            const itemId = parseInt(addBtn.dataset.id);
            openAdditionsModal(itemId);
            e.preventDefault();
        }
    });
    
    // Controles do carrinho
    document.addEventListener('click', (e) => {
        if (e.target.closest('.quantity-btn.increase')) {
            const index = parseInt(e.target.closest('.quantity-btn').dataset.index);
            updateCartItemQuantity(index, 1);
            e.preventDefault();
        }
        
        if (e.target.closest('.quantity-btn.decrease')) {
            const index = parseInt(e.target.closest('.quantity-btn').dataset.index);
            updateCartItemQuantity(index, -1);
            e.preventDefault();
        }
        
        if (e.target.closest('.remove-item')) {
            const index = parseInt(e.target.closest('.remove-item').dataset.index);
            removeCartItem(index);
            e.preventDefault();
        }
    });
    
    // Abrir carrinho
    DOM.viewCartBtnDesktop?.addEventListener('click', openCartModal);
    DOM.viewCartBtnMobile?.addEventListener('click', openCartModal);
    DOM.viewFullCartBtn?.addEventListener('click', openCartModal);
    DOM.finalizeOrderBtn?.addEventListener('click', showOrderSummary);
    DOM.finalizeFromSummaryBtn?.addEventListener('click', showOrderSummary);
    
    // Modal de adicionais
    DOM.addToCartBtn?.addEventListener('click', () => {
        const itemId = state.ui.currentItemId;
        const additions = Array.from(state.ui.selectedAdditions).map(id => {
            const item = menuItems.find(i => i.id === itemId);
            return item?.additions?.find(a => a.id === id);
        }).filter(Boolean);
        
        if (addItemToCart(itemId, additions)) {
            closeAdditionsModal();
        }
    });
    
    DOM.cancelAdditionsBtn?.addEventListener('click', closeAdditionsModal);
    
    // Fechar modais
    DOM.closeCartModal?.addEventListener('click', closeCartModal);
    DOM.closeAdditionsModal?.addEventListener('click', closeAdditionsModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === DOM.cartModal) closeCartModal();
        if (e.target === DOM.additionsModal) closeAdditionsModal();
    });
    
    DOM.continueShoppingBtn?.addEventListener('click', closeCartModal);
    
    // Navegação entre seções
    DOM.proceedToFormBtn?.addEventListener('click', () => {
        DOM.orderSummary.classList.remove('active');
        DOM.customerForm.classList.add('active');
        window.scrollTo({
            top: DOM.customerForm.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    DOM.backToOrderBtn?.addEventListener('click', () => {
        DOM.customerForm.classList.remove('active');
        DOM.orderSummary.classList.add('active');
        window.scrollTo({
            top: DOM.orderSummary.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    DOM.backToFormBtn?.addEventListener('click', () => {
        DOM.whatsappSection.classList.remove('active');
        DOM.customerForm.classList.add('active');
        window.scrollTo({
            top: DOM.customerForm.offsetTop - 20,
            behavior: 'smooth'
        });
    });
    
    // Envio do formulário para Google Forms
    DOM.orderForm?.addEventListener('submit', (e) => {
        // Não prevenir o comportamento padrão - deixar enviar para Google Forms
        const errors = validateForm();
        if (errors.length > 0) {
            e.preventDefault();
            showNotification(errors[0], 'error');
            if (errors.length > 1) {
                console.warn('Múltiplos erros de validação:', errors);
            }
            return;
        }
        
        // Preparar dados para o Google Forms
        prepareFormData();
        
        // Mostrar mensagem de envio
        showNotification('Enviando dados para o sistema...', 'success');
        
        // O formulário será enviado normalmente para o Google Forms
        // A função showWhatsAppSection será chamada via onload do iframe
        
        logAnalytics('submit_google_form', {
            delivery_type: state.customer.deliveryType,
            items_count: state.cart.count,
            has_delivery_fee: state.customer.deliveryType === 'delivery'
        });
    });
    
    // Seleção de brinde
    DOM.giftOptions?.forEach(option => {
        option.addEventListener('click', () => {
            const gift = option.dataset.gift;
            state.customer.selectedGift = gift;
            
            DOM.giftOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            
            saveToLocalStorage();
            
            if (gift !== 'nenhum') {
                const giftInfo = CONFIG.giftOptions[gift];
                showNotification(`Brinde selecionado: ${giftInfo.name} ${giftInfo.emoji}`);
            }
        });
    });
    
    // PROMOÇÕES
    document.querySelectorAll('.btn-apply-promo[data-combo]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const comboType = e.target.closest('button').dataset.combo;
            applyComboPromotion(comboType);
        });
    });
    
    // Atalhos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
        
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveToLocalStorage();
            showNotification('Pedido salvo localmente!');
        }
        
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            if (confirm('Tem certeza que deseja limpar todos os dados?')) {
                clearLocalStorage();
                location.reload();
            }
        }
    });
    
    // Salvar antes de sair
    window.addEventListener('beforeunload', () => {
        saveToLocalStorage();
    });
    
    // Verificação de conexão
    window.addEventListener('online', () => {
        showNotification('Conexão restabelecida!', 'success');
    });
    
    window.addEventListener('offline', () => {
        showNotification('Você está offline. Seu pedido será salvo localmente.', 'warning');
    });
}

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================
function formatCurrency(value) {
    return `${CONFIG.currency} ${value.toFixed(2).replace('.', ',')}`;
}

function updateElementText(element, text) {
    if (element && element.textContent !== String(text)) {
        element.textContent = text;
    }
}

function showNotification(message, type = 'success') {
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupAccessibility() {
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim() && !button.querySelector('i')) {
            button.setAttribute('aria-label', 'Botão');
        }
    });
    
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                const target = mutation.target;
                if (target.classList.contains('active')) {
                    const firstFocusable = target.querySelector('button, input, select, textarea');
                    if (firstFocusable) {
                        setTimeout(() => firstFocusable.focus(), 100);
                    }
                }
            }
        });
    });
    
    if (DOM.cartModal) observer.observe(DOM.cartModal, { attributes: true });
    if (DOM.additionsModal) observer.observe(DOM.additionsModal, { attributes: true });
}

// ============================================
// ANALYTICS SIMPLES
// ============================================
function logAnalytics(event, data = {}) {
    const analyticsData = {
        event,
        timestamp: new Date().toISOString(),
        cart_count: state.cart.count,
        cart_total: state.cart.total,
        delivery_type: state.customer.deliveryType,
        ...data
    };
    
    console.log('📊 Analytics:', analyticsData);
    
    try {
        const logs = JSON.parse(localStorage.getItem('analytics_logs') || '[]');
        logs.push(analyticsData);
        
        if (logs.length > 100) {
            logs.splice(0, logs.length - 100);
        }
        
        localStorage.setItem('analytics_logs', JSON.stringify(logs));
    } catch (error) {}
}
// ============================================
// CONTROLE DE FECHAMENTO DA LOJA VIA CÓDIGO
// ============================================

// 🔑 MUDE ESTA VARIÁVEL PARA CONTROLAR A LOJA:
//    true  = LOJA FECHADA (mostra o alerta)
//    false = LOJA ABERTA (funcionamento normal)
// 
// PARA ABRIR: mude para false
// PARA FECHAR: mude para true
// ============================================
const STORE_IS_CLOSED = true; // <--- MUDE AQUI: true = fechado, false = aberto
// ============================================

// Atualizar interface baseado na variável
function updateStoreStatus() {
    const overlay = document.getElementById('maintenanceOverlay');
    const badge = document.querySelector('.maintenance-badge');
    const body = document.body;
    
    if (STORE_IS_CLOSED) {
        // Mostrar overlay
        overlay?.classList.add('active');
        
        // Mostrar badge
        badge?.classList.add('active');
        
        // Adicionar classe ao body
        body.classList.add('store-closed');
        
        // Travar scroll
        document.body.style.overflow = 'hidden';
        
        console.log('🔒 LOJA FECHADA - Modo manutenção ativado');
    } else {
        // Esconder overlay
        overlay?.classList.remove('active');
        
        // Esconder badge
        badge?.classList.remove('active');
        
        // Remover classe do body
        body.classList.remove('store-closed');
        
        // Liberar scroll
        document.body.style.overflow = 'auto';
        
        console.log('🟢 LOJA ABERTA - Funcionamento normal');
    }
}

// Inicializar controle
function initStoreControl() {
    // Criar badge no header se não existir
    const tagline = document.querySelector('.tagline');
    if (tagline && !document.querySelector('.maintenance-badge')) {
        const badge = document.createElement('span');
        badge.className = 'maintenance-badge';
        badge.textContent = '🔒 FECHADO';
        tagline.appendChild(badge);
    }
    
    // Atualizar UI baseado na variável
    updateStoreStatus();
    
    console.log(`🏪 Status da loja: ${STORE_IS_CLOSED ? '🔒 FECHADA' : '🟢 ABERTA'}`);
    console.log('💡 Para abrir/fechar, edite a variável STORE_IS_CLOSED no script.js');
}

// ============================================
// INICIALIZAÇÃO FINAL
// ============================================

// Sobrescrever o initializeApp original
const originalInit = initializeApp;
initializeApp = function() {
    originalInit();
    initStoreControl(); // Inicializa o controle de fechamento
};

window.appState = state;
window.appConfig = CONFIG;

console.log(`
╔═══════════════════════════════════════╗
║    🍔🫐 CARDÁPIO DIGITAL INICIADO!   ║
║                                       ║
║  Versão: ${state.version}                    ║
║  Itens no cardápio: ${menuItems.length}             ║
║  WhatsApp: ${CONFIG.whatsappNumber}     ║
║  Loja: ${STORE_IS_CLOSED ? '🔒 FECHADA' : '🟢 ABERTA'}   ║
╚═══════════════════════════════════════╝
`);