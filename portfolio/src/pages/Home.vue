<template>
  <main class="lg:ml-64 min-h-screen">
    <!-- HERO -->
    <section id="hero" class="min-h-screen flex items-center px-6 lg:px-20 py-20">
      <div class="max-w-2xl">
        <FadeInSection>
          <p class="text-cyan-400 font-mono text-sm mb-6 tracking-widest">Hi, my name is</p>
        </FadeInSection>

        <FadeInSection :delay="100">
          <h1 class="text-6xl lg:text-7xl font-bold text-gray-50 mb-6 leading-tight">
            Abdullah<br />Munir.
          </h1>
        </FadeInSection>

        <FadeInSection :delay="200">
          <h2 class="text-3xl lg:text-4xl text-gray-400 font-medium mb-8">
            I build clean, performant web experiences.
          </h2>
        </FadeInSection>

        <FadeInSection :delay="300">
          <p class="max-w-lg text-gray-400 text-lg leading-relaxed mb-12">
            I'm a full stack developer focused on crafting accessible, performant digital experiences. 
            I care deeply about writing clean, maintainable code and understanding the fundamentals.
          </p>
        </FadeInSection>

        <FadeInSection :delay="400">
          <div class="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a href="#projects" class="inline-block text-cyan-400 hover:text-cyan-300 transition-colors border-b border-cyan-400 pb-1">
              View my work →
            </a>
            <a href="/resume.pdf" target="_blank" class="inline-block px-4 py-2 border border-cyan-400 text-cyan-400 rounded text-sm hover:bg-cyan-400 hover:text-gray-900 transition-all">
              Download Resume
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="min-h-screen flex items-center px-6 lg:px-20 py-20">
      <div class="max-w-2xl">
        <FadeInSection>
          <h2 class="text-4xl font-bold text-gray-50 mb-10">About</h2>
          
          <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I'm a Full Stack Developer with expertise in building scalable web applications from end-to-end. 
              Starting with curiosity in 2019, I've grown into a developer who understands both frontend elegance and backend robustness.
            </p>

            <p>
              My passion lies in creating performant, accessible digital experiences that solve real problems. 
              I've worked on multiple full-stack projects, including a cricket platform with real-time features and AI-based content moderation. 
              I believe in writing clean, maintainable code and continuously learning new technologies and best practices.
            </p>

            <p>
              Currently at Revenue Society, building scalable web solutions. Beyond coding, I'm passionate about problem-solving, 
              mentoring others, and contributing to meaningful projects that make an impact.
            </p>
          </div>

          <h3 class="text-lg font-semibold text-gray-100 mt-12 mb-6">Technologies I've worked with:</h3>
          <div class="space-y-4">
            <div>
              <p class="text-gray-300 text-sm font-medium mb-2">Frontend</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span v-for="tech in ['JavaScript', 'React.js', 'HTML & CSS', 'Bootstrap']" :key="tech" class="text-gray-400 text-xs flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {{ tech }}
                </span>
              </div>
            </div>
            <div>
              <p class="text-gray-300 text-sm font-medium mb-2">Backend</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span v-for="tech in ['Laravel', 'SQL', 'Firebase', 'RESTful APIs']" :key="tech" class="text-gray-400 text-xs flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {{ tech }}
                </span>
              </div>
            </div>
            <div>
              <p class="text-gray-300 text-sm font-medium mb-2">Tools & Languages</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                <span v-for="tech in ['Git/GitHub', 'Docker', 'Python', 'C++']" :key="tech" class="text-gray-400 text-xs flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="min-h-screen flex items-center px-6 lg:px-20 py-20">
      <div class="max-w-3xl w-full">
        <FadeInSection>
          <h2 class="text-4xl font-bold text-gray-50 mb-16">Projects</h2>
        </FadeInSection>

        <div class="space-y-24">
          <FadeInSection v-for="(project, idx) in projects" :key="project.id" :delay="(idx + 1) * 100">
            <div class="group">
              <h3 class="text-2xl font-bold text-gray-50 mb-4 group-hover:text-cyan-400 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-gray-400 text-lg mb-6 leading-relaxed max-w-lg">
                {{ project.description }}
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.tech" :key="tech" class="text-sm text-gray-400 font-mono">
                  {{ tech }}
                </span>
              </div>

              <div class="flex gap-6">
                <a v-if="project.link" :href="project.link" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Live →
                </a>
                <a v-if="project.github" :href="project.github" target="_blank" class="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  GitHub →
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="min-h-screen flex items-center px-6 lg:px-20 py-20">
      <div class="max-w-3xl w-full">
        <FadeInSection>
          <h2 class="text-4xl font-bold text-gray-50 mb-16">Experience</h2>
        </FadeInSection>

        <div class="space-y-16">
          <FadeInSection v-for="(job, idx) in experience" :key="job.id" :delay="(idx + 1) * 100">
            <div class="group">
              <h3 class="text-xl font-bold text-gray-50 mb-1">{{ job.role }}</h3>
              <p class="text-cyan-400 font-medium mb-2">{{ job.company }}</p>
              <p class="text-gray-400 text-sm mb-6">{{ job.duration }}</p>

              <ul class="space-y-3 text-gray-400 text-sm">
                <li v-for="(point, i) in job.highlights" :key="i" class="flex gap-3">
                  <span class="text-cyan-400 mt-0.5">▸</span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="min-h-screen flex items-center px-6 lg:px-20 py-20">
      <div class="max-w-2xl">
        <FadeInSection>
          <h2 class="text-4xl font-bold text-gray-50 mb-8">Get in touch</h2>

          <p class="text-gray-400 text-lg mb-4">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to connect!
          </p>
          <p class="text-gray-500 text-sm mb-12">I typically respond within 24 hours.</p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="mailto:abulahmunir@gmail.com"
              class="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Say hello
            </a>
            <button 
              @click="copyEmail"
              class="inline-block px-8 py-3 border-2 border-gray-600 text-gray-400 rounded hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
            >
              {{ emailCopied ? '✓ Copied!' : 'Copy Email' }}
            </button>
          </div>

          <div class="flex flex-wrap gap-6">
            <a 
              href="https://www.linkedin.com/in/muhammad-abdullah-munir-7495a2262/"
              target="_blank"
              class="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              LinkedIn →
            </a>
            <a 
              href="https://wa.me/923124468870"
              target="_blank"
              class="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              WhatsApp →
            </a>
          </div>
        </FadeInSection>

        <FadeInSection :delay="200">
          <div class="mt-24 pt-12 border-t border-gray-700">
            <p class="text-gray-400 text-sm">
              Designed & built by Abdullah Munir
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import FadeInSection from '../components/FadeInSection.vue'

const emailCopied = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText('abulahmunir@gmail.com')
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, 2000)
}

const projects = [
  {
    id: 1,
    title: 'CricSultaan - Cricket Web Platform',
    description: 'A full-stack cricket web platform featuring live scores, AI-based content moderation, real-time chat, user profiles, event management, and an e-commerce cricket store. Built with React.js frontend and Laravel backend.',
    tech: ['React.js', 'Laravel', 'RESTful APIs', 'Real-time Chat'],
    link: '#',
    github: '#',
  },
]

const experience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Programmers Force, Lahore',
    duration: 'September 2025 — Present',
    highlights: [
      'Contributing to the design, development, and maintenance of scalable web applications',
      'Writing clean, efficient code following industry best practices and coding standards',
      'Collaborating with cross-functional teams to analyze requirements and deliver robust solutions',
      'Performing debugging, testing, and performance optimization to enhance application reliability',
      'Supporting deployment processes and integrating third-party services and APIs',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'CricSultaan, Remote',
    duration: 'January 2024 — August 2025',
    highlights: [
      'Developed a full-stack cricket web platform using React.js frontend and Laravel backend',
      'Implemented live score updates, AI-based content moderation, and real-time chat features',
      'Designed personalized user profiles, event management, and e-commerce cricket store',
      'Built secure user authentication, dynamic match category APIs, and responsive UI with reusable components',
      'Integrated real-time features for logged-in users with optimized database queries',
    ],
  },
  {
    id: 3,
    role: 'Software Developer',
    company: 'Art&Graphics, Lahore',
    duration: 'November 2021 — August 2025',
    highlights: [
      'Contributed to design, development, and maintenance of scalable web applications for diverse clients',
      'Wrote clean, efficient, and well-documented code aligned with industry best practices',
      'Debugged and optimized applications to enhance reliability and performance',
      'Supported deployment processes and assisted with third-party API integrations',
      'Collaborated with teams to deliver robust software solutions meeting client requirements',
    ],
  },
]
</script>
