<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const newTask = ref('')
const toast = useToast()
const emit = defineEmits(['task-added'])

const addTask = () => {
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
  <div class="bg-blue-50 p-6 rounded-lg shadow-md">
    <h1 class="text-xl font-bold">Task Manager</h1>
    <h2>
      <p class="mb-4 text-gray-700">Simple task manager</p>
    </h2>
    <input v-model="newTask" placeholder="Add a new task" class="border p-2 rounded" />
    <button @click="addTask" class="bg-blue-500 text-white rounded p-2 ml-2">Add</button>
  </div>
</template>
