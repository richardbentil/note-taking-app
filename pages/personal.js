import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Search from "../components/Search";
import Layout from "../components/Layout";
import BackAndRefresh from "../components/BackAndRefresh";
import Form from "../components/Form";
import CreateNote from "../components/CreateNote";
import Note from "../components/Note"

function Personal({ personal_notes }) {
  //get the url param id
  const router = useRouter();
  const { id } = router.query;

  const [note, setnote] = useState(null);
  const [dataMessage, setDataMessage] = useState("");
  const [formContent, setformContent] = useState(false);
  const [form, setform] = useState("");

  useEffect(() => {
    if (personal_notes) {
      console.log(personal_notes)
      if (!id) {
        //display first note
        router.push({
          pathname: "/personal",
          query: { id: personal_notes[0]._id },
        });
      }
    }

    //set note details
    getNoteDetails();

    //set form
    if(formContent) {
      setnote("")
      setform(<Form />)
    } else {
      setform("")
    }
  }, [id, formContent]);

  const getNoteDetails = () => {
    const noteDetails = personal_notes.find((note) => note._id === id);
    setnote(noteDetails);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3 py-5 vh-100 border-right">
          <Search />
          <SideBar
            notes={personal_notes}
            link="/personal"
            setformContent={setformContent}
          />
        </div>
        <div className="d-none d-md-block col-9 col-md-8 col-lg-9 pt-2 pb-5">
          <BackAndRefresh />
          <div className="col-12 my-3">
            {dataMessage && dataMessage}
            <Note note={note} />
            {form}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/personal_notes");
  const personal_notes = await res.json();

  return {
    props: {
      personal_notes,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export default Personal;
