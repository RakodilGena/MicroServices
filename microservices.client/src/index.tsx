import "reflect-metadata";
import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'inversify-react';

import {createRoot} from 'react-dom/client';
import Router from "./Components/Router/Router";
import {DependencyContainerBuilder} from "./DependencyInjection/DependencyContainerBuilder";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Provider container={() => {
        return DependencyContainerBuilder.buildContainer();
    }}>
        <Router />
    </Provider>

);

// const router = createBrowserRouter(
//     <Routes>
//         <Route path="/" element={<Main />}></Route>
//         <Route path="chat" element={<Chat />}></Route>
//     </Routes>
//     // createRoutesFromElements(
//
//         // <Route path="/" element={<Main />}>
//         //     <Route path="chat" element={<Chat />} />
//         //     <Route path="contact" element={<Contact />} />
//         //     <Route
//         //         path="dashboard"
//         //         element={<Dashboard />}
//         //         loader={({ request }) =>
//         //             fetch("/api/dashboard.json", {
//         //                 signal: request.signal,
//         //             })
//         //         }
//         //     />
//         //     <Route element={<AuthLayout />}>
//         //         <Route
//         //             path="login"
//         //             element={<Login />}
//         //             loader={redirectIfUser}
//         //         />
//         //         <Route path="logout" action={logoutUser} />
//         //     </Route>
//         // </Route>
//     // )
// );
//
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
