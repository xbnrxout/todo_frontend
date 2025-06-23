<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
      <p>
        Role: <strong>{{ role }}</strong>
      </p>
      <button @click="logout">Logout</button>
    </header>

    <main class="dashboard-content">
      <TaskList />
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getUserRole } from "@/utils/role";
import { removeToken } from "@/utils/auth";
import { useRouter } from "vue-router";
import TaskList from "@/components/TaskList.vue";

const router = useRouter();
const role = ref("loading...");

onMounted(() => {
  role.value = getUserRole() || "guest";
});

function logout() {
  removeToken();
  router.push("/login");
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-content {
  margin-top: 2rem;
}
</style>
