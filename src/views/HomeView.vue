<script setup lang="ts"></script>

<template>
  <header>
    <h1>ToDo List</h1>
  </header>

  <div class="todo_list">
    <ul>
      <li>
        <div class="todo_item">
          <span>운동하기</span>
          <div class="todo_item_setting">
            <button>편집</button>
            <button>완료</button>
            <button>삭제</button>
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
</style>
