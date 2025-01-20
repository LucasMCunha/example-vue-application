<script setup>
import { onMounted, ref } from 'vue';

    const status = ref('Thinking...')
    const spells = ref(['Witch Bolt', 'Shield', 'Create Water', 
    'Scorching Ray', 'Shatter', 'Gust of Wind',
    'Haste', 'Lightning Bolt', 'Call Lightining'])
    const newSpell = ref('')
    const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ/'

    const castSpell = () => {
      if(status.value === 'Thinking...'){
        status.value = 'You cast a spell!'
      } else if(status.value === 'You cast a spell!'){
        status.value = 'Thinking...'
      }
    }

    const addSpell = (e) => {
      e.preventDefault()
      spells.value.push(newSpell.value)
      newSpell.value = ''
    }

    const deleteSpell = (index) => {
      spells.value.splice(index, 1)
    }

    onMounted(async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        spells.value = data.map((task) => task.title)
      } catch (error) {
        console.error(error)
      }
    })
</script>

<!-- <p v-if="status === 'burning' "> Burning </p>
<p v-else-if="status === 'dead'"> u died </p>
<p v-else> Succesfull Saving Throw </p> -->

<template>
  <h1>Choose your next spell</h1>

  <form @submit="addSpell">
    <label for="newSpell">Add Spell</label>
    <input type="text" id="newSpell" name="newSpell" v-model="newSpell">
    <button type="submit">Add</button>
  </form>

  <ul>
    <li v-for="spell in spells" :key="spell">
      <span>
        {{ spell }}
      </span>
      <button @click="deleteSpell(index)"> X </button>
    </li>
  </ul>

  <a :href="link">Your Spellbook</a>

  <button @click="castSpell">
    Cast Your Spell!
  </button>
  <p>{{ status }}</p>

</template>

<style>
</style>