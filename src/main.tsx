import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import App from './App';
import './index.css';
import {RouterProvider} from "react-router-dom";
import router from "./routing/routes";

const queryClient = new QueryClient({
    // defaultOptions: {
    //     queries: {
    //         retry: 3,
    //         gcTime: 300_000,
    //         staleTime: 3_000,
    //         refetchOnMount: false,
    //         refetchOnReconnect: false,
    //         refetchOnWindowFocus: false
    //     }
    // }
});

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/*<App/>*/}
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </React.StrictMode>
);
