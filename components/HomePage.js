import Link from "next/link";

function HomePage() {
  return (
    <div className="container vh-100" id="home-page">
      <div className="row mx-auto vh-100">
        <div className="col-12 col-md-5 m-auto">
          <h1 className="pb-5 font-weight-bold">Collect your thoughts.</h1>
          <div className="d-flex justify-content-start align-items-center">
            <Link href="/login">
              <a className="btn btn-dark btn-lg py-3 px-2 py-md-3 px-md-4 text-nowrap get-started-text">Get Started</a>
            </Link>
            <h5 className="ml-4">Take notes the simple way for free. Forever</h5>
          </div>
        </div>
        <div className="col-12 col-md-5"></div>
      </div>
    </div>
  );
}

export default HomePage
