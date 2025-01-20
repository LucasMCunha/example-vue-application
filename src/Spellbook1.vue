<script>
export default {
  data(){
    return {
      dmg: '8d6 dmg',
      status: 'Thinking...',
      spells: ['Witch Bolt', 'Shield', 'Create Water', 
      'Scorching Ray', 'Shatter', 'Gust of Wind',
      'Haste', 'Lightning Bolt', 'Call Lightining'],
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ/'
  }
  },
  methods: {
    castSpell(){
      if(this.status === 'Thinking...'){
        this.status = 'You cast a spell!'
      } else if(this.status === 'You cast a spell!'){
        this.status = 'Thinking...'
      }
    }
  }
}
</script>

<!-- <p v-if="status === 'burning' "> Burning </p>
<p v-else-if="status === 'dead'"> u died </p>
<p v-else> Succesfull Saving Throw </p> -->

<template>
  <h1>Choose your next spell</h1>
  <ul>
    <li v-for="spell in spells" :key="spell">{{ spell }}</li>
  </ul>

  <a :href="link">Your Spellbook</a>

  <button @click="castSpell">
    Cast Your Spell!
  </button>
  <p>{{ status }}</p>

</template>

<style>
</style>