import React from "react";
import { useMessage } from "../components/Message";

export default function TelaTeste() {
  const MostraMensagem = useMessage();

  const handleClick = async () => {
    const retorno = await MostraMensagem({
      Title: "Pegunta?",
      Message: "Texto da pergunta",
      Buttons: [{ Title: "Ok" }]
    });
    console.log(retorno);
  };

  return (
    <div>
      <button onClick={handleClick}>Teste</button>
    </div>
  );
}
