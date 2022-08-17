<template>
  <div class="todo-item">
    <span class="todo-message" @click="editItem(item)">{{
      item?.message
    }}</span>
    <button class="delete-button" @click="deleteItem(item)">Delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  methods: {
    editItem(item: object) {
      this.$emit("edit", item);
    },
    deleteItem(item: object) {
      this.$emit("delete", item);
    },
  },
  props: ["item"],
});
</script>

<style>
.todo-item {
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.todo-message {
  font-weight: bold;
}

.todo-message:hover {
  cursor: pointer;
  color: #42b983;
}

.delete-button {
  border: none;
  background-color: transparent;
  color: #42b983;
}

.delete-button:hover {
  cursor: pointer;
}
</style>
