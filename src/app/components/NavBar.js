import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link href="/">
            <a>MySite</a>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-gray-300">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-white hover:text-gray-300">Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
