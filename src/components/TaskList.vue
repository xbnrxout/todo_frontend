<template>
  <div>
    <h2>Tasks</h2>
    <TaskForm @task-added="fetchTasks" />
    <ul v-if="tasks.length">
      <li v-for="task in tasks" :key="task._id">
        <input v-model="task.task" @blur="updateTask(task)" />
        <button @click="deleteTask(task._id)">Delete</button>
      </li>
    </ul>
    <p v-else>No tasks</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "@/axios";
import TaskForm from "./TaskForm.vue";

const tasks = ref([]);

async function fetchTasks() {
  const { data } = await axios.get("/todos");
  tasks.value = data;
}

async function updateTask(task) {
  await axios.put(`/todos/${task._id}`, { task: task.task });
}

async function deleteTask(id) {
  await axios.delete(`/todos/${id}`);
  fetchTasks();
}

onMounted(fetchTasks);
</script>
