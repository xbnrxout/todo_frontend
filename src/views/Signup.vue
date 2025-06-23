<template>
  <div class="signup-container">
    <h2>Signup</h2>
    <form @submit.prevent="handleSignup">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Create Account</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "@/axios";

const username = ref("");
const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

const handleSignup = async () => {
  try {
    const res = await axios.post("/auth/signup", {
      username: username.value,
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("token", res.data.token);
    router.push("/tasks");
  } catch (err) {
    console.error(err);
    error.value = "Signup failed. Try a different username.";
  }
};
</script>

<style scoped>
.signup-container {
  max-width: 400px;
  margin: 80px auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
input {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
}
button {
  width: 100%;
  padding: 0.5rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
