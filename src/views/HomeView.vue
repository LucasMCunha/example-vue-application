<script setup>
import Hero from '../components/Hero.vue'
import HomeCards from '../components/HomeCards.vue'
import BookListing from '../components/BookListings.vue';

</script>

<template>
<Hero title=" The Otter Bookstore" subtitle="Find the greatest classics of literature here!" />
<HomeCards />
<BookListing :limit="3" :show-button="true"/>
</template>