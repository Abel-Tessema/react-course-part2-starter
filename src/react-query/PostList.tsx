import usePosts from "./hooks/usePosts";
import {Fragment} from "react";

const PostList = () => {
    const pageSize = 10;
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage
    } = usePosts({pageSize});

    if (isLoading) return <p>Loading...</p>;

    if (error) return <p>{error.message}</p>;

    return (
        <>
            <ul className="list-group">
                {data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.map((post, index) =>
                            <li key={post.id} className="list-group-item">
                                {post.title}
                            </li>
                        )}
                    </Fragment>
                ))}
            </ul>

            <button
                className="btn btn-primary my-3 ms-1"
                onClick={() => fetchNextPage()}
            >
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
        </>
    );
};

export default PostList;
