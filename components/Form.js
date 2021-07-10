import React, { useRef, useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";

function Form() {
  const editorRef = useRef(null);
  const [title, settitle] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  //get path in router and set to table
  const router = useRouter();

  const log = () => {
    if (editorRef.current !== "" && title) {
      //console.log(title);
      //console.log(editorRef.current.getContent());
      try {
        //send form
        handleSubmit();
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
  };

  //insert data
  const handleSubmit = () => {
    const dataInfo = JSON.stringify({
      collection: router.pathname.slice(1) + "_notes",
      title: title,
      description: editorRef.current.getContent(),
    });

    axios({
      method: "post",
      url: "http://localhost:3000/api/insert_note",
      headers: { "content-type": "x-www-form-urlencoded" },
      data: dataInfo,
    })
      .then((response) => {
        setErrorMessage("");
        if (JSON.stringify(response.data.insertedCount) === "1") {
          setMessage("Note has been created");
        } else {
          setMessage(JSON.stringify(response.data.insertedCount));
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  if (!Editor) return <Spinner />;

  return (
    <div>
      <div>
        <h4>Create a new note</h4>
        <div className="my-4">
          <div class="form-group">
            <input
              value={title}
              onChange={(e) => settitle(e.target.value)}
              type="text"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="helpId"
              placeholder="Title..."
            />
            <small id="helpId" class="form-text text-muted">
              Don't include special characters here'
            </small>
          </div>
        </div>
      </div>
      <Editor
        apiKey="85mw9cftsyryl2jkjosgvgrex99fiehbkjs9ck8keqwt1oyc"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 200,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        className="mb-4"
      />
      <div className="my-3 d-flex justify-content-between">
        <div>
          <span className="text-danger">{errorMessage && errorMessage}</span>
          <span className="text-success">{message && message}</span>
        </div>
        <button
          onClick={log}
          className="btn btn-dark btn-lg py-1 mt-2"
          disabled={!editorRef || !title}>
          Create Note
        </button>
      </div>
    </div>
  );
}

export default Form;
