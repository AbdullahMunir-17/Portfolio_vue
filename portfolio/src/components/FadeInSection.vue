<template>
  <div
    ref="section"
    :class="[
      'opacity-0 translate-y-6 transition-all duration-700 ease-out will-change-transform',
      isVisible && 'opacity-100 translate-y-0'
    ]"
  >
    <slot />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const section = ref(null);
    const isVisible = ref(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    onMounted(() => {
      if (section.value) observer.observe(section.value);
    });

    return { section, isVisible };
  },
};
</script>
