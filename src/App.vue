<script setup lang="ts">
import { reactive } from 'vue'
import NewTask from '@/components/NewTask.vue'
import TaskList from '@/components/TaskList.vue'

const tasks = reactive<{ title: string; completed: boolean }[]>([])

const addTask = (title: string) => {
  tasks.push({ title, completed: false })
}

const removeTask = (index: number) => {
  tasks.splice(index, 1)
}
</script>

<template>
  <div>
    <NewTask @task-added="addTask" />
    <TaskList :tasks="tasks" @delete-task="removeTask" />
  </div>
</template>
