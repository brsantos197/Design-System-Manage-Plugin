//@ts-ignore
import * as Networker from "monorepo-networker";
import { initializeNetwork } from "@common/network/init";
import { NetworkSide } from "@common/network/sides";
import { NetworkMessages } from "@common/network/messages";

const UI_CONFIG: ShowUIOptions = {
  width: 800,
  height: 650,
  title: "Design Systems Manager",
}

async function bootstrap() {
  initializeNetwork(NetworkSide.PLUGIN);

  if (figma.editorType === "figma") {
    figma.showUI(__html__, UI_CONFIG);
  } else if (figma.editorType === "figjam") {
    figma.showUI(__html__, UI_CONFIG);
  }

  console.log("Bootstrapped @", Networker.Side.current.getName());

  NetworkMessages.HELLO_UI.send({ text: "Hey there, UI!" });
}

bootstrap();
