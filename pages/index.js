import Link from "next/link";

function Home() {
  return (
    <div>
      Home
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
