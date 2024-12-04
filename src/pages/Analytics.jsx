import { useState, useEffect } from "react";
import Map from "../components/Map.jsx";
import Filters from "../components/Filters.jsx";
import Chart from "../components/Chart.jsx";

function Analytics() {
  const [filters, setFilters] = useState({
    minFare: "",
    maxFare: "",
    startTime: "",
    endTime: "",
    minDistance: "",
    maxDistance: "",
  });

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch trips data from API
    const fetchTrips = async () => {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/trips?${queryParams}`);
      const data = await response.json();
      setTrips(data);
    };

    fetchTrips();
  }, [filters]);

  return (
    <>
      <Filters filters={filters} setFilters={setFilters}></Filters>
      <Map trips={trips}></Map>
      <Chart trips={trips}></Chart>
    </>
  );
}

export default Analytics;
