import { createContext, useContext, useEffect, useState } from 'react';

const IpContext = createContext();

const IpProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [geolocation, setGeolocation] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = e => setValue(e.target.value);

  const initGeolocation = () => {
    setError(false);
    setLoading(true);

    const IP_ADRESS = value;
    const url =
      'https://geo.ipify.org/api/v1?apiKey=at_RpJd8LBLEAPvTUd9xrnTVsLyqAPxU&ipAddress=' +
      IP_ADRESS;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        const { ip, location, isp } = data;
        setGeolocation({ ip, location, isp });
        setLoading(false);
      })
      .catch(error => {
        error.json().then(errorMessage => {
          setError(errorMessage);
          console.error(JSON.stringify(errorMessage));
          setLoading(false);
        });
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    initGeolocation();
  };

  useEffect(() => {
    initGeolocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue = {
    value,
    geolocation,
    error,
    loading,
    handleChange,
    handleSubmit,
  };

  return (
    <IpContext.Provider value={contextValue}>{children}</IpContext.Provider>
  );
};

export default IpProvider;
export const useIpContext = () => useContext(IpContext);
