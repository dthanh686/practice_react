import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import ModalAddUser from "./components/ModalAddUser";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 d-flex align-items-center justify-content-between ">
          <span>
            <b>List Users:</b>
          </span>
          <button onClick={handleOpenModal} className="btn btn-primary">
            Add New Users
          </button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddUser show={isShowModal} handleClose={handleCloseModal} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
