<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  text: { required: true, type: String, default: "" },
  subtitle: { required: true, type: String, default: "" },
});

const displayText = ref(props.text);
const glitchDuration = 200;

function glitchText() {
  const textArray = props.text.split("");
  const glitchIndices = [];

  // Randomly choose 2 indices to change
  while (glitchIndices.length < 2) {
    const index = Math.floor(Math.random() * textArray.length);
    if (!glitchIndices.includes(index)) glitchIndices.push(index);
  }

  // Replace chosen indices with random numbers
  glitchIndices.forEach((index) => {
    textArray[index] = Math.floor(Math.random() * 10).toString(); // random digit
  });

  displayText.value = textArray.join("");

  setTimeout(() => {
    displayText.value = props.text;
  }, glitchDuration);
}

onMounted(() => {
  setInterval(glitchText, 2000);
});
</script>

<template>
  <div class="terminal">
    <span>{{ displayText }}</span
    ><br />
    <p class="text-2xl mb-8 highlight">
      {{ props.subtitle }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.terminal {
  font-family: "Courier New", serif;
  font-size: 2em;
  color: #b4c4d1;
}

.highlight {
  color: #d8d0bd;
}
</style>
