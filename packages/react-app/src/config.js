import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x758C82e443393E4365055266f107FCb0aeB9A1Ac";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/fxTByyOXgxYEaJLJkpYeaoql_INXvLyt",
  },
};