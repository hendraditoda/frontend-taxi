import { useState } from "react";
import { MapContainer, TileLayer, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import classes from "./Map.module.css";

function Map({ trips }) {
  const [selectedRoute, setSelectedRoute] = useState(null);

  return (
    <div className={classes.mapContainer}>
      <MapContainer
        center={[40.7128, -74.006]}
        zoom={12}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {trips.map((trip, index) => (
          <Polyline
            key={index}
            positions={[
              [trip.pickup_latitude, trip.pickup_longitude],
              [trip.dropoff_latitude, trip.dropoff_longitude],
            ]}
            color={selectedRoute === index ? "red" : "blue"}
            weight={selectedRoute === index ? 4 : 2}
            eventHandlers={{
              click: () => setSelectedRoute(index),
            }}
          >
            <Popup>
              <div>
                <p>
                  <b>Fare:</b> ${trip.fare_amount}
                </p>
                <p>
                  <b>Distance:</b> {trip.trip_distance} miles
                </p>
              </div>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
