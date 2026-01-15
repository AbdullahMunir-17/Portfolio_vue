<template>
  <div 
    class="min-h-screen text-gray-100 relative"
    style="background-color: #111827"
    @mousemove="handleMouseMove"
  >
    <!-- Glow Background -->
    <div
      class="fixed inset-0 pointer-events-none"
      :style="{
        background: `radial-gradient(circle 500px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.15) 0%, transparent 25%)`
      }"
    ></div>
    
    <div class="relative z-10">
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'

const mouseX = ref(0)
const mouseY = ref(0)

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}
</script>

<style scoped>
</style>
