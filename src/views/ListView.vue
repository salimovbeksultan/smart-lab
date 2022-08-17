<template>
  <div class="list">
    <div class="operations-row">
      <strong>Items:</strong>
      <button class="list-button" @click="createItem">Add Item</button>
      <TodoAction
        v-if="modal"
        :todoCommand="command"
        :todoItem="item"
        @turnOff="modal = false"
        @create="confirmCreate"
        @delete="confirmDelete"
      ></TodoAction>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.message">
        <todo-item-vue
          @edit="editItem"
          @delete="deleteItem"
          :item="todo"
        ></todo-item-vue>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store/index";
import TodoItemVue from "@/components/TodoItem.vue";
import TodoAction from "@/components/TodoAction.vue";

export default defineComponent({
  name: "ListView",
  components: { TodoItemVue, TodoAction },
  data() {
    return {
      modal: false,
      command: "",
      item: {},
    };
  },
  setup() {
    const store = useStore();

    return {
      todos: computed(() => store.state.todos),
      confirmCreate: (item: object) => store.commit("addItem", item),
      confirmDelete: (item: object) => store.commit("deleteItem", item),
    };
  },
  methods: {
    createItem() {
      this.modal = true;
      this.command = "create";
      this.item = { message: "" };
    },
    editItem(item: object) {
      this.modal = true;
      this.command = "edit";
      this.item = item;
    },
    deleteItem(item: object) {
      this.modal = true;
      this.command = "delete";
      this.item = item;
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
