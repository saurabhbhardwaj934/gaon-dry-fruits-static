// ============ GAON DRY FRUITS - MAIN JAVASCRIPT ============

// ============ PRODUCTS DATA ============
const PRODUCTS = [
  { id: 1, name: 'California Almonds', nameHindi: 'Badam', category: 'Badam', price: 540, maxPrice: 1990, weight: 250, isBestSeller: true, stock: 150, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d4b?w=400&h=400&fit=crop', description: 'Premium California almonds, rich in vitamin E and healthy fats. Perfect for daily snacking and overall health.' },
  { id: 2, name: 'Premium Cashews', nameHindi: 'Kaju', category: 'Kaju', price: 620, maxPrice: 2250, weight: 250, isBestSeller: true, stock: 120, image: 'https://images.unsplash.com/photo-1536591375624-9b535f7a8bf7?w=400&h=400&fit=crop', description: 'W240 premium whole cashews, handpicked and hygienically packed. Rich in protein and essential minerals.' },
  { id: 3, name: 'Pistachios', nameHindi: 'Pista', category: 'Pista', price: 680, maxPrice: 2450, weight: 250, isBestSeller: true, stock: 100, image: 'https://images.unsplash.com/photo-1525803377221-4f9e3d4b4c4b?w=400&h=400&fit=crop', description: 'Premium Iranian pistachios, naturally opened. Great source of antioxidants and heart-healthy fats.' },
  { id: 4, name: 'Raisins (Kishmish)', nameHindi: 'Kishmish', category: 'Kishmish', price: 240, maxPrice: 850, weight: 250, isBestSeller: true, stock: 200, image: 'https://images.unsplash.com/photo-1596003906949-6f2c2a4f1c4b?w=400&h=400&fit=crop', description: 'Golden raisins, naturally sun-dried. Perfect for baking, snacking, and adding natural sweetness to dishes.' },
  { id: 5, name: 'Walnuts (Akhrot)', nameHindi: 'Akhrot', category: 'Akhrot', price: 550, maxPrice: 1990, weight: 250, isBestSeller: true, stock: 130, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Kashmiri walnuts, brain food rich in omega-3 fatty acids. Supports heart and brain health.' },
  { id: 6, name: 'Dates (Khajoor)', nameHindi: 'Khajoor', category: 'Dates', price: 280, maxPrice: 990, weight: 500, isBestSeller: true, stock: 180, image: 'https://images.unsplash.com/photo-1601897655071-f2e0a2f3b4a0?w=400&h=400&fit=crop', description: 'Premium Medjool dates from UAE. Natural energy booster, rich in fiber and potassium.' },
  { id: 7, name: 'Anjeer (Dried Figs)', nameHindi: 'Anjeer', category: 'Anjeer', price: 420, maxPrice: 1450, weight: 250, stock: 90, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=400&fit=crop', description: 'Premium Afghan anjeer, rich in fiber and essential minerals. Great for digestive health.' },
  { id: 8, name: 'Makhana (Fox Nuts)', nameHindi: 'Makhana', category: 'Makhana', price: 180, maxPrice: 640, weight: 250, stock: 200, image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&h=400&fit=crop', description: 'Light and crunchy makhana, perfect for fasting and healthy snacking. Low in calories.' },
  { id: 9, name: 'Seed Mix', nameHindi: 'Seed Mix', category: 'Seed & Mix', price: 320, maxPrice: 1150, weight: 250, stock: 160, image: 'https://images.unsplash.com/photo-1550236520-7050f3582da3?w=400&h=400&fit=crop', description: 'Premium mix of pumpkin, sunflower, flax, and chia seeds. Power-packed nutrition in every bite.' },
  { id: 10, name: 'Trail Mix', nameHindi: 'Trail Mix', category: 'Seed & Mix', price: 350, maxPrice: 1250, weight: 250, stock: 140, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=400&fit=crop', description: 'Ultimate trail mix with almonds, cashews, raisins, and cranberries. Perfect for on-the-go energy.' },
  { id: 11, name: 'Badam - 500g', nameHindi: 'Badam', category: 'Badam', price: 990, maxPrice: 1990, weight: 500, stock: 80, image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d4b?w=400&h=400&fit=crop', description: 'Family pack California almonds. Best value for daily nutrition.' },
  { id: 12, name: 'Kaju - 500g', nameHindi: 'Kaju', category: 'Kaju', price: 1150, maxPrice: 2250, weight: 500, stock: 70, image: 'https://images.unsplash.com/photo-1536591375624-9b535f7a8bf7?w=400&h=400&fit=crop', description: 'Family pack premium whole cashews. Perfect for festivals and gifting.' },
  { id: 13, name: 'Gift Box Premium', nameHindi: 'Gift Box', category: 'Gift Boxes', price: 1499, maxPrice: 2999, weight: 500, stock: 50, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238f7a2?w=400&h=400&fit=crop', description: 'Premium dry fruit gift box with assorted nuts. Perfect for festivals, weddings, and corporate gifting.' },
  { id: 14, name: 'Kishmish - 500g', nameHindi: 'Kishmish', category: 'Kishmish', price: 450, maxPrice: 850, weight: 500, stock: 150, image: 'https://images.unsplash.com/photo-1596003906949-6f2c2a4f1c4b?w=400&h=400&fit=crop', description: 'Family pack golden raisins. Perfect for daily use in cooking and baking.' },
  { id: 15, name: 'Akhrot Kernels', nameHindi: 'Akhrot', category: 'Akhrot', price: 750, maxPrice: 1990, weight: 250, stock: 100, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', description: 'Premium walnut kernels, shell-free and ready to eat. Rich in omega-3 for brain health.' },
  { id: 16, name: 'Pista - 500g', nameHindi: 'Pista', category: 'Pista', price: 1299, maxPrice: 2450, weight: 500, stock: 60, image: 'https://images.unsplash.com/photo-1525803377221-4f9e3d4b4c4b?w=400&h=400&fit=crop', description: 'Family pack Iranian pistachios. Best for festive occasions and gifting.' },
];

const CATEGORIES = ['All', 'Badam', 'Kaju', 'Pista', 'Kishmish', 'Akhrot', 'Dates', 'Anjeer', 'Seed & Mix', 'Makhana', 'Gift Boxes'];

// ============ CART MANAGEMENT ============
const Cart = {
  getItems: () => JSON.parse(localStorage.getItem('gaon_cart') || '[]'),
  saveItems: (items) => localStorage.setItem('gaon_cart', JSON.stringify(items)),
  
  addToCart: (productId, weight, quantity = 1) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;
    
    const price = Cart.calculatePrice(product, weight);
    const items = Cart.getItems();
    const existing = items.find(i => i.id === productId && i.weight === weight);
    
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price,
        weight,
        quantity,
        maxPrice: product.maxPrice || price
      });
    }
    
    Cart.saveItems(items);
    Cart.updateBadge();
    showToast(`${product.name} added to cart!`);
    return true;
  },
  
  removeFromCart: (productId, weight) => {
    const items = Cart.getItems().filter(i => !(i.id === productId && i.weight === weight));
    Cart.saveItems(items);
    Cart.updateBadge();
  },
  
  updateQuantity: (productId, weight, quantity) => {
    if (quantity <= 0) {
      Cart.removeFromCart(productId, weight);
      return;
    }
    const items = Cart.getItems();
    const item = items.find(i => i.id === productId && i.weight === weight);
    if (item) {
      item.quantity = quantity;
      Cart.saveItems(items);
    }
  },
  
  clearCart: () => {
    Cart.saveItems([]);
    Cart.updateBadge();
  },
  
  calculatePrice: (product, weight) => {
    const basePrice = product.price;
    if (weight === 100) return Math.round(basePrice * 0.45);
    if (weight === 250) return basePrice;
    if (weight === 500) return product.maxPrice ? Math.round(product.maxPrice * 0.85) : basePrice * 1.9;
    if (weight === 1000) return product.maxPrice || basePrice * 3.5;
    return basePrice;
  },
  
  getTotalItems: () => Cart.getItems().reduce((sum, i) => sum + i.quantity, 0),
  getSubtotal: () => Cart.getItems().reduce((sum, i) => sum + (i.price * i.quantity), 0),
  getShipping: (subtotal) => subtotal >= 999 ? 0 : 99,
  getTotal: (subtotal, shipping) => subtotal + shipping,
  
  updateBadge: () => {
    const badge = document.querySelector('.cart-count');
    if (badge) {
      const count = Cart.getTotalItems();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    }
  }
};

// ============ USER MANAGEMENT ============
const User = {
  getCurrent: () => JSON.parse(localStorage.getItem('gaon_user') || 'null'),
  save: (user) => localStorage.setItem('gaon_user', JSON.stringify(user)),
  logout: () => {
    localStorage.removeItem('gaon_user');
    window.location.href = 'index.html';
  },
  isAdmin: () => {
    const user = User.getCurrent();
    return user && user.isAdmin;
  }
};

// ============ ORDER MANAGEMENT ============
const Orders = {
  getAll: () => JSON.parse(localStorage.getItem('gaon_orders') || '[]'),
  save: (orders) => localStorage.setItem('gaon_orders', JSON.stringify(orders)),
  
  create: (orderData) => {
    const orders = Orders.getAll();
    const trackingId = 'GDF' + Date.now().toString().slice(-8);
    const order = {
      ...orderData,
      trackingId,
      orderStatus: 'Pending',
      createdAt: new Date().toISOString(),
      trackingHistory: [{ status: 'Order Placed', date: new Date().toISOString(), note: 'Order confirmed' }]
    };
    orders.unshift(order);
    Orders.save(orders);
    return order;
  },
  
  updateStatus: (trackingId, newStatus) => {
    const orders = Orders.getAll();
    const order = orders.find(o => o.trackingId === trackingId);
    if (order) {
      order.orderStatus = newStatus;
      order.trackingHistory.push({
        status: newStatus,
        date: new Date().toISOString(),
        note: `Status updated to ${newStatus}`
      });
      Orders.save(orders);
    }
  },
  
  findByTrackingId: (trackingId) => {
    return Orders.getAll().find(o => o.trackingId === trackingId);
  },
  
  getUserOrders: (email) => {
    return Orders.getAll().filter(o => o.userEmail === email);
  }
};

// ============ TOAST NOTIFICATION ============
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============ NAVBAR SCROLL EFFECT ============
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

// ============ SCROLL TO TOP ============
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (btn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ============ RENDER PRODUCT CARD ============
function renderProductCard(product) {
  return `
    <div class="product-card reveal">
      ${product.isBestSeller ? '<span class="product-badge">Best Seller</span>' : ''}
      <a href="product.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400/F5E9D3/2E7D32?text=${encodeURIComponent(product.name)}'">
      </a>
      <div class="product-info">
        <h4>${product.name}</h4>
        <div class="price">
          ₹${product.price}.00
          ${product.maxPrice > 0 ? `<span class="old-price">₹${product.maxPrice}.00</span>` : ''}
        </div>
        <div class="weight">(${product.weight}g)</div>
        <button class="btn-add-cart" onclick="event.stopPropagation(); Cart.addToCart(${product.id}, ${product.weight})">
          ADD TO CART
        </button>
      </div>
    </div>
  `;
}

// ============ RENDER PRODUCTS GRID ============
function renderProductsGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = products.map(renderProductCard).join('');
    setTimeout(initScrollAnimations, 100);
  }
}

// ============ HERO SLIDER ============
function initHeroSlider() {
  const container = document.querySelector('.hero-slider-container');
  if (!container) return;

  const slides = container.querySelectorAll('.hero-slide');
  const prevBtn = container.querySelector('.prev-btn');
  const nextBtn = container.querySelector('.next-btn');
  const dots = container.querySelectorAll('.slider-dots .dot');
  
  if (slides.length <= 1) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DELAY = 5000;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentIndex = (index + slides.length) % slides.length;
    
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });
  
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetAutoplay();
    });
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    startAutoplay();
  }

  container.addEventListener('mouseenter', stopAutoplay);
  container.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

// ============ INITIALIZE ============
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initScrollAnimations();
  initNavbarScroll();
  initScrollTop();
  initHeroSlider();
  
  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
