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
    toast.success('Task added succesfully')
  } else {
    toast.error('Cannot add empty task')
  }
  return { newTask, addTask }
}
</script>

<template>
  <div class="p-6 rounded-lg shadow-md">
    <input v-model="newTask" placeholder="Add a new task" />
    <button @click="addTask">Add</button>
  </div>
</template>
