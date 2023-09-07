//@ts-ignore
import * as Networker from "monorepo-networker";
import { NetworkMessages } from "@common/network/messages";
import { NetworkSide } from "@common/network/sides";

export const initializeNetwork = Networker.createInitializer({
  messagesRegistry: NetworkMessages.registry,

  initTransports: function (register: any) {
    register(NetworkSide.PLUGIN, NetworkSide.UI, (message: any) => {
      figma.ui.postMessage(message);
    });

    register(NetworkSide.UI, NetworkSide.PLUGIN, (message: any) => {
      parent.postMessage({ pluginMessage: message }, "*");
    });
  },
});
