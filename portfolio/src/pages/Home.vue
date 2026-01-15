<template>
  <section
    class="max-w-5xl mx-auto min-h-screen flex items-center px-6"
  >
    <FadeInSection>
      <p class="text-teal-400 font-mono text-sm mb-5">
        Hi, my name is
      </p>

      <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-100 mb-4">
        Abdullah Munir.
      </h1>

      <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-400 mb-8">
        I build things for the web.
      </h2>

      <p class="max-w-xl text-gray-400 text-lg leading-relaxed mb-12">
        I’m a frontend developer specializing in building clean, performant
        web applications with modern technologies like Vue, React, and Laravel.
      </p>

      <div class="flex gap-6">
        <router-link
          to="/projects"
          class="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition"
        >
          View Projects
        </router-link>

        <router-link
          to="/resume"
          class="inline-flex items-center px-6 py-3 text-gray-400 hover:text-teal-400 transition"
        >
          View Resume →
        </router-link>
      </div>
    </FadeInSection>
  </section>
</template>

<script>
import FadeInSection from '../components/FadeInSection.vue';

export default {
  components: { FadeInSection },
};
</script>
