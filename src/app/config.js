import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  // export const config = createConfig({
  appName: "wagmi_next",
  projectId: "wagmi_next",
  appDescription: "Wagmi Next Project",
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
