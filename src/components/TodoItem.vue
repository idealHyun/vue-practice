<script setup lang="ts">
import type { TodoItem } from '@/stores/todoStore.ts';
import { useTodoStore } from '@/stores/todoStore.ts';

const todoStore = useTodoStore();
defineProps<{todo:TodoItem}>();
</script>

<template>
  <div class="todo_item">
    <span :class="{completed:todo.completed}">{{ todo.title }}</span>
    <div class="todo_item_setting">
      <button @click="todoStore.toggleTodo(todo.id)">완료</button>
      <button @click="todoStore.deleteTodo(todo.id)">삭제</button>
    </div>
  </div>
</template>

<style scoped>
.todo_item {
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
}

.todo_item .completed{
  text-decoration: line-through;
}
</style>
