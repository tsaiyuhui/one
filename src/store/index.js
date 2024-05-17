// store/index.js

import { createStore } from 'vuex'; // 使用 Vuex 4.x 可能需要使用 `createStore`

export default createStore({
  state() {
    return {
      todos: []
    };
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    removeTodo({ commit }, index) {
      commit('REMOVE_TODO', index);
    }
  },
  getters: {
    allTodos(state) {
      return state.todos;
    }
  }
});
