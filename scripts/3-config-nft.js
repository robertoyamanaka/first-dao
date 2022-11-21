import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract(
      "0xF292Bb677aDaAB6542121B8F225fF41dD0e7b982",
      "edition-drop"
    );
    await editionDrop.createBatch([
      {
        name: "Meh Pizza Cancino",
        description:
          "This Meh Pizza Cancino will give you access to DeepDiveDAO",
        image: readFileSync("scripts/assets/cancino.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
