import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { editUser, postCreateUser, updateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { handleClose, show, dataUserDelete } = props;

  const handleDeleteUser = () => {
    console.log("DeleteUser");
    handleClose();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-sm ">
                Do you want to delete User email = ${dataUserDelete.email}
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={() => handleDeleteUser()}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
