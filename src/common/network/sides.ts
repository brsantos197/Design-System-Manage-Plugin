//@ts-ignore
import * as Networker from "monorepo-networker";

export namespace NetworkSide {
  export const PLUGIN = Networker.Side.register(
    new Networker.Side<MessageEvent<any>>("Plugin", {
      attachListener: (callback: any) => figma.ui.on("message", callback),
      detachListener: (callback: any) => figma.ui.off("message", callback),
    })
  );

  export const UI = Networker.Side.register(
    new Networker.Side("UI", {
      shouldHandle: (event: any) => event.data?.pluginId != null,
      messageGetter: (event: any) => event.data.pluginMessage,
      attachListener: (callback: any) =>
        window.addEventListener("message", callback),
      detachListener: (callback: any) =>
        window.removeEventListener("message", callback),
    })
  );
}
