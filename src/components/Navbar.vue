<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '../assets/img/logo.png'

const isActiveLink = (routePath) => {
  const currentRoute = useRoute();
  return currentRoute.path === routePath;
};
</script>

<template>
    <nav class="bg-blue-700 border-b border-blue-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >The Otter Bookstore</span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[
                    'text-white', 'rounded-md', 'px-3', 'py-2',
                    isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white',
                  ]"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/books"
                  :class="[
                    'text-white', 'rounded-md', 'px-3', 'py-2',
                    isActiveLink('/books') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white',
                  ]"
                  >Books</RouterLink
                >
                <RouterLink
                  to="/books/add"
                  :class="[
                    'text-white', 'rounded-md', 'px-3', 'py-2',
                    isActiveLink('/books/add') ? 'bg-blue-900' : 'hover:bg-gray-900 hover:text-white',
                  ]"
                  >Add Books for Sale</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>