"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/book.ico";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={
            pathName === "/"
              ? "border border-green-600 text-green-600 font-bold px-4 py-2 rounded-md"
              : ""
          }
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href={"/books"}
          className={
            pathName === "/books"
              ? "border border-green-600 text-green-600 font-bold px-4 py-2 rounded-md"
              : ""
          }
        >
          All books
        </Link>
      </li>
      <li>
        <Link
          href={"/listed-books"}
          className={
            pathName === "/listed-books"
              ? "border border-green-600 text-green-600 font-bold px-4 py-2 rounded-md"
              : ""
          }
        >
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href={"/pages-read"}
          className={
            pathName === "/pages-to-read"
              ? "border border-green-600 text-green-600 font-bold px-4 py-2 rounded-md"
              : ""
          }
        >
          Pages to Read
        </Link>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <Link href={"/"} className="btn btn-ghost flex gap-2">
              <h2 className="text-lg font-bold">Book Vibe</h2>
              <Image src={Logo} height={20} width={20} alt={"Logo"}></Image>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <button className="btn btn-success">Sign In</button>
          <button className="btn btn-info">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
