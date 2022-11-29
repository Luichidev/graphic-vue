<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Gráficos</h1>
  </header>
  <nav>
    <router-link to='/'>Inicio</router-link> | 
    <router-link to='/apexchart'>ApexChart</router-link> | 
    <router-link to='/highchart'>HighChart</router-link>
  </nav>
  <RouterView />

</template>

<style scoped>
.home-graphic {
  min-width: 1200px;
}
</style>
