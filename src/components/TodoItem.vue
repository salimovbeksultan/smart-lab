<template>
  <div class="todo-item">
    <span v-text="item?.message"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  props: {
    item: Object,
  },
});
</script>

<style>
.todo-item {
  border: 1px solid #42b983;
  border-radius: 5px;
  padding: 10px;
}
</style>
