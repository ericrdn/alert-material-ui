import React, { useState } from "react";

//Telas
import TelaTeste from "./views/TelaTeste";

//Componentes usaveis por metodo
import { Message, MessageContext, EventoContext } from "./components/Message";

function App() {
  const [exibeMesagem, setexibeMensagem] = useState(false);

  return (
    <div>
      <MessageContext.Provider value={EventoContext(setexibeMensagem)}>
        <Message.Component
          StateMessageComponent={exibeMesagem}
          SetStateMessageComponent={setexibeMensagem}
        />
        <TelaTeste />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
