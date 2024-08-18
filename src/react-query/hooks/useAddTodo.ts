import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {CACHE_KEY_TODOS} from "../constants";
import ApiClient from "../services/apiClient";
import todoService, {Todo} from "../services/todoService";

interface AddTodoContext {
  previousTodos: Todo[]
}

// const apiClient = new ApiClient<Todo>('/todos')

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddTodoContext>({
    // mutationFn: (todo: Todo) =>
    //   axios.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
    //     .then(response => response.data),
    // mutationFn: apiClient.post,
    mutationFn: todoService.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

      queryClient.setQueryData<Todo, string[], Todo[]>(
        CACHE_KEY_TODOS,
        (todos = []) =>
          [newTodo, ...todos]
      );

      onAdd();

      return {previousTodos};
    },

    onSuccess: (savedTodo, newTodo) => { // savedTodo = from the server, newTodo = on the client
      // Approach 1: Invalidating the cache
      // queryClient.invalidateQueries({
      //   queryKey: CACHE_KEY_TODOS
      // })

      // Approach 2: Updating the cache directly
      // queryClient.setQueryData<Todo, [string], Todo[]>(
      //   CACHE_KEY_TODOS,
      //   todos =>
      //     [savedTodo, ...(todos || [])]
      // );
      // if (ref.current) ref.current.value = '';

      queryClient.setQueryData<Todo, string[], Todo[]>(
        CACHE_KEY_TODOS,
        todos =>
          todos?.map(todo =>
            todo === newTodo ? savedTodo : todo
          )
      )
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    }
  });
}

export default useAddTodo;