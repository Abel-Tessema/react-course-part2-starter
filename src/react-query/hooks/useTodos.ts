import {useQuery} from "@tanstack/react-query";
import {CACHE_KEY_TODOS} from "../constants";
import ApiClient from "../services/apiClient";
import todoService, {Todo} from "../services/todoService";

// const apiClient = new ApiClient<Todo>('/todos')

const useTodos = () => {
    // const fetchTodos = () =>
    //     axios
    //         .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
    //         .then(response => response.data);

    return useQuery<Todo[], Error>({
        queryKey: CACHE_KEY_TODOS,
        // queryFn: apiClient.getAll,
        queryFn: todoService.getAll,
        staleTime: 10_000
    });
}

export default useTodos;