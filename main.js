const getIPFS = require("./getIPFS");
const fetchTop30Collections = require("./collections");

//Map through Top 30 Collections fetched from WaxMarketCap API
const top30 = await fetchTop30Collections();
  let collections = top30.map((collection) => {
    const name = collection.collection.name;
    return name;
  });

const main = async () => {
  // Fetched collections
  console.log(collections);
  const IPFS = await getIPFS(collections);
  const bytes = await Bun.write("./ipfs.json", JSON.stringify(IPFS));
  console.log(`${bytes} bytes of data written to ipfs.json`);
};

main();
