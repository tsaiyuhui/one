<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>My Todo List</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>
