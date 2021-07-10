import { useRouter } from "next/router";

const CreateNote = ({ link, setformContent }) => {
  const router = useRouter();
  return (
    <span>
      <span className="mr-1">There are no {router.pathname.slice(1)} notes</span>
      <button
        link={link}
        onClick={() => setformContent(true)}
        className="btn btn-default p-0 text-primary">
        Create Note
      </button>
    </span>
  );
};

export default CreateNote;
