<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useToast } from 'vue-toastification'

defineProps<{
  completedTasks: { title: string }[]
}>()

const toast = useToast()
const emit = defineEmits(['delete-completed-task'])

const deleteCompletedTask = (index: number) => {
  emit('delete-completed-task', index)
  toast.warning('Completed task successfully deleted')
}
</script>

<template>
  <div class="p-4 rounded-lg shadow-md">
    <h2 class="font-semibold text-xl mb-4">Completed Tasks</h2>
    <ul>
      <li
        v-for="(task, index) in completedTasks"
        :key="index"
        class="bg-green-200 rounded-lg p-4 mb-2 flex justify-between items-center"
      >
        <span>{{ task.title }}</span>
        <button @click="deleteCompletedTask(index)" class="bg-red-500 text-white rounded px-3 py-1">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>
