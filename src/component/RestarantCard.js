import { CDN_URL } from "../utils/constant";

const RestarantCard = (props) => {
  const {
    resCardData: {
      info: { name, avgRating, cuisines, sla, cloudinaryImageId },
    },
  } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating} stars</h3>
      <h3>{sla.deliveryTime}</h3>
    </div>
  );
};

export default RestarantCard;
