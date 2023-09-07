import { NetworkSide } from "@common/network/sides";
//@ts-ignore
import * as monorepoNetworker from "monorepo-networker";

interface Payload {
  width: number;
  height: number;
}

export class CreateRectMessage extends monorepoNetworker.MessageType<Payload> {
  public receivingSide(): monorepoNetworker.Side {
    return NetworkSide.PLUGIN;
  }

  public handle(payload: Payload, from: monorepoNetworker.Side): void {
    if (figma.editorType === "figma") {
      const rect = figma.createRectangle();
      rect.x = 0;
      rect.y = 0;
      rect.name = "Plugin Rectangle # " + Math.floor(Math.random() * 9999);
      rect.fills = [
        {
          type: "SOLID",
          color: {
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          },
        },
      ];
      rect.resize(payload.width, payload.height);
      figma.currentPage.appendChild(rect);
      figma.viewport.scrollAndZoomIntoView([rect]);
      figma.closePlugin();
    }
  }
}
