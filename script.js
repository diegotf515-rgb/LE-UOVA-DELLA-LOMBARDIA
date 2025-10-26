const breeds = [
  {
    id: 'mara',
    name: 'Mara',
    color: 'Chocolate oscuro',
    weight: '60–65 g',
    desc: 'Raza Mara — huevos color chocolate oscuro, postura natural en libertad.',
    emoji: '🥚',
    price: '€0.70'
  },
  {
    id: 'libornense',
    name: 'Libornense',
    color: 'Blanco',
    weight: '55–60 g',
    desc: 'Libornense — huevos blancos, criadas en libertad.',
    emoji: '🥚',
    price: '€0.70'
  },
  {
    id: 'arau',
    name: 'Araucana',
    color: 'Azul',
    weight: '50–60 g',
    desc: 'Araucana — huevos azules, aves pastando libremente.',
    emoji: '🥚',
    price: '€0.70'
  },
  {
    id: 'egger',
    name: 'Egger',
    color: 'Verde oliva',
    weight: '50–60 g',
    desc: 'Egger — cruce Mara × Araucana, huevos verde oliva.',
    emoji: '🥚',
    price: '€0.70'
  },
  {
    id: 'australop',
    name: 'Australop',
    color: 'Blu (no chiaro)',
    weight: '55–60 g',
    desc: 'Australop — huevos azulados (blu no chiaro), criadas en libertad.',
    emoji: '🥚',
    price: '€0.70'
  }
];

const others = [
  {
    id: 'quaglie',
    name: 'Quaglie (Codornices)',
    color: 'Crema con puntitos negros',
    weight: '10–12 g',
    desc: 'Quaglie — huevos pequeños, textura y sabor delicado.',
    emoji: '🪿',
    price: '€0.70'
  },
  {
    id: 'anatramuta',
    name: 'Anatramuta (Patos)',
    color: 'Blanco crema',
    weight: '70–90 g',
    desc: 'Anatramuta — huevos de pato, blanco crema, adecuados para repostería.',
    emoji: '🦆',
    price: '€0.70'
  },
  {
    id: 'oca',
    name: 'Oca',
    color: 'Blanco crema',
    weight: '150–200 g',
    desc: 'Huevos de oca — muy grandes, ideales para usos especiales.',
    emoji: '🦢',
    price: '€0.70'
  }
];

function renderBreeds(){
  const list = document.getElementById('breed-list');
  breeds.forEach(b=>{
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="product-img">${b.emoji}</div>
      <h3>${b.name}</h3>
      <p><strong>Color:</strong> ${b.color}</p>
      <p><strong>Peso huevo:</strong> ${b.weight}</p>
      <p>${b.desc}</p>
      <p class="price">${b.price} / unidad</p>
      <button onclick="addToOrder('${b.name}')">Añadir al pedido</button>
    `;
    list.appendChild(el);
  });
}

function renderOthers(){
  const list = document.getElementById('other-list');
  others.forEach(b=>{
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <div class="product-img">${b.emoji}</div>
      <h3>${b.name}</h3>
      <p><strong>Color:</strong> ${b.color}</p>
      <p><strong>Peso huevo:</strong> ${b.weight}</p>
      <p>${b.desc}</p>
      <p class="price">${b.price} / unidad</p>
      <button onclick="addToOrder('${b.name}')">Añadir al pedido</button>
    `;
    list.appendChild(el);
  });
}

function addToOrder(name){
  const textarea = document.querySelector('textarea[name="order"]');
  textarea.value = textarea.value ? textarea.value + '\n' + '6 x ' + name : '6 x ' + name;
  textarea.scrollIntoView({behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderBreeds();
  renderOthers();

  const waLink = document.getElementById('whatsapp-link');
  // Cambia este número por tu número real (ejemplo +39 3330000000)
  const phone = '+39 3330000000';
  waLink.href = `https://wa.me/${phone.replace(/\D/g,'')}`;
  waLink.textContent = 'Abrir WhatsApp';

  // formulario -> abre correo con resumen (mailto)
  document.getElementById('order-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name') || '';
    const phone = form.get('phone') || '';
    const order = form.get('order') || '';
    const subject = encodeURIComponent('Nuevo pedido Uova di Lombardia');
    const body = encodeURIComponent(`Nombre: ${name}%0ATel: ${phone}%0APedido:%0A${order}%0A%0APrecio por huevo: €0.70`);
    window.location.href = `mailto:ventas@uovadilombardia.it?subject=${subject}&body=${body}`;
  });
});
