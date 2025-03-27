<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore.ts';
import {ref} from 'vue';
import TodoItem from '@/components/TodoItem.vue';

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
        <TodoItem :todo="todo"/>
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


</style>
