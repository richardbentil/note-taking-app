import Image from "next/image";
import plus from "../public/img/plus.svg";

function AddNote({ link, setformContent }) {
  return (
    <div
      className="position-absolute text-right"
      style={{
        zIndex: 1000,
        right: 0,
        bottom: 0,
        marginBottom: "20px",
      }}>
      <span
        className="bg-dark px-1 py-3"
        style={{
          cursor: "pointer",
          width: "150px",
          height: "150px",
          borderRadius: "2.5rem",
        }}
        onClick={() => setformContent(true)}>
          <Image src={plus} alt="add-note" className="pt-4" />
        </span>
    </div>
  );
}

export default AddNote;
