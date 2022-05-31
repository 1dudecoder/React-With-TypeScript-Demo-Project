import * as React from "react";
import { Button, Form } from "react-bootstrap";
import { Note } from "../models/NoteModel";

interface ICreateNoteProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  notes: Note[];
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({
  setNotes,
  notes,
}) => {
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);
  const [error, setError] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current!.value === "" || textRef.current!.value === "") {
      setError("Error please fill all the input fields");
    } else {
      setNotes([
        ...notes,
        {
          id: new Date().toString(),
          title: (titleRef.current as HTMLInputElement).value,
          text: (textRef.current as HTMLTextAreaElement).value,
          color: (colorRef.current as HTMLInputElement).value,
          date: new Date().toString(),
        },
      ]);
      setError("");
    }
  };

  return (
    <>
      <h2 className="mt-5">Create Notes</h2>
      <div>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your Title"
              ref={titleRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your text"
              ref={textRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              type="color"
              title="Choose your color"
              ref={colorRef}
            />
          </Form.Group>
          <Button type="submit" className="mt-3" variant="primary">
            Add Task
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateNote;
