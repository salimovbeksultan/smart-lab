import TodoItem from "@/classes/TodoItem";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  todos: Array<TodoItem>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    todos: [{ id: 1, message: "Test" }],
  },
});

export function useStore() {
  return baseUseStore(key);
}
