<script setup lang="ts">
import { FolderKanban } from "lucide-vue-next";
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
    <!-- Page heading -->
    <div
      class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
    >
      <div>
        <p class="mb-2 text-sm text-muted">YOUR WORKSPACE</p>
        <h1 class="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p class="mt-2 text-sm text-muted">
          A clear view of your projects and work.
        </p>
      </div>

      <RouterLink
        to="/projects"
        class="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-80"
      >
        + New project
      </RouterLink>
    </div>

    <!-- Summary cards -->
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-border bg-surface p-5">
        <p class="text-sm text-muted">Active projects</p>
        <p class="mt-4 text-3xl font-semibold">—</p>
        <p class="mt-2 text-xs text-muted">Your ongoing work</p>
      </article>

      <article class="rounded-2xl border border-border bg-surface p-5">
        <p class="text-sm text-muted">Tasks assigned to me</p>
        <p class="mt-4 text-3xl font-semibold">—</p>
        <p class="mt-2 text-xs text-muted">Work requiring your attention</p>
      </article>

      <article class="rounded-2xl border border-border bg-surface p-5">
        <p class="text-sm text-muted">Tasks completed</p>
        <p class="mt-4 text-3xl font-semibold">—</p>
        <p class="mt-2 text-xs text-muted">Your completed work</p>
      </article>
    </section>

    <!-- Empty project state -->
    <section
      class="mt-8 rounded-2xl border border-border bg-surface px-6 py-16 text-center"
    >
      <div
        class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-border text-muted"
      >
        <FolderKanban :size="24" :stroke-width="1.5" />
      </div>

      <h2 class="mt-4 text-lg font-semibold">Your projects will appear here</h2>

      <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
        Create a project to organise tasks, collaborate with your team, and keep
        track of progress in one place.
      </p>

      <RouterLink
        to="/projects"
        class="mt-6 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-80"
      >
        Create your first project
      </RouterLink>
    </section>
  </div>
</template>
