<template>
  <div class="action">
    <div class="modal-action">
      <div class="modal-row">
        <div class="modal-title">Add Item:</div>
        <button @click="turnOff()" class="modal-button-close">╳</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoAction",
  methods: {
    turnOff() {
      this.$emit("turnOff");
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
}
</style>
