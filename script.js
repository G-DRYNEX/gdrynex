const BUSINESS = {
  whatsapp: "528131246699",
  email: "oficina.gdrynex@gmail.com",
  facebook: "https://www.facebook.com/share/1EPhXAB16Q/?mibextid=wwXIfr",
  instagram: ""
};

// PRECIOS PROVISIONALES PARA DISEÑO Y PRUEBAS.
// NO PUBLICAR COMO PRECIOS DEFINITIVOS.
const PRODUCTS = [
  {
    id: "cam-2mp",
    category: "videovigilancia",
    name: "Cámara Full HD 2 MP",
    level: "Esencial",
    price: 1190,
    icon: "◉",
    image: "img/camara-2mp.png",
    features: ["Resolución Full HD 1080p", "Visión nocturna", "Uso interior / exterior", "Monitoreo desde celular"],
    quantityEnabled: true
  },
  {
    id: "cam-4mp",
    category: "videovigilancia",
    name: "Cámara Alta Definición 4 MP",
    level: "Recomendada",
    price: 1690,
    icon: "◉",
    image: "img/camara-4mp.png",
    features: ["Resolución 4 MP", "Mayor nivel de detalle", "Visión nocturna", "Uso interior / exterior", "Monitoreo desde celular"],
    quantityEnabled: true
  },
  {
    id: "cam-fullcolor",
    category: "videovigilancia",
    name: "Cámara 4 MP Full Color",
    level: "Avanzada",
    price: 2290,
    icon: "◉",
    image: "img/camara-full-color.png",
    features: ["Resolución 4 MP", "Imagen a color en condiciones de baja iluminación", "Uso exterior", "Detección de movimiento", "Monitoreo desde celular"],
    quantityEnabled: true
  },
  {
    id: "cam-8mp",
    category: "videovigilancia",
    name: "Cámara 8 MP / 4K",
    level: "Premium",
    price: 3490,
    icon: "◉",
    image: "img/camara-8mp-4k.png",
    features: ["Resolución Ultra HD 4K", "Mayor definición de imagen", "Visión nocturna", "Uso interior / exterior", "Monitoreo desde celular"],
    quantityEnabled: true
  },
  {
    id: "cam-wifi",
    category: "videovigilancia",
    name: "Cámara WiFi Inteligente",
    level: "Esencial",
    price: 1390,
    icon: "◉",
    image: "img/camara-wifi.png",
    features: ["Resolución Full HD", "Audio bidireccional", "Detección de movimiento", "Acceso remoto", "Notificaciones móviles"],
    quantityEnabled: true
  },
  {
    id: "cam-ptz",
    category: "videovigilancia",
    name: "Cámara PTZ Motorizada",
    level: "Premium",
    price: 4990,
    icon: "◉",
    image: "img/camara-ptz.png",
    features: ["Movimiento remoto", "Zoom", "Visión nocturna", "Monitoreo desde celular", "Cobertura de áreas amplias"],
    quantityEnabled: true
  },
  {
    id: "grabador-4",
    category: "videovigilancia",
    name: "Sistema de Grabación 4 Canales",
    level: "Esencial",
    price: 2990,
    icon: "▰",
    image: "img/grabador-4-canales.png",
    features: ["Soporte para hasta 4 cámaras", "Grabación continua", "Acceso remoto", "Almacenamiento ampliable"],
    quantityEnabled: true
  },
  {
    id: "grabador-8",
    category: "videovigilancia",
    name: "Sistema de Grabación 8 Canales",
    level: "Recomendada",
    price: 4290,
    icon: "▰",
    image: "img/grabador-8-canales.png",
    features: ["Soporte para hasta 8 cámaras", "Grabación continua", "Acceso remoto", "Mayor capacidad de almacenamiento"],
    quantityEnabled: true
  },
  {
    id: "acceso-pin",
    category: "acceso",
    name: "Control de Acceso con PIN / Tarjeta",
    level: "Esencial",
    price: 2490,
    icon: "▦",
    image: "img/acceso-pin-tarjeta.png",
    features: ["Acceso mediante PIN", "Acceso mediante tarjeta", "Administración de usuarios", "Registro de accesos"],
    quantityEnabled: true
  },
  {
    id: "acceso-bio",
    category: "acceso",
    name: "Acceso Biométrico",
    level: "Recomendada",
    price: 3990,
    icon: "◎",
    image: "img/acceso-biometrico.png",
    features: ["Acceso mediante huella", "Compatibilidad con tarjeta", "Gestión de usuarios", "Registro de eventos"],
    quantityEnabled: true
  },
  {
    id: "acceso-facial",
    category: "acceso",
    name: "Acceso Facial Inteligente",
    level: "Premium",
    price: 5490,
    icon: "◎",
    image: "img/acceso-facial.png",
    features: ["Reconocimiento facial", "Gestión de usuarios", "Registro de eventos", "Métodos adicionales según configuración"],
    quantityEnabled: true
  },
  {
    id: "videoportero",
    category: "acceso",
    name: "Videoportero Inteligente",
    level: "Recomendada",
    price: 4990,
    icon: "▣",
    image: "img/videoportero.png",
    features: ["Video de alta definición", "Audio bidireccional", "Apertura remota", "Notificaciones móviles"],
    quantityEnabled: true
  },
  {
    id: "cerradura-electromagnetica",
    category: "acceso",
    name: "Sistema de Cerradura Electromagnética",
    level: "Esencial",
    price: 2490,
    icon: "▦",
    image: "img/cerradura-electromagnetica.png",
    features: ["Control eléctrico de puerta", "Cerradura electromagnética", "Botón de salida", "Integración con control de acceso"],
    quantityEnabled: true
  },
  {
    id: "alarma",
    category: "automatizacion",
    name: "Kit de Alarma Residencial",
    level: "Recomendada",
    price: 3990,
    icon: "◒",
    image: "img/kit-alarma.png",
    features: ["Panel central", "Sensor de movimiento", "Sensor de apertura", "Sirena", "Alertas en celular"],
    quantityEnabled: true
  },
  {
    id: "sensor-intrusion",
    category: "automatizacion",
    name: "Sensor Adicional de Intrusión",
    level: "Esencial",
    price: 690,
    icon: "◒",
    image: "img/sensor-intrusion.png",
    features: ["Sensor de movimiento o apertura", "Integración con sistema compatible", "Ampliación de cobertura", "Configuración según proyecto"],
    quantityEnabled: true
  },
  {
    id: "porton",
    category: "automatizacion",
    name: "Automatización de Portón",
    level: "Profesional",
    price: 8490,
    icon: "↔",
    image: "img/automatizacion-porton.png",
    features: ["Automatización de apertura y cierre", "Controles remotos", "Elementos de seguridad", "Desbloqueo manual", "Configuración según tipo de portón"],
    quantityEnabled: false,
    technicalNote: "Sujeto a valoración técnica"
  },
  {
    id: "iluminacion",
    category: "automatizacion",
    name: "Iluminación Inteligente",
    level: "Esencial",
    price: 1490,
    icon: "✦",
    image: "img/iluminacion-inteligente.png",
    features: ["Control desde celular", "Horarios programables", "Escenas personalizadas", "Automatización", "Ahorro de energía"],
    quantityEnabled: true
  },
  {
    id: "punto-electrico",
    category: "electricidad",
    name: "Instalación de Punto Eléctrico",
    level: "Esencial",
    price: 690,
    icon: "⌁",
    image: "img/punto-electrico.png",
    features: ["Contacto o apagador", "Instalación profesional", "Pruebas de funcionamiento", "Material básico según proyecto"],
    quantityEnabled: true
  },
  {
    id: "diagnostico",
    category: "electricidad",
    name: "Diagnóstico Eléctrico",
    level: "Recomendada",
    price: 990,
    icon: "⌁",
    image: "img/diagnostico-electrico.png",
    features: ["Revisión general", "Mediciones eléctricas", "Detección de fallas", "Recomendación técnica"],
    quantityEnabled: false
  },
  {
    id: "centro-carga",
    category: "electricidad",
    name: "Servicio de Centro de Carga",
    level: "Profesional",
    price: 2490,
    icon: "ϟ",
    image: "img/centro-carga.png",
    features: ["Diagnóstico inicial", "Revisión de protecciones", "Organización de circuitos", "Evaluación de capacidad", "Recomendación técnica"],
    quantityEnabled: false,
    technicalNote: "Sujeto a valoración técnica"
  }
];

const STORAGE_KEY = "gdrynex-precotizacion";
let cart = loadCart();

const money = value => new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  maximumFractionDigits: 0
}).format(value) + " MXN";

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    return Object.fromEntries(
      Object.entries(savedCart)
        .filter(([id, qty]) => PRODUCTS.some(product => product.id === id) && Number(qty) > 0)
        .map(([id, qty]) => {
          const product = PRODUCTS.find(item => item.id === id);
          return [id, product.quantityEnabled ? Math.max(1, Number(qty)) : 1];
        })
    );
  } catch {
    return {};
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  renderCart();
  updateCount();
}

function cartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function updateCount() {
  document.querySelectorAll("[data-cart-count]").forEach(element => {
    element.textContent = cartCount();
  });
}

function categoryName(id) {
  return {
    videovigilancia: "Videovigilancia",
    acceso: "Control de acceso",
    automatizacion: "Automatización",
    electricidad: "Electricidad"
  }[id];
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function productVisual(product) {
  if (product.image) {
    return `<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="product-icon" aria-hidden="true" hidden>${product.icon}</span>`;
  }
  return `<span class="product-icon" aria-hidden="true">${product.icon}</span>`;
}

function renderProducts(items = PRODUCTS) {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  document.querySelector("[data-product-total]").textContent = items.length;
  grid.innerHTML = items.length
    ? items.map(product => {
        const features = product.features.map(feature => "<li>" + feature + "</li>").join("");
        const quantityControl = product.quantityEnabled
          ? `<label><span class="sr-only">Cantidad de ${product.name}</span><input type="number" min="1" max="99" value="1" data-qty="${product.id}"></label>`
          : "";
        const recommendedClass = product.level === "Recomendada" ? " recommended" : "";
        const technicalNote = product.technicalNote
          ? `<p class="technical-note">${product.technicalNote}</p>`
          : "";

        return `
          <article class="product-card${recommendedClass}">
            <div class="product-visual">
              <span class="product-level">${product.level}</span>
              ${productVisual(product)}
            </div>
            <div class="product-body">
              <span class="product-category">${categoryName(product.category)}</span>
              <h3>${product.name}</h3>
              <ul class="feature-list">${features}</ul>
              <div class="product-bottom">
                <div class="product-price">
                  <small>Solución desde</small>
                  <strong>${money(product.price)}</strong>
                  <span>Referencia inicial sujeta a valoración técnica.</span>
                </div>
                ${technicalNote}
                <div class="product-controls${product.quantityEnabled ? "" : " single-action"}">
                  ${quantityControl}
                  <button class="add-button" type="button" data-add="${product.id}">Agregar a mi precotización</button>
                </div>
              </div>
            </div>
          </article>
        `;
      }).join("")
    : `<div class="no-results"><h3>No encontramos resultados</h3><p>Prueba con otra búsqueda o categoría.</p></div>`;
}

function addToCart(id, qty) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;
  cart[id] = product.quantityEnabled ? (cart[id] || 0) + qty : 1;
  saveCart();
  showToast("Solución agregada a tu precotización");
}

function changeQuantity(id, delta) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product || !product.quantityEnabled) return;
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
}

function renderCart() {
  const container = document.querySelector("[data-cart-items]");
  if (!container) return;

  const entries = Object.entries(cart).filter(([id]) => PRODUCTS.some(product => product.id === id));
  const subtotal = entries.reduce((sum, [id, qty]) => {
    return sum + PRODUCTS.find(product => product.id === id).price * qty;
  }, 0);

  container.innerHTML = entries.length
    ? entries.map(([id, qty]) => {
        const product = PRODUCTS.find(item => item.id === id);
        const quantityDisplay = product.quantityEnabled
          ? `<div class="qty-stepper"><button type="button" aria-label="Disminuir cantidad" data-step="${id}" data-delta="-1">−</button><span>${qty}</span><button type="button" aria-label="Aumentar cantidad" data-step="${id}" data-delta="1">+</button></div>`
          : `<span class="single-quantity">Cantidad: 1</span>`;

        return `
          <article class="cart-item">
            <div class="cart-item-head">
              <h3>${product.name}</h3>
              <button class="remove-item" type="button" aria-label="Eliminar ${product.name}" data-remove="${id}">×</button>
            </div>
            <div class="cart-item-bottom">
              ${quantityDisplay}
              <span class="cart-item-price">${money(product.price * qty)}</span>
            </div>
          </article>
        `;
      }).join("")
    : `<div class="empty-state"><span>＋</span><h3>Aún no agregas soluciones</h3><p>Explora el catálogo y agrega lo que necesites.</p></div>`;

  document.querySelector("[data-subtotal]").textContent = money(subtotal);
  const checkout = document.querySelector("[data-checkout]");
  if (checkout) checkout.disabled = !entries.length;
}

function finishQuote() {
  const entries = Object.entries(cart).filter(([id]) => PRODUCTS.some(product => product.id === id));
  if (!entries.length) return;

  const folio = `GD-${String(Math.floor(Math.random() * 90000) + 10000)}`;
  const subtotal = entries.reduce((sum, [id, qty]) => {
    return sum + PRODUCTS.find(product => product.id === id).price * qty;
  }, 0);
  const lines = entries
    .map(([id, qty]) => `- ${qty} × ${PRODUCTS.find(product => product.id === id).name}`)
    .join("\n");
  const message = `Hola, realicé una precotización en G•DRYNEX.\n\nFolio: ${folio}\n\nSoluciones seleccionadas:\n${lines}\n\nSubtotal de referencia: ${money(subtotal)}\n\nEntiendo que este monto es únicamente una referencia inicial y que el precio final será confirmado después de la valoración técnica.\n\nMe gustaría continuar con la revisión de mi proyecto.`;

  window.open(
    `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener"
  );
}

function setupCatalog() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const hashCategory = location.hash.slice(1);
  let filter = ["videovigilancia", "acceso", "automatizacion", "electricidad"].includes(hashCategory)
    ? hashCategory
    : "all";
  let search = "";

  const applyFilters = () => {
    const matches = PRODUCTS.filter(product => {
      const matchesCategory = filter === "all" || product.category === filter;
      const searchableText = `${product.name} ${product.features.join(" ")}`.toLowerCase();
      return matchesCategory && searchableText.includes(search);
    });
    renderProducts(matches);
  };

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.classList.toggle("active", button.dataset.filter === filter);
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      filter = button.dataset.filter;
      applyFilters();
    });
  });

  applyFilters();
  renderCart();

  document.querySelector("[data-search]")?.addEventListener("input", event => {
    search = event.target.value.trim().toLowerCase();
    applyFilters();
  });

  document.addEventListener("click", event => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      const product = PRODUCTS.find(item => item.id === addButton.dataset.add);
      const input = document.querySelector(`[data-qty="${addButton.dataset.add}"]`);
      const quantity = product.quantityEnabled
        ? Math.max(1, parseInt(input.value, 10) || 1)
        : 1;
      addToCart(addButton.dataset.add, quantity);
    }

    const stepButton = event.target.closest("[data-step]");
    if (stepButton) {
      changeQuantity(stepButton.dataset.step, Number(stepButton.dataset.delta));
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      delete cart[removeButton.dataset.remove];
      saveCart();
    }

    if (event.target.closest("[data-clear-cart]")) {
      cart = {};
      saveCart();
    }

    if (event.target.closest("[data-checkout]")) finishQuote();
  });
}

function setupGlobal() {
  updateCount();
  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  const nationalPhone = BUSINESS.whatsapp.slice(-10);
  const visiblePhone = nationalPhone.replace(/^(\d{2})(\d{4})(\d{4})$/, "$1 $2 $3");

  document.querySelectorAll("[data-whatsapp-link]").forEach(element => {
    element.href = `https://wa.me/${BUSINESS.whatsapp}`;
  });
  document.querySelectorAll("[data-whatsapp-visible]").forEach(element => {
    element.textContent = visiblePhone;
  });
  document.querySelectorAll("[data-email-link]").forEach(element => {
    element.href = `mailto:${BUSINESS.email}`;
  });
  document.querySelectorAll("[data-email-visible]").forEach(element => {
    element.textContent = BUSINESS.email;
  });
  document.querySelectorAll("[data-facebook-link]").forEach(element => {
    if (BUSINESS.facebook) {
      element.href = BUSINESS.facebook;
      element.hidden = false;
    }
  });
  document.querySelectorAll("[data-instagram-link]").forEach(element => {
    if (BUSINESS.instagram) {
      element.href = BUSINESS.instagram;
      element.hidden = false;
    }
  });

  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    document.body.classList.toggle("menu-open", open);
  });

  nav?.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
}

setupGlobal();
setupCatalog();
