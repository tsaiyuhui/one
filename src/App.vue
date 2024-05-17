<template>
  <div id="app">
    <h1>--Todo List--</h1>

    <!-- 輸入框&按鈕 -->
    <div>
      <input v-model="newTodo" placeholder="Add a new todo">
      <button @click="addTodo">Add</button>
    </div>

    <!-- 顯示代辦事項 -->
    <h2>代辦清單：</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ index + 1 }}. {{ todo }}
        <button @click="removeTodo(index)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTodo: ''
    };
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.$store.dispatch('addTodo', this.newTodo);
        this.newTodo = ''; // 清空输入框
      }
    },
    removeTodo(index) {
      this.$store.dispatch('removeTodo', index);
    }
  }
};
</script>

<style>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
  cursor: pointer;
}
</style>
