// wagmi.ts

import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { celo } from "@reown/appkit/networks";

const projectId = "cd169b99d42633d1d81f5aee613d0eed";

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [celo],
  ssr: true,
  connectors: [],
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [celo],
  projectId,
  metadata: {
    name: "Critter Hole",
    description: "Critter Hole Game on Celo",
    url: "https://critterholes.xyz/",
    icons: ["https://critterholes.xyz//logo.png"],
  },
  features: {
    history: false,
  },
  themeMode: "dark",
});

export const config = wagmiAdapter.wagmiConfig;
