<script setup lang="ts">
import { useScrollTo } from "~/composables/useScrollTo";

const headerLinks = [
  { name: "About", link: "about" },
  { name: "Showcase", link: "showcase" },
  { name: "Contact", link: "contact" },
];
</script>

<template>
  <header class="bg-secondary text-white p-6">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-light uppercase">Alain Marquez</div>

      <nav class="hidden md:block">
        <ul class="flex gap-x-4">
          <li v-for="item in headerLinks" :key="item.name">
            <button
              class="transition hover:text-primary"
              @click="useScrollTo(item.link)"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="postcss"></style>
