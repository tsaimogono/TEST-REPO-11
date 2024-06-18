import {darkTheme,lightTheme} from './utils/Themes.jsx
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
background: ${({theme}) => theme.bg};
width: 100%;
height: 100vh;
`

function App() {

  const [darkMode, setDarkMode] = useState(true);
return(
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
  <browserRouter>
  <Routes>

  </Routes>
  </browserRouter>
  </ThemeProvider>
)

}
export default App
