import Link from "next/link";
import Image from "next/image";

 export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );

}
