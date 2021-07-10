import { useState } from "react";
import Link from "next/link";
import HomePageLayout from "../components/HomePageLayout";

function Login() {
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HomePageLayout>
      <div className="container vh-100" id="home-page">
        <div className="row mx-auto vh-100">
          <div className="col-12 col-sm-7 col-md-5 col-lg-4 m-auto">
            <div className="col-12 text-center mb-3">
              <h3>Signup</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={() => setfullName(e.target.value)}
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={() => setemail(e.target.value)}
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  value={password}
                  onChange={() => setpassword(e.target.value)}
                  className="form-control"
                  id="password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark btn-block py-2 my-4">
                Signup
              </button>
            </form>
            <div className="col-12 text-center mt-3">
              <p>
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-dark font-weight-bold">Login</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomePageLayout>
  );
}

export default Login;
