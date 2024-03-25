<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Column, tasks } from "../types/index";
import draggaable from "vuedraggable";
// treollo static data
const columns = ref<Column[]>([
  {
    id: nanoid(),
    title: " today tasks ",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it",
        createdAt: new Date().toISOString(),
      },
    ],
  },
]);
// temp var because the dom do not update when i just value of title although reseting it here after every insert
const alt = useKeyModifier("Alt");
</script>
<template>
  <div>
    <draggaable
      v-model="columns"
      group="columns"
      item-key="id"
      :animation="150"
      handle=".drag-handle"
      class="flex items-start overflow-x-auto"
    >
      <template #item="{ element: col }">
        <div class="row bg-gray-200 min-w-[250px] p-5 rounded">
          <header class="font-bold mb-4"><DragHandle /> {{ col.title }}</header>
          <draggaable
            v-model="col.tasks"
            :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
            item-key="id"
            :animation="150"
          >
            <template #item="{ element: tasks }">
              <Task :task="tasks" />
            </template>
          </draggaable>

          <footer class="text-gray-500">
            <AddTask @add="col.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggaable>
  </div>
</template>



<style scoped>
.row {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.lol {
  height: auto;
}
</style>
