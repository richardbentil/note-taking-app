import Head from "next/head";
import { useState } from "react";

import SideNav from "../components/SideNav";
import ToggleSideNav from "../components/ToggleSideNav";

const Layout = (props) => {
  const [showSideNav, setshowSideNav] = useState(true)
  return (
    <div>
      <Head>
        <title>NOTES</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>
      <div>
        <div className="container-fluid">
          <div className="row">
            {showSideNav && (
              <div className="col-3 col-md-2 col-lg-2 p-0 bg-dark vh-100">
                <ToggleSideNav
                  showSideNav={showSideNav}
                  setshowSideNav={setshowSideNav}
                />
                <SideNav  />
              </div>
            )}
            <div
              className={
                showSideNav
                  ? `col-9 col-md-10 col-lg-10`
                  : `col-12`
              }>
              {props.children}
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
        crossOrigin="anonymous"></script>
      <script src="https://use.fontawesome.com/2a1054e16f.js"></script>
    </div>
  );
};

export default Layout;
