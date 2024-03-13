import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

import FormPage from "./pages/form-page";

const App = () => {
  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        theme="dark"
        transition={Zoom}
      />
      <FormPage />
    </>
  );
};

export default App;
