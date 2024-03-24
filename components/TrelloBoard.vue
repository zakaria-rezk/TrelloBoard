<script setup lang="ts">
import { nanoid } from "nanoid";
import type { Column, tasks } from "../types/index";

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
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: nanoid(),
    title: " tommorow tasks",
    tasks: [
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
      {
        id: nanoid(),
        title: "lets do it,again ",
        createdAt: new Date().toISOString(),
      },
    ],
  },
]);

const title = ref();
const addTask = (col: any) => {
  const ll = {
    id: nanoid(),
    title: temp.value,
    createdAt: new Date().toISOString(),
  };
  temp.value = "";
  col.tasks.push(ll);
};
// temp var because the dom do not update when i just value of title although reseting it here after every insert
const temp = ref("");
const auto = (newvalue: any) => {
  temp.value += newvalue.data;
  //auto exoand the text area based on user input
  const height = newvalue.target.scrollHeight;
  newvalue.target.style.height = `${height}px`;
};
import draggaable from "vuedraggable";
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
      <template #item="{ element: col }: { element: Column }">
        <div class="row bg-gray-200 min-w-[250px] p-5 rounded">
          <header class="font-bold mb-4"> <DragHandle /> {{ col.title }}</header>
          <draggaable
            v-model="col.tasks"
            group="task"
            item-key="id"
            :animation="150"
          >
            <template #item="{ element: tasks }: { element: tasks }">
              <Task :task="tasks" />
            </template>
          </draggaable>

          <textarea
            type="text"
            placeholder="enter your task"
            class="lol min-h-[40px] rounded overflow w-full flex flex-grow resize-none h-auto"
            :value="title"
            @input="auto"
          ></textarea>
          <footer class="text-gray-500">
            <button @click="addTask(col)">+add to card</button>
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
