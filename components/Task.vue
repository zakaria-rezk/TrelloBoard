<script setup lang="ts">
import type { tasks, ID } from "~/types";
import { onKeyStroke } from '@vueuse/core'
const prop =defineProps<{
  task: tasks;
  // Add more props as needed
}>();
const focused = ref(false);
const deletedItem =ref()
const seletedTask = ref();
let id =''
const emit = defineEmits<{
  (e: "Delete", payload: ID): void;
}>();

const handel = (e:any) =>{
  focused.value = true;
  id =e
 
}
onKeyStroke('Delete', (e)=>{
  e.preventDefault()
  if(focused.value)
  {
    
    emit("Delete",id)
  }
  
})

</script>
<template>
  <div
    :title="task.createdAt"
     class="task bg-white max-w-[250px] p-2 mb-2 shadow-sm"
     tabindex="0"
     @focus="handel(task.id)"
     @blur="focused = false"
     ref="seletedTask"
     :key="task.id"
  >
    <span > <DragHandle /> {{ task.title }} </span>
  </div>
</template>
<style scoped>
.task:focus{
  outline: gray auto 1px !important;
 
  
}


</style>