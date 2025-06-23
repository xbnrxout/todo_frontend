<template>
  <form @submit.prevent="addTask">
    <input v-model="newTask" placeholder="New task" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import axios from "@/axios";

const emit = defineEmits(["task-added"]);
const newTask = ref("");

async function addTask() {
  if (!newTask.value.trim()) return;
  await axios.post("/todos", { task: newTask.value });
  newTask.value = "";
  emit("task-added");
}
</script>
