<script setup>
import { defineProps, computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  book: Object,
});

const showFullDesc = ref(false);

const truncatedDescription = computed(() => {
  let description = props.book.description;
  if (description.length > 100 && !showFullDesc.value) {
    description = description.slice(0, 80) + '...';
  }
  return description
});


</script>

<template>
              <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <div class="text-gray-600 my-2">{{ book.type }}</div>
                <h3 class="text-xl font-bold">{{ book.title }}</h3>
              </div>

              <div class="mb-5">
                {{truncatedDescription}}
              </div>
              <button>
                <span
                  @click="showFullDesc = !showFullDesc"
                  class="text-blue-500 cursor-pointer"
                  >{{ showFullDesc ? 'Show Less' : 'Show More' }}</span
                >
              </button>

              <h3 class="text-green-500 mb-2">{{ book.price }}</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <div class="text-orange-700 mb-3">
                  <i class="pi pi-user-edit text-orange-700"></i>
                  {{ book.author }}
                </div>
                <RouterLink
                  :to="'/books/' + book.id"
                  class="h-[36px] bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Read More
                </RouterLink>
              </div>
            </div>
          </div>
</template>