import axios from "axios";
import {InfiniteData, QueryFunctionContext, QueryKey, useInfiniteQuery} from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = ({pageSize}: PostQuery) => useInfiniteQuery<Post[], Error, InfiniteData<Post[]>, any[], number>({
  queryKey: ['posts', {pageSize}],
  queryFn: ({pageParam = 1}) =>
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * pageSize,
          _limit: pageSize
        }
      })
      .then(response => response.data),
  // initialData: undefined,
  initialPageParam: 1,
  staleTime: 10_000,
  // placeholderData: keepPreviousData,
  getNextPageParam: (lastPage, allPages) =>
    lastPage.length > 0 ? allPages.length + 1 : undefined
});


export default usePosts;