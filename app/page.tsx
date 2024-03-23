import Image from "next/image";
import Header from "./components/Header/header";
import Entries from "./components/Entries/entries";

export default function Home() {
  return (
    <main>
      <Header />
      <Entries
        supertitle="SUCESSO!"
        title="SALESFORCE CUSTOMER 360"
        description="O customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI."
        image="./img/entry1.png"
        button1="https://www.youtube.com/watch?v=4s4UCxCv_OE"
        button2="https://www.youtube.com/watch?v=4s4UCxCv_OE"
        cor=""
      />
    </main>
  );
}
