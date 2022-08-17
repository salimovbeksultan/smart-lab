<template>
  <div class="list">
    <div class="operations-row">
      <strong>Items:</strong>
      <button class="list-button" @click="startAction()">Add Item</button>
      <TodoAction @turnOff="action = false" v-if="action"></TodoAction>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <todo-item-vue :item="todo"></todo-item-vue>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/index";
import TodoItemVue from "@/components/TodoItem.vue";
import TodoItem from "../classes/TodoItem";
import TodoAction from "@/components/TodoAction.vue";

export default defineComponent({
  name: "ListView",
  components: { TodoItemVue, TodoAction },
  data() {
    return {
      todos: [] as TodoItem[],
      action: false,
    };
  },
  mounted() {
    this.todos = useStore().state.todos;
  },
  methods: {
    startAction() {
      this.action = true;
    },
  },
});
</script>

<style>
.list {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

ul {
  list-style: none;
  padding-left: 0px;
}

.list-button {
  border: 1px solid #42b983;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  margin-bottom: 10px;
}

.list-button:hover {
  cursor: pointer;
}

.operations-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
