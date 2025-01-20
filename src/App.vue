<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <Navbar />
    <keep-alive>
  <RouterView />
    </keep-alive>
</template>