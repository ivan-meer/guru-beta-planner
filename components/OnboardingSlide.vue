<template>
  <div class="slide">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <NuxtLink :to="link" class="learn-more">Learn More</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  link: { type: String, default: '#' },
});
</script>

<style scoped>
.slide {
  width: 100%;
  padding: 20px;
  text-align: center;
}

.learn-more {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
