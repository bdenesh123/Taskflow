<script setup lang="ts">
defineProps<{
  projectId: string;
}>();
</script>

<template>
  <main class="p-8">
    <h1 class="text-2xl font-semibold">Project details</h1>
    <p class="mt-2 text-muted">Project ID: {{ projectId }}</p>
  </main>
</template>
