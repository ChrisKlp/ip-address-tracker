import Header from 'components/Header/Header';
import Map from 'components/Map/Map';
import IpProvider from 'context/IpProvider';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import { theme } from 'theme/mainTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <IpProvider>
        <Header />
        <Map />
      </IpProvider>
    </ThemeProvider>
  );
};

export default App;
