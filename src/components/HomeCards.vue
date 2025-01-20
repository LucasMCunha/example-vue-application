<script setup>
import Card from './Card.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
<section class="py-4">
  <div class="container-xl lg:container m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
      <Card>
        <h2 class="text-2xl font-bold">For Readers</h2>
        <p class="mt-2 mb-4">
          Browse our books and see what catches your eye
        </p>
        <RouterLink
          to="/books"
          class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
          Browse Books
        </RouterLink>
      </Card>
      <Card bg="bg-blue-100">
        <h2 class="text-2xl font-bold">For Sellers</h2>
        <p class="mt-2 mb-4">
          List your books for sale and reach a wider audience
        </p>
        <RouterLink
          to="/books/add"
          class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
        >
          Add Books for Sale
        </RouterLink>
      </Card>
    </div>
  </div>
</section>
</template>