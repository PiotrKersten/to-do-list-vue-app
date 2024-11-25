<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import logo from '@/assets/logo.jpg'

const newTask = ref('')
const toast = useToast()
const emit = defineEmits(['task-added'])

const addTask = (): void => {
  if (newTask.value.trim()) {
    emit('task-added', newTask.value.trim())
    newTask.value = ''
    toast.success('Task added successfully')
  } else {
    toast.error('Cannot add empty task')
  }
}
</script>

<template>
  <div class="bg-blue-50 p-6 rounded-lg shadow-md min-h-screen">
    <h1 class="text-xl font-bold">Task Manager</h1>
    <h2>
      <p class="mb-4 text-gray-700">Simple task manager</p>
    </h2>

    <div class="flex justify-center mb-4">
      <img
        :src="logo"
        alt="Task Manager Logo"
        style="width: 220px; height: 220px"
        class="rounded-full shadow-md"
      />
    </div>

    <p class="mb-4 text-gray-700">Enables users to create, delete, restore, and manage tasks</p>
    <input v-model="newTask" placeholder="Add a new task" class="border p-2 rounded" />
    <button @click="addTask" class="bg-blue-500 text-white rounded p-2 ml-2">Add</button>
  </div>
</template>
