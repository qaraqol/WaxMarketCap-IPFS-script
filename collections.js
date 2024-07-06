// Fetch Top 30 Collections from WaxMarketCap API
const apiURL = "https://stats.hivebp.io/v2/top-collections/1?limit=30&offset=0";
const fetchTop30Collections = async () => {
  try {
    console.log("Fetching Top 30 Collections");
    const res = await fetch(apiURL);
    const data = await res.json();
    return data;  
  } catch (err) {
    console.log(err)
  }
};

module.exports = fetchTop30Collections;
