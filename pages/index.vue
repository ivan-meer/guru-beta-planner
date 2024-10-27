<template>
  <div class="onboarding">
    <div class="header">
      <img src="../content/placeholder.gif" alt="Onboarding Image" />
      <h1>Welcome to Guru Beta Planner!</h1>
    </div>
    <div class="slider-container">
      <div class="slider">
        <OnboardingSlide
          v-for="(slide, index) in slides"
          :key="index"
          :title="slide.title"
          :content="slide.content"
          :link="slide.link"
        />
      </div>
      <div class="slider-nav">
        <span
          v-for="i in slides.length"
          :key="i"
          :class="{ active: currentSlide === i - 1 }"
          @click="currentSlide = i - 1"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OnboardingSlide from '@/components/OnboardingSlide.vue';

const slides = ref([
  { title: 'Slide 1', content: 'This is the first slide of the onboarding.', link: '/about' },
  { title: 'Slide 2', content: 'This is the second slide.', link: '/about' },
  { title: 'Slide 3', content: 'This is the last slide.', link: '/about' },
]);

const currentSlide = ref(0);
let autoAdvanceInterval;

onMounted(() => {
  autoAdvanceInterval = setInterval(nextSlide, 4000);
});

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>

<style scoped>
.onboarding {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: #1e1e1e;
  color: #eee;
}

.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.header img {
  max-width: 30%;
  height: auto;
  margin-right: 20px;
}

.header h1 {
  flex-grow: 1;
  text-align: center;
}

.slider-container {
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
  position: relative; /* Added for absolute positioning of nav */
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-nav {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.slider-nav span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.slider-nav span.active {
  background-color: #4CAF50;
}

.slide {
  width: 100%;
  padding: 20px;
  text-align: center;
}

@media (max-width: 600px) {
  .header img {
    max-width: 40%;
  }
  .header h1 {
    font-size: 1.2em;
  }
  .slider-container {
    width: 90%;
  }
}
</style>
