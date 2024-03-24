<script setup lang="ts">
import type { tasks } from '~/types';
defineProps<{
  task: tasks,
  // Add more props as needed
}>();
</script>
<template>
<div :title="task.createdAt" class="task bg-white max-w-[250px] p-2 mb-2 shadow-sm">
  <span> <DragHandle />  {{ task.title }} </span>
 
</div>



</template>