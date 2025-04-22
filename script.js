import { createApp, ref, onMounted } from 'vue';

const Gallery = {
  name: 'Gallery',
  setup() {
    const cards = ref([]);

    onMounted(async () => {
      const res = await fetch('data.json');
      cards.value = await res.json();
    });

    return { cards };
  },
  template: `
    <div class="gallery-container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <img :src="card.image" :alt="card.title" />
        <div class="card-content">
          <div class="card-title">{{ card.title }}</div>
          <div class="card-description">{{ card.description }}</div>
        </div>
      </div>
    </div>
  `
};

const app = createApp({});
app.component('gallery', Gallery);
app.mount('#app');
    
   