<template>
  <div @click="turnOff()" class="action">
    <div @click.stop class="modal-action">
      <div class="modal-row">
        <div class="modal-title">{{ title }}</div>
        <button @click="turnOff()" class="modal-button-close">╳</button>
      </div>
      <div class="modal-body">
        <textarea
          :disabled="command == 'delete'"
          rows="4"
          v-model="item.message"
          class="modal-input"
        />
      </div>
      <div class="modal-buttons">
        <button
          style="margin-left: 10px; margin-top: 10px"
          class="list-button"
          @click="sendItem(command, item)"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoAction",
  props: ["todoCommand", "todoItem"],
  mounted() {
    this.command = this.todoCommand;
    this.item = this.todoItem;
    if (this.command == "edit") this.oldItem = { ...this.item };
  },
  data() {
    return {
      item: { message: "" },
      oldItem: { message: "" },
      command: "",
    };
  },
  computed: {
    title() {
      switch (this.command) {
        case "create":
          return "Add Item:";
        case "edit":
          return "Edit Item:";
        case "delete":
          return "Delete Item:";
        default:
          return "";
      }
    },
    buttonText() {
      switch (this.command) {
        case "create":
          return "Create Item";
        case "edit":
          return "Edit Item";
        case "delete":
          return "Remove Item";
        default:
          return "";
      }
    },
  },
  methods: {
    turnOff() {
      this.$emit("turnOff");
    },
    sendItem(command: string, item: object) {
      if (command != "edit") this.$emit(command, item);
      else this.$emit(command, { oldItem: this.oldItem, newItem: item });
      this.turnOff();
    },
  },
});
</script>

<style>
.action {
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-action {
  width: 60%;
  height: 40%;
  background-color: #ffffff;
  border: 1px solid #42b983;
  border-radius: 5px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
}

.modal-title {
  padding: 10px;
  font-weight: bold;
}

.modal-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-button-close {
  background: transparent;
  border: none;
  padding: 10px;
}

.modal-button-close:hover {
  cursor: pointer;
}

.modal-input {
  border: 1px solid #42b983;
  margin-left: 10px;
  width: 50%;
}
</style>
