import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BooksView from '@/views/BooksView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import BookView from '@/views/BookView.vue';
import AddBookView from '@/views/AddBookView.vue';
import EditBookView from '@/views/EditBookView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView,
  },
  {
    path: '/books/:id',
    name: 'book',
    component: BookView,
  },
  {
    path: '/books/add',
    name: 'add-book',
    component: AddBookView,
  },
  {
    path: '/books/edit/:id',
    name: 'edit-book',
    component: EditBookView,
  },
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: NotFoundView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
