import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
LoginPage;
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
