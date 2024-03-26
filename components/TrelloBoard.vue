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
      {
        id: nanoid(),
        title: "lets do agaaaain it",
        createdAt: new Date().toISOString(),
      },
    ],
  },
]);
const createColumn = () => {
  const column: Column = {
    id: nanoid(),
    title: "new task",
    tasks: [],
  };

  columns.value.push(column);
  nextTick(() => {
    (
      document.querySelector(
        ".column:last-of-type .title-input"
      ) as HTMLAnchorElement
    ).focus();
  });
};
// temp var because the dom do not update when i just value of title although reseting it here after every insert
const alt = useKeyModifier("Alt");
</script>
<template>
  <div class="flex items-start overflow-x-auto">
    <draggaable
      v-model="columns"
      group="columns"
      item-key="id"
      :animation="150"
      handle=".drag-handle"
      class="flex items-start overflow-x-auto"
    >
      <template #item="{ element: col }">
        <div class="column row bg-gray-200 min-w-[250px] p-5 rounded">
          <header class="font-bold mb-4 title-input">
            <DragHandle />
            <input
              type="text"
              class="bg-gray-200 focus:bg-white rounded px-1"
              @keyup.enter="($event.target as HTMLInputElement).blur()"
              @keydown.backspace="
                col.title === '' ? columns = columns.filter((c) => c.id !== col.id)
                  : null
              "
              v-model="col.title"
            />
          </header>
          <draggaable
            v-model="col.tasks"
            :group="{ name: 'tasks', pull: alt ? 'clone' : true }"
            item-key="id"
            :animation="150"
          >
            <template #item="{ element: tasks }">
              <Task
                :task="tasks"
                @Delete="col.tasks = col.tasks.filter((t) => t.id != $event)"
              />
            </template>
          </draggaable>

          <footer class="text-gray-500">
            <AddTask @add="col.tasks.push($event)" />
          </footer>
        </div>
      </template>
    </draggaable>

    <button class="bg-blue-300 rounded mt-2" @click="createColumn" tabindex="0">
      Add new column
    </button>
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
