import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchAllUser } from "../services/UserService";

const TableUsers = (props) => {
  const [listUsers, setListUses] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let res = await fetchAllUser();
    console.log(res);
    if (res && res.data) {
      setListUses(res.data);
    }
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
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
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
