<template>
  <div class="onboarding">
    <div class="header">
      <img src="../content/placeholder.gif" alt="Onboarding Image" />
      <h1>Welcome to Guru Beta Planner!</h1>
    </div>
    <div class="slider-container">
      <div class="slider" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="slide">
          <h2>Slide 1</h2>
          <p>This is the first slide of the onboarding.</p>
        </div>
        <div class="slide">
          <h2>Slide 2</h2>
          <p>This is the second slide.</p>
        </div>
        <div class="slide">
          <h2>Slide 3</h2>
          <p>This is the last slide.</p>
        </div>
      </div>
      <div class="slider-nav">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <NuxtLink to="/about">
      <button>Continue</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);
const numSlides = 3;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % numSlides;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + numSlides) % numSlides;
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
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.slider-nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}

.slider-nav button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
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
