import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";
import ReactPaginate from "react-paginate";
import ModalAddUser from "./ModalAddUser";
import ModalEditUser from "./ModalEditUser";
import _ from "lodash";
import ModalDeleteUser from "./ModalDeleteUser";

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});

  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [dataUserDelete, setDataUserDelete] = useState({});

  const handleCloseModal = () => {
    setIsShowModal(false);
    setIsEditUser(false);
    setIsDeleteUser(false);
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      setListUsers(res.data);
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
    }
  };

  const handlePageClick = (e) => {
    getUsers(+e.selected + 1);
  };

  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUser = (user) => {
    setIsEditUser(true);
    setDataUserEdit(user);
  };

  const handleDeleteUser = (user) => {
    setIsDeleteUser(true);
    setDataUserDelete(user);
  };

  const handleUpdateUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUsers[index].first_name = user.first_name;
    setListUsers(cloneListUsers);
  };

  return (
    <>
      <div className="my-3 d-flex align-items-center justify-content-between ">
        <span>
          <b>List Users:</b>
        </span>
        <button
          onClick={() => setIsShowModal(true)}
          className="btn btn-primary"
        >
          {" "}
          Add New Users
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((data, index) => {
              return (
                <tr key={`users-${index}`}>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(data)}
                      className="btn btn-warning mx-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(data)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModalAddUser
        show={isShowModal}
        handleClose={handleCloseModal}
        handleUpdateTable={handleUpdateTable}
      />
      <ModalEditUser
        show={isEditUser}
        handleClose={handleCloseModal}
        dataUserEdit={dataUserEdit}
        handleUpdateUserFromModal={handleUpdateUserFromModal}
      />
      <ModalDeleteUser
        show={isDeleteUser}
        handleClose={handleCloseModal}
        dataUserDelete={dataUserDelete}
      />
    </>
  );
};

export default TableUsers;
