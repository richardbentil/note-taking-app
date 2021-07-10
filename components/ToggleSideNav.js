
function ToggleSideNav({ setshowSideNav }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-transparent"
        className="p-2 p-md-3 text-dark"
        style={{ borderBottomRightRadius: "20px" }}
        onClick={() => setshowSideNav(false)}>
        <span>
          <i className="fa fa-bars fa-2x nav-fa" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default ToggleSideNav
