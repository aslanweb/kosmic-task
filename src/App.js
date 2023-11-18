import './App.scss';
import Header from "./component/header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainContent from "./component/main-content/MainContent";
import Footer from "./component/footer/Footer";

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Header/>
          <MainContent/>
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
