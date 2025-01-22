<script setup>
import router from '@/router';
import { reactive } from 'vue';
import { useToast } from 'vue-toastification';
import { useBookStore } from '@/stores/bookStore';

const store = useBookStore();

const form = reactive({
  genre: 'Full-Time',
  title: '',
  description: '',
  author: '',
  price: '$ ',
  pages: 0,
  stock: 0,
  lenguage: '',
});

const toast = useToast();

const handleSubmit = async () => {
  const newBook = {
    genre: form.genre,
    title: form.title,
    description: form.description,
    author: form.author,
    price: form.price,
    pages: form.pages,
    stock: form.stock,
    lenguage: form.lenguage,
  }

    try{
    store.addBook(newBook);
    toast.success('Book added successfully');
    router.push(`/books/${response.data.id}`);
    } catch (error) {
    console.error(error);
    toast.error('An error occurred' + error.message);
    } 
};

</script>

<template>
     <section class="bg-green-50">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <form @submit.prevent="handleSubmit">
            <h2 class="text-3xl text-center font-semibold mb-6">Add a Book for Sale</h2>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2"
                >Book Title</label
              >
              <input
                type="text"
                v-model="form.title"
                id="title"
                name="name"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Add the title of the book"
                required
              />
            </div>

            <div class="mb-4">
              <label for="genre" class="block text-gray-700 font-bold mb-2"
                >Book Genre</label
              >
              <select
                v-model="form.genre"
                id="genre"
                name="genre"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="Fantasy">Fantasy</option>
                <option value="Classic Fiction">Science Fiction</option>
                <option value="Fiction">Fiction</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Romance">Romance</option>
              </select>
            </div>

            <div class="mb-4">
              <label
                for="description"
                class="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                v-model="form.description"
                name="description"
                class="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add the basic description of the book here"
              ></textarea>
            </div>

            <div class="mb-4">
              <label
                for="pages"
                class="block text-gray-700 font-bold mb-2"
                >Pages</label
              >
              <input
                type="number"
                v-model="form.pages"
                id="pages"
                name="pages"
                class="border rounded w-full py-2 px-3"
                placeholder="Number of pages"
                required
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2">
                Author
              </label>
              <input
                type="text"
                v-model="form.author"
                id="author"
                name="author"
                class="border rounded w-full py-2 px-3 mb-2"
                placeholder="Author's name"
                required
              />
            </div>

            <h3 class="text-2xl mb-5">Product Info</h3>

            <div class="mb-4">
              <label for="price" class="block text-gray-700 font-bold mb-2"
                >Price</label
              >
              <input
                type="text"
                v-model="form.price"
                id="price"
                name="price"
                class="border rounded w-full py-2 px-3"
                placeholder="Price of the book"
              />
            </div>

            <div class="mb-4">
              <label for="type" class="block text-gray-700 font-bold mb-2"
                >Lenguage</label
              >
              <select
                id="lenguage"
                v-model="form.lenguage"
                name="lenguage"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="English">English</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            </div>

            <div class="mb-4">
              <label
                for="stock"
                class="block text-gray-700 font-bold mb-2"
                >Stock</label
              >
              <input
                type="number"
                v-model="form.stock"
                id="stock"
                name="stock"
                class="border rounded w-full py-2 px-3"
                placeholder="How many books are in stock?"
                required
              />
            </div>

            <div>
              <button
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

</template>