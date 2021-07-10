import SideBar from "../components/SideBar";
import Search from "../components/Search";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackAndRefresh from "../components/BackAndRefresh";
import Spinner from "../components/Spinner";
import Form from "../components/Form";

function Work() {
  const notes = [
    {
      id: "3",
      title: "Build a Commerce web app",
      description: "I'm learning how to integrate mongodb in nextjs app",
      dateCreated: "7th July 2021",
    },
    {
      id: "4",
      title: "Firebase Authentication",
      description: "I'm learning how to integrate mongodb in nextjs app",
      dateCreated: "7th July 2021",
    },
  ];
  //get the url param id
  const router = useRouter();
  const { id } = router.query;

  const [note, setnote] = useState("");
  const [formContent, setformContent] = useState(false);
  const [form, setform] = useState("");

  useEffect(() => {
    if (id) {
      const noteDetails = notes.find((note) => note.id === id);
      setnote({
        id: noteDetails.id,
        title: noteDetails.title,
        description: noteDetails.description,
        dateCreated: noteDetails.dateCreated,
      });
    } else {
      //select first note upon mounting
      //push a new url to redirect
      router.push({
        pathname: "/work",
        query: { id: notes[0].id },
      });
    }

    if (formContent === true) {
      setnote("");

      //show form
      setform(<Form />);
    } else {
      setform("");
    }
  }, [id, formContent]);

  return (
    <Layout>
      <div className="row">
        <div className="col-3 col-md-4 col-lg-3 py-5 vh-100 border-right">
          <Search />
          <SideBar
            notes={notes}
            link="/work"
            setformContent={setformContent}
          />
        </div>
        <div className="col-9 col-md-8 col-lg-9 pt-2 pb-5">
          <BackAndRefresh />
          <div className="col-12 my-3">
            {note.id !== "" && (
              <div>
                <h5>{note.title}</h5>
                <p>{note.description}</p>
              </div>
            )}
            {form}
          </div>

          {note.id === "" && (
            <div className="col-12 mx-auto my-3">
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Work;

