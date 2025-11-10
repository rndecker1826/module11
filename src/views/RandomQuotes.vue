<template>
  <div class="container">
    <h1>Random Quote Generator</h1>
    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}"</p>
    <button @click="getQuote">Get New Quote</button>
    <p class="author">{{ author }}</p>
    <GoBack />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import GoBack from '../components/GoBack.vue'

const quote = ref('')
const author = ref('')
const loading = ref(false)

async function getQuote() {
  loading.value = true
  try {
    const response = await axios.get(
      'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en',
      {
        headers: {
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'x-rapidapi-key': 'fc29b4959emsh10ba9104469b151p1f7581jsndaaa56524fbc'
        }
      }
    )
    quote.value = response.data.content
    author.value = response.data.originator.name
  } catch (error) {
    console.error('Error fetching quote:', error)
    quote.value = 'Oops! Something went wrong.'
    author.value = ''
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getQuote()
})
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
}
.author {
  font-style: italic;
  color: #555;
}
</style>