<!-- src/components/TodoList.vue -->
<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add new todo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['todos']),
    newTodo: {
      get() {
        return '';
      },
      set(value) {
        this.newTodo = value;
      }
    }
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo'])
  }
};
</script>
