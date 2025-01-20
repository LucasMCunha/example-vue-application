<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import {reactive, defineProps, onMounted} from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const bookId = route.params.id;

const state = reactive({
  book: {},
  loading: false,
});

const deleteProduct = async () => {
  try {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (!confirmDelete) {
      return;
    }
    await axios.delete(`/api/books/${bookId}`);
    toast.success('Book deleted successfully');
    router.push('/books');
  } catch (error) {
    console.error(error);
    toast.error('An error occurred');
  }
};

onMounted(async () => {
   try{
    const response = await axios.get(`/api/books/${bookId}`);
    state.book = response.data;
} catch (error) {
    console.error(error);
} finally {
    state.isLoading = false;
}
});

</script>

<template>
    <section>
      <div class="container m-auto py-6 px-6">
        <RouterLink
          to="/books"
          class="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </RouterLink>
      </div>
    </section>

    <section v-if="!state.isLoading" class="bg-blue-50">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{ state.book.genre }}</div>
              <h1 class="text-3xl font-bold mb-4">{{ state.book.title }}</h1>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-blue-800 text-lg font-bold mb-6">
                Book Description
              </h3>

              <p class="mb-4">
                {{ state.book.description }}
              </p>

              <h3 class="text-blue-800 text-lg font-bold mb-2">Price</h3>

              <p class="mb-4">{{ state.book.price }}</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Author:</h3>

              <h2 class="text-2xl">{{ state.book.author }}</h2>

              <p class="my-2">
                {{ state.book.pages }} pages
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">In Stock:</h3>

              <p class="my-2 bg-blue-100 p-2 font-bold">
                {{ state.book.stock }}
              </p>

              <h3 class="text-xl">Lenguage Available:</h3>

              <p class="my-2 bg-blue-100 p-2 font-bold">{{ state.book.lenguage }}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Product</h3>
              <RouterLink
                :to="`/books/edit/${state.book.id}`"
                class="bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Product</RouterLink
              >
              <button @click="deleteProduct"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Product
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <div v-else class="text-center text-gray-500 py-6">
                <PulseLoader color="#3B82F6" size="10px" />
            </div>
</template>