import styled from 'styled-components';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import iconLocation from 'assets/icon-location.svg';
import { useIpContext } from 'context/IpProvider';
import Loader from 'components/Loader/Loader';
import 'components/Map/mapStyle.css';

const MapWrapper = styled.main`
  position: relative;
`;
const MapContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 30rem);

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    height: calc(100vh - 28rem);
  }
`;

const icon = new Icon({
  iconUrl: iconLocation,
  iconSzie: [46, 56],
});

const Map = () => {
  const { geolocation, loading, error } = useIpContext();
  let location = {};

  if (!loading & !error) {
    const { lat, lng } = geolocation.location;
    location = { lat, lng };
  }

  return (
    <MapWrapper>
      <MapContent>
        {loading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : error.code ? null : (
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="map-container"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} icon={icon} />
          </MapContainer>
        )}
      </MapContent>
    </MapWrapper>
  );
};

export default Map;
