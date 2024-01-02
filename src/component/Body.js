import { useState } from "react";
import resList from "../utils/mockData";
import RestarantCard from "./RestarantCard";

const Body = () => {
  const [restListData, setrestListData] = useState(resList);
  const handleFilterRestaurants = () => {
    setrestListData((prevData) =>
      prevData.filter((res) => res.info.avgRating >= 4.2)
    );
  };
  return (
    <div className="res-Card">
      {/* <div className="search">Search</div>
       */}
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restListData.map((restrauant) => (
          <RestarantCard key={restrauant.info.id} resCardData={restrauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
