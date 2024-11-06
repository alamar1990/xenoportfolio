<template>
  <div>
    <section class="bg-tertiary py-6">
      <div class="container mx-auto">
        <h2 class="text-primary text-3xl mb-8 text-center">My Skills</h2>
        <div class="flex flex-wrap items-center justify-center gap-1">
          <NuxtImg
            v-for="skill in skills"
            :key="skill.title"
            :src="skill.img"
            :alt="skill.title"
            width="64"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import skills from "../data/skills";
export default {
  data() {
    return {
      skills,
    };
  },
};
</script>
