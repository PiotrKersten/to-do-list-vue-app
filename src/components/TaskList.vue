<script setup lang="ts">
import { reactive } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const emit = defineEmits(['delete-task', 'toggle-task'])

defineProps<{
  tasks: { title: string; completed: boolean }[]
}>()

const deleteTask = (index: number) => {
  emit('delete-task', index)
  toast.info('Task successfully deleted')
}

const toggleTaskCompletion = (index: number) => {
  emit('toggle-task', index)
  toast.info('Task status updated')
}
</script>

<style>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>

<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" :checked="task.completed" @change="toggleTaskCompletion(index)" />
        <span :class="{ completed: task.completed }">{{ task.title }}</span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
