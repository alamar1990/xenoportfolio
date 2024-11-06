<template>
  <div>
    <section class="bg-tertiary py-6">
      <div class="container mx-auto">
        <div class="grid grid-cols-8 md:grid-flow-row">
          <div
            v-for="skill in skills"
            :key="skill.title"
            class="flex items-center justify-center gap-x-4"
          >
            <NuxtImg :src="skill.img" :alt="skill.title" width="64" />
          </div>
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
