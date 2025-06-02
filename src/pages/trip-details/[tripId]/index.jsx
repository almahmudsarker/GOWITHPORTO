import { useParams } from "react-router-dom";

const TripDetails = () => {
  const { tripId } = useParams();
  return (
    <div>
      <h1>TripData page: {tripId}</h1>
    </div>
  );
};

export default TripDetails;
