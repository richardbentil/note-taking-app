import Head from "next/head";

const Layout = (props) => {
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
          crossorigin="anonymous"
        />
      </Head>
      {props.children}
      <script src="https://use.fontawesome.com/2a1054e16f.js"></script>
    </div>
  );
};

export default Layout;
