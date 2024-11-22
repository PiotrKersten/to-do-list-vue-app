<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

defineProps<{
  tasks: { title: string; completed: boolean }[]
}>()

const toast = useToast()
const emit = defineEmits(['toggle-task', 'delete-task'])

const toggleTaskCompletion = (index: number) => {
  emit('toggle-task', index)
  toast.info('Task status updated')
}

const deleteTask = (index: number) => {
  emit('delete-task', index)
  toast.warning('Task successfully deleted')
}
</script>

<template>
  <div class="p-4 rounded-lg shadow-md">
    <h2 class="font-semibold text-xl mb-4">Tasks</h2>
    <ul>
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="bg-gray-200 rounded-lg p-4 mb-2 flex justify-between items-center"
      >
        <span>{{ task.title }}</span>
        <div>
          <button
            @click="toggleTaskCompletion(index)"
            class="bg-green-500 text-white rounded px-3 py-1"
          >
            Complete
          </button>
          <button @click="deleteTask(index)" class="bg-red-500 text-white rounded px-3 py-1 ml-2">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
