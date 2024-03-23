import Image from "next/image";
import Header from "./components/Header/header";
import Entries from "./components/Entries/entries";

export default function Home() {
  return (
    <main>
      <Header />
      <Entries />
    </main>
  );
}
