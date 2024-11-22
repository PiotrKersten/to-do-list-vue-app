<script setup lang="ts">
import { reactive } from 'vue'
import NewTask from '@/components/NewTask.vue'
import TaskList from '@/components/TaskList.vue'
import TaskCompleted from '@/components/TaskCompleted.vue'

type Task = {
  title: string
  completed: boolean
}

const activeTasks = reactive<Task[]>([])
const completedTasks = reactive<Task[]>([])

const addTask = (title: string) => {
  activeTasks.push({ title, completed: false })
}

const toggleTaskCompletion = (index: number) => {
  const [tasks]: Task[] = activeTasks.splice(index, 1)
  completedTasks.push(tasks)
}

const removeTask = (index: number, isActive: boolean) => {
  if (isActive) {
    activeTasks.splice(index, 1)
  } else {
    completedTasks.splice(index, 1)
  }
}
</script>
<template>
  <div class="flex">
    <div class="w-1/3 p-4">
      <NewTask @task-added="addTask" />
    </div>

    <div class="w-1/3 p-4">
      <TaskList
        :tasks="activeTasks"
        @toggle-task="(index) => toggleTaskCompletion(index)"
        @delete-task="(index) => removeTask(index, true)"
      />
    </div>

    <div class="w-1/3 p-4">
      <TaskCompleted
        :completedTasks="completedTasks"
        @delete-completed-task="(index) => removeTask(index, false)"
      />
    </div>
  </div>
</template>
