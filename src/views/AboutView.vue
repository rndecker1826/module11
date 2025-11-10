<template>
    <div>
        <h1>About</h1>
        <p>This is a Single Page App created via Vue.js using routers to create navigation.</p>
        <GoBack />
    </div>
</template>

<script setup>
    import GoBack from '../components/GoBack.vue'
</script>

<script>
export default {
  name: 'AboutView'
}
</script>