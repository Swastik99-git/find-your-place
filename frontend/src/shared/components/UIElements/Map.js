import { useEffect, useRef } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

const Map = (props) => {

  const mapRef = useRef();
  const mapInstance = useRef(null);

  useEffect(() => {

    if (!mapInstance.current) {

      mapInstance.current = L.map(mapRef.current).setView(
        [props.center.lat, props.center.lng],
        props.zoom
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance.current);

      L.marker([props.center.lat, props.center.lng]).addTo(mapInstance.current);

    }

    return () => {

      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

    };

  }, [props.center, props.zoom]);

  return (
    <div
      ref={mapRef}
      style={{ height: "100%", width: "100%" }}
    />
  );

};

export default Map;