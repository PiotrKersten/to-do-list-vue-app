<script setup lang="ts">
import { reactive, computed } from 'vue'
import NewTask from '@/components/NewTask.vue'
import TaskList from '@/components/TaskList.vue'

const tasks = reactive<{ title: string; completed: boolean }[]>([])

const addTask = (title: string) => {
  tasks.push({ title, completed: false })
}

const toggleTaskCompletion = (index: number) => {
  tasks[index].completed = !tasks[index].completed
}

const removeTask = (index: number) => {
  tasks.splice(index, 1)
}

const completedTasks = computed(() => tasks.filter((task) => task.completed))
const activeTasks = computed(() => tasks.filter((task) => !task.completed))
</script>

<template>
  <div class="flex">
    <div class="w-1/3 p-4">
      <NewTask @task-added="addTask" />
    </div>

    <div class="w-1/3 p-4">
      <TaskList
        :tasks="activeTasks"
        @toggle-task="toggleTaskCompletion"
        @delete-task="removeTask"
      />
    </div>
  </div>
</template>
