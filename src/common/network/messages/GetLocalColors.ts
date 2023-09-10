import { NetworkSide } from "@common/network/sides";
//@ts-ignore
import * as monorepoNetworker from "monorepo-networker";
import { Tokens } from "src/@types/tokens";

export class GetLocalColors extends monorepoNetworker.MessageType<void> {
  constructor() {
    super('get-local-colors')
  }

  public receivingSide(): monorepoNetworker.Side {
    return NetworkSide.PLUGIN;
  }
  
  handle(): {  tokens: Tokens} {
    const tokens: Tokens  = {}
    if (figma.editorType === "figma") {
      figma.getLocalPaintStyles().forEach((style) => {
        const [colorName, colorTone] = style.name.split('/')
        if (!tokens[colorName]) {
          tokens[colorName] = {}
        }
        const paint = style.paints[0] as SolidPaint
        tokens[colorName][colorTone] = `#${Object.values(paint.color).map(value => Math.round((value as number) * 255).toString(16).padStart(2, '0').toLocaleUpperCase()).join('')}`
      })
      
    }
    return {tokens}
  }

}