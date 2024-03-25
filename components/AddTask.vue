<script setup lang="ts">
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import type { tasks } from "../types/index";
const textref = ref<HTMLInputElement | null>(null);
const active = ref();
const title = ref();

//define emits
const emit = defineEmits<{
  (e: "add", payload: tasks): void;
}>();

//auto exoand the text area based on user input
const updateHeight = (e: any) => {
  const height = e.target.scrollHeight;
  e.target.style.height = `${height}px`;
  console.log(e.target.scrollHeight);
};

// fire add task emit
function addTask(e: Event) {
  if (title.value.trim != "") {
    e.preventDefault();
    emit("add", {
      id: nanoid(),
      title: title.value.trim(),
      createdAt: new Date().toISOString(),
    });
  }
  title.value ="";
} 
//foogle the textarea
const showtextarea = () => {
  active.value = !active.value;
  if (textref.value) {
    textref.value?.focus();
  }
};
onMounted(() => {
  nextTick(() => {
    textref.value?.focus();
  });
});
</script>
<template>
  <textarea
    v-show="active"
    ref="textref"
    type="text"
    placeholder="Enter your task"
    class="lol min-h-[40px] rounded overflow w-full flex flex-grow resize-none h-auto"
    v-model="title"
    @input="updateHeight"
    @keydown.tab="addTask"
    @keyup.enter="addTask"
  ></textarea>
  <button @click="showtextarea" class="mt-1">{{!active ? '+add to card': ' ❌'}}</button>
</template>
<style></style>
