import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import style from "../../../styles/score.module.css";

const columns = [
  { field: "username", headerName: "Player", width: 200 },
  { field: "score", headerName: "Score", width: 120 },
];
const data = [
  {
    id: 1,
    username: "Admin",
    score: "Win",
  },
  {
    id: 2,
    username: "Admin",
    score: "Lose",
  },
  {
    id: 3,
    username: "Admin",
    score: "Win",
  },
  {
    id: 4,
    username: "Admin",
    score: "Win",
  },
];

function SmallExample() {
  useEffect(() => {
    document.body.classList.add(style.score);

    return function cleanup() {
      document.body.classList.remove(style.score);
    };
  }, []);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default SmallExample;
