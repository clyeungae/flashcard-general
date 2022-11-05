import './App.css';
import AppRoute from './AppRoute';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar
        theme="dark"
      />
    </>
  );
}

export default App;
