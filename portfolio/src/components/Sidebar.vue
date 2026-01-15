<template>
  <aside class="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-gray-900 border-r border-gray-800 flex-col justify-between p-8 z-40">
    <!-- Top: Logo/Name -->
    <div>
      <router-link to="/" class="text-xl font-bold text-gray-100 hover:text-cyan-400 transition-colors">
        AM
      </router-link>
    </div>

    <!-- Middle: Navigation -->
    <nav class="flex flex-col space-y-8">
      <a 
        v-for="link in navLinks"
        :key="link.id"
        :href="`#${link.id}`"
        @click.prevent="navigateTo(link.id)"
        :class="[
          'text-sm font-medium transition-all duration-300 relative',
          activeSection === link.id 
            ? 'text-cyan-400' 
            : 'text-gray-400 hover:text-gray-200'
        ]"
      >
        {{ link.label }}
        <span v-if="activeSection === link.id" class="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-cyan-400 rounded"></span>
      </a>
    </nav>

    <!-- Bottom: Social Links -->
    <div class="space-y-3 text-sm">
      <a href="https://github.com" target="_blank" class="block text-gray-400 hover:text-cyan-400 transition-colors">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/muhammad-abdullah-munir-7495a2262/" target="_blank" class="block text-gray-400 hover:text-cyan-400 transition-colors">
        LinkedIn
      </a>
      <a href="mailto:abulahmunir@gmail.com" class="block text-gray-400 hover:text-cyan-400 transition-colors">
        Email
      </a>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('hero')
const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

const navigateTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleScroll = () => {
  const sections = navLinks.map(link => ({
    id: link.id,
    el: document.getElementById(link.id),
  }))

  const scrollY = window.scrollY + 150

  for (let i = sections.length - 1; i >= 0; i--) {
    if (sections[i].el && sections[i].el.offsetTop <= scrollY) {
      activeSection.value = sections[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
