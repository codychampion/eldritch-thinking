import { eldritchThinking, listPacks } from "../src/index.js";

for (const pack of listPacks()) {
  console.log(`${pack}: ${eldritchThinking({ pack })}`);
}
