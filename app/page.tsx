

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="navbar">
       
        <div>
          <Link href="/">Home</Link>
          <Link href="/about"target="_blank">About</Link>
          <Link href="/contact"target="_blank">Contact</Link>
        
        </div>
      </nav>

      
      <h1 className="umair"> Welcome to My Portfolio </h1>
    </div>
  );
}