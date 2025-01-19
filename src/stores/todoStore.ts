import { defineStore } from 'pinia';
import TodoItem from '@/components/TodoItem.vue';

type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export const todoStore = defineStore('todo', {
  state: () => ({
    todos: [] as TodoItem[],
  }),
  getters: {
    fetchTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter((todo) => todo.completed === true),
    pendingTodos: (state) => state.todos.filter((todo) => todo.completed === false),
  },
  actions: {
    addTodo(title: string) {
      this.todos.push({
        id: Date.now(),
        title: title,
        completed: false,
      });
    },
    deleteTodo(id: number) {
      this.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
