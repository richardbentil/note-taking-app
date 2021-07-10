import Link from "next/link";
import { useRouter } from "next/router";

function SideNav() {
  //get the url param id
  const router = useRouter();

  const links = ["/personal", "/work", "/misc"];

  return (
    <div className="py-5 px-2 h-100" id="sideNav">
      <div className="nav flex-column nav-pills">
        {links.map((link) => (
          <Link href={`${link}`} key={link.key}>
            <a
              className={`nav-link text-white h5 text-nowrap ${
                link === router.pathname ? "active" : ""
              }`}>
              <i
                className="fa fa-user d-block d-md-none nav-fa"
                aria-hidden="true"></i>
              <span className="d-none d-sm-block nav-text">
                {link.toUpperCase().slice(1)}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
