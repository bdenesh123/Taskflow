<script setup lang="ts">
import { useTheme } from "../composables/useTheme";

const { preference, setPreference } = useTheme();

const navigation = [
  { label: "Dashboard", icon: "▦", to: "/" },
  { label: "Projects", icon: "▤", to: "/projects" },
  { label: "My tasks", icon: "✓", to: "/projects" },
  { label: "Team members", icon: "♧", to: "/projects" },
];
</script>

<template>
  <div class="flex min-h-screen bg-background text-foreground">
    <!-- Sidebar -->
    <aside
      class="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar p-4 md:flex"
    >
      <RouterLink to="/" class="mb-8 flex items-center gap-3 px-2">
        <div
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-lg font-semibold text-primary-foreground"
        >
          T
        </div>
        <span class="text-lg font-semibold tracking-tight">TaskFlow</span>
      </RouterLink>

      <RouterLink
        to="/projects"
        class="mb-6 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm font-medium transition hover:bg-background"
      >
        <span class="text-lg">+</span>
        Create project
      </RouterLink>

      <p
        class="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted"
      >
        Workspace
      </p>

      <nav class="flex flex-col gap-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.label"
          :to="item.to"
          class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition"
          active-class="bg-background font-medium shadow-sm"
        >
          <span class="w-5 text-center text-base">{{ item.icon }}</span>
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- Theme selector and account area -->
      <div class="mt-auto border-t border-border pt-4">
        <label for="theme" class="mb-2 block px-2 text-xs text-muted">
          Appearance
        </label>

        <select
          id="theme"
          :value="preference"
          class="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-muted"
          @change="
            setPreference(
              ($event.target as HTMLSelectElement).value as
                | 'system'
                | 'light'
                | 'dark',
            )
          "
        >
          <option value="system">System theme</option>
          <option value="light">Light mode</option>
          <option value="dark">Dark mode</option>
        </select>

        <div class="mt-4 flex items-center gap-3 rounded-lg px-2 py-2">
          <div
            class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground"
          >
            U
          </div>
          <div class="min-w-0">
            <p class="truncate text-sm font-medium">Your workspace</p>
            <p class="text-xs text-muted">TaskFlow account</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main content -->
    <main class="min-w-0 flex-1">
      <header
        class="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6 lg:px-8"
      >
        <p class="text-sm text-muted">Workspace / TaskFlow</p>

        <button
          class="rounded-lg border border-border px-3 py-1.5 text-sm transition hover:bg-sidebar"
        >
          Help
        </button>
      </header>

      <!-- Vue Router renders the selected child page here -->
      <RouterView />
    </main>
  </div>
</template>
