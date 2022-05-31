import * as React from "react";
import { Button, Card } from "react-bootstrap";
import { Note } from "../models/NoteModel";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <>
      <div className="mt-4 mb-4">
        <Card style={{ backgroundColor: note.color }}>
          <Card.Body>
            <Card.Title style={{ color: "white" }}>{note.title}</Card.Title>
            <Card.Text style={{ color: "white" }}>{note.text}</Card.Text>
            <Card.Title style={{ color: "white" }}>{note.date}</Card.Title>
            <Button
              onClick={() => {
                handleDelete(note.id);
              }}
              className="mt-3"
              variant="danger"
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;
