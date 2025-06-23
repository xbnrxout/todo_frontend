<template>
  <div style="padding: 2rem">
    <h1>App.vue is working</h1>
    <router-view />
  </div>
</template>

<script setup>
console.log("✅ App.vue mounted");
</script>

<script>
export default {
  mounted() {
    alert("✅ App.vue mounted() ran");
  },
};
</script>
