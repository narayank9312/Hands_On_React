import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestarantCard from "./RestarantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restListData, setrestListData] = useState([]);
  const [filterListRest, setfilterListRest] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  //   "/api/dapi/restaurants/list/v5?lat=12.821073335771809&lng=77.65771263820804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   ("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.821073335771809&lng=77.65771263820804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.821073335771809&lng=77.65771263820804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    //optional chaining
    // data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setrestListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterListRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleFilterRestaurants = () => {
    setrestListData((prevData) =>
      prevData.filter((res) => res.info.avgRating >= 4.2)
    );
  };

  //conditional rendering
  //   if (restListData.length === 0) {
  //     return <Shimmer />;
  //   }

  return restListData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-Card">
      {/* <div className="search">Search</div>
       */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />{" "}
          <button
            onClick={() => {
              setfilterListRest(() => {
                return restListData.filter((restrauant) =>
                  restrauant.info.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              });
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {console.log("filterListRest,filterListRest", filterListRest)}
        {console.log("restListData,restListData", restListData)}

        {filterListRest?.map((restrauant) => (
          <RestarantCard key={restrauant.info.id} resCardData={restrauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
