<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore.ts';
import {ref} from 'vue';

const newTodo = ref('');
const todoStore = useTodoStore();

const addTodo = ()=>{
  if(newTodo.value.trim()){
    todoStore.addTodo(newTodo.value)
    newTodo.value=""
  }
}
</script>

<template>
  <header>
    <h1>ToDo List</h1>
  </header>
  <div>
    <input v-model="newTodo" placeholder="할 일을 입력해주세요.">
    <button @click="addTodo"> 추가 </button>
  </div>
  <div class="todo_list">
    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
        <div class="todo_item">
          <span :class="{completed:todo.completed}">{{ todo.title }}</span>
          <div class="todo_item_setting">
            <button @click="todoStore.toggleTodo(todo.id)">완료</button>
            <button @click="todoStore.deleteTodo(todo.id)">삭제</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.todo_list ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem 5rem;
}

.todo_list ul li {
  width: 100%;
  display: flex;
  border: 1px solid var(--color-border);
  padding: 0.5rem;
  border-radius: 0.2rem;
}

.todo_list ul li .todo_item {
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
}

.todo_list ul li .todo_item .completed{
  text-decoration: line-through;
}
</style>
