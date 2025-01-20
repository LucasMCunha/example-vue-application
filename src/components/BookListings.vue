<script setup>
import BookListing from './BookListing.vue';
import { ref, defineProps,onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const state = reactive({
    books: [],
    isLoading: true
});

onMounted(async () => {
   try{
    const response = await axios.get('/api/books');
    state.books = response.data;
} catch (error) {
    console.error(error);
} finally {
    state.isLoading = false;
}
});
</script>

<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-2xl font-bold text-blue-900 mb-6 text-center">
                Book Listings
            </h2>
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader color="#3B82F6" size="10px" />
            </div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <BookListing 
                    v-for="book in state.books.slice(0, limit || state.books.length)" 
                    :key="book.id" 
                    class="p-4 bg-white shadow rounded-lg" 
                    :book="book"/>
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/books"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All books</RouterLink
      >
    </section>
</template>
