import React, { useState } from "react";
import "./App.css";
import { Note } from "./models/NoteModel";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "REACT TODO APP",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, assumenda.",
      color: "#BD5173",
      date: new Date().toString(),
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
