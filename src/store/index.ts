import TodoItem from "@/classes/TodoItem";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  todos: Array<TodoItem>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    todos: [{ message: "Test" }],
  },
  mutations: {
    addItem(state, item) {
      state.todos.push(item);
    },
    deleteItem(state, item) {
      state.todos = state.todos.filter((todo) => {
        return todo.message != item.message;
      });
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
