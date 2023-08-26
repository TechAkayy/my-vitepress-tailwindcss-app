<script setup lang="ts">
  import { useData } from 'vitepress'
  const { site, frontmatter } = useData()
</script>
<template>
  <div>
    <div
      class="flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
    >
      <div class="mt-24 shadow">
        <div>
          <Content />
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
