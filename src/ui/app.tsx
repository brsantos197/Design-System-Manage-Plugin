import { useEffect, useState } from "react";
import * as Networker from "monorepo-networker";
import { NetworkMessages } from "@common/network/messages";

import { Button } from "@ui/components/Button";
import "@ui/styles/main.scss";
import { Tokens } from "src/@types/tokens";

function App() {
  const [tokens, setTokens] = useState<Tokens>({});
  return (
    <div className="homepage">
      <Button onClick={async () => {
       const result = await NetworkMessages.GET_LOCAL_COLORS.request()
       setTokens(result.tokens)
      }}>
        Gerar tokens
      </Button>
      { Object.values(tokens).length ? (
        <a href={`data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(tokens, null, 2))}`} download="tokens.json" >Baixar</a>
      ): null}
      
      <Button onClick={async () => {
       await NetworkMessages.GET_LOCAL_COMPONENTS.request()
       
      }}>
        Teste Componentes
      </Button>

    </div>
  );
}

export default App;
