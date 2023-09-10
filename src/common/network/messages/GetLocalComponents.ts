import { NetworkSide } from "@common/network/sides";
//@ts-ignore
import * as monorepoNetworker from "monorepo-networker";
import { Tokens } from "src/@types/tokens";

export class GetLocalComponents extends monorepoNetworker.MessageType<void> {
  constructor() {
    super('get-local-components')
  }

  public receivingSide(): monorepoNetworker.Side {
    return NetworkSide.PLUGIN;
  }
  
  handle() {
    console.log(figma.currentPage.findAll((node) => {
      switch (node.type) {
        case 'COMPONENT_SET':
          return true;
        case 'COMPONENT':
          if (node.variantProperties) {
            return false;
          }
          return true;    
        default:
          return false;
      }
    }))
  }

}