import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { Note } from "../models/NoteModel";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

interface INoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FunctionComponent<INoteListProps> = ({
  notes,
  setNotes,
}) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((item) => item.id != id));
  };

  const renderList = (): JSX.Element[] => {
    return notes.map((item) => {
      return <Notes key={item.id} note={item} handleDelete={handleDelete} />;
    });
  };

  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>{renderList()}</div>
      <Row>
        <Col>
          <CreateNote setNotes={setNotes} notes={notes} />
        </Col>
      </Row>
    </>
  );
};

export default NoteList;
