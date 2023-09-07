import { CreateRectMessage } from "@common/network/messages/CreateRectMessage";
import { HelloMessage } from "@common/network/messages/HelloMessage";
import { PingMessage } from "@common/network/messages/PingMessage";
import { NetworkSide } from "@common/network/sides";
//@ts-ignore
import * as Networker from "monorepo-networker";

export namespace NetworkMessages {
  export const registry = new Networker.MessageTypeRegistry();

  //@ts-ignore
  export const PING = registry.register(new PingMessage("ping"));

  export const HELLO_PLUGIN = registry.register(
    new HelloMessage(NetworkSide.PLUGIN)
  );

  export const HELLO_UI = registry.register(new HelloMessage(NetworkSide.UI));

  export const CREATE_RECT = registry.register(
  //@ts-ignore
    new CreateRectMessage("create-rect")
  );
}
