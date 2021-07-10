

function Note({note}) {
  if(!note) return "There are no notes"
  return (
    <div>
      <div>
                <h5>{note.title}</h5>
                <p>{note.description}</p>
              </div>
    </div>
  )
}

export default Note
