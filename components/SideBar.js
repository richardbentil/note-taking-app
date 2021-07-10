import Link from "next/link";
import { useRouter } from "next/router";
import AddNote from "../components/AddNote";
import CreateNote from "../components/CreateNote";

const SideBar = ({ notes, link, setformContent, setForm }) => {
  //get the url param id
  const router = useRouter();
  const { id } = router.query;

  if (notes.length === 0) return <CreateNote link={link} setformContent={setformContent} />;

  return (
    <div>
      <ul className="list-unstyled my-3 mx-n3">
        <li
          key={notes[0]._id}
          className={
            id === notes[0]._id
              ? "px-3 py-1 bg-dark text-white"
              : "px-3 py-1 border-bottom text-dark"
          }
          onClick={() => setformContent(false)}>
          <Link
            href={{
              pathname: `${link}`,
              query: { id: notes[0]._id },
            }}>
            <a
              className={
                id === notes[0]._id
                  ? "px-3 text-decoration-none text-white"
                  : "px-3 text-decoration-none text-dark"
              }>
              <h6 className="font-weight-bold">{notes[0].title}</h6>
              <p className="mb-0 text-truncate">{notes[0].description}</p>
              <p className="text-muted text-right mb-0">
                <small>{}</small>
              </p>
            </a>
          </Link>
        </li>
        {notes.slice(1).map((note) => (
          <li
            key={note._id}
            className={
              id === note._id
                ? "px-3 border-bottom bg-dark text-white"
                : "px-3 border-bottom text-dark"
            }
            onClick={() => setformContent(false)}>
            <Link
              href={{
                pathname: `${link}`,
                query: { id: note._id },
              }}>
              <a
                className={
                  id === note._id
                    ? "px-3 text-decoration-none text-white"
                    : "px-3 text-decoration-none text-dark"
                }>
                <h6 className="font-weight-bold">{note.title}</h6>
                <p className="mb-0 text-truncate">{note.description}</p>
                <p className="text-muted text-right mb-0">
                  <small>{}</small>
                </p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <AddNote link={link} setformContent={setformContent} />
    </div>
  );
};

export default SideBar;
