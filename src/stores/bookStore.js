import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', { 
//     state: () => ({ count: 0 }),
//     getters: {
//         doubleCount() {
//             return this.count * 2
//         }
//     },
//     actions: {
//         increment() {
//             this.count++
//         }
//     }
// })

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: [
          {
            "id": "1",
            "title": "Harry Potter and the Philosopher's Stone",
            "genre": "Fantasy",
            "description": "The first book in the Harry Potter series, this novel follows the young wizard Harry as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
            "author": "J.K. Rowling",
            "price": "$9.99",
            "pages": "320",
            "stock": 10,
            "lenguage": "English"
          },
          {
            "genre": "Fiction",
            "title": "The Great Gatsby",
            "description": "Set in the Roaring Twenties, this novel tells the story of the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
            "author": "F. Scott",
            "price": "$12.99",
            "pages": "180",
            "stock": 5,
            "lenguage": "English",
            "id": "2"
          },
          {
            "id": "3",
            "title": "To Kill a Mockingbird",
            "genre": "Classic Fiction",
            "description": "A powerful tale of racial injustice and moral growth in the American South, seen through the eyes of young Scout Finch.",
            "author": "Harper Lee",
            "price": "$8.99",
            "pages": "336",
            "stock": 7,
            "lenguage": "English"
          },
          {
            "id": "4",
            "title": "1984",
            "genre": "Dystopian",
            "description": "A chilling depiction of a totalitarian regime, this novel explores themes of surveillance, freedom, and rebellion.",
            "author": "George Orwell",
            "price": "$10.99",
            "pages": "328",
            "stock": 12,
            "lenguage": "English"
          },
          {
            "id": "5",
            "title": "Pride and Prejudice",
            "genre": "Romance",
            "description": "A classic tale of love, societal expectations, and personal growth, centered on Elizabeth Bennet and Mr. Darcy.",
            "author": "Jane Austen",
            "price": "$6.99",
            "pages": "279",
            "stock": 15,
            "lenguage": "English"
          }
        ]
      }),
      getters: {
       getBook: (state) => (id) => {
         return this.books[id]
       }
      },
        actions: {
          addBook(book) {
            book.id = String(this.books.length + 1); // Add a unique ID (can be improved)
            this.books.push(book); // Use `this` to access the store's state
          },
        deleteBook(id) {
            this.books = this.books.filter((book) => book.id !== id);
          },
          updateBook(id, updatedBook) {
            const index = this.books.findIndex((b) => b.id === id);
            if (index !== -1) {
              Object.assign(this.books[index], updatedBook); // Merge updates into the existing book object
            } else {
              throw new Error('Book not found');
            }
          },
          
      }
})