import React, { useState } from 'react';
import { Cover, Themes, Switch, Proyectos, Bioserv, Contacto} from './components';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Switch theme={theme} setTheme={setTheme} />
        <Cover theme={theme} />
        <Proyectos theme={theme} id="proyectos"/>
        <Bioserv theme={theme} id="bioserv"/>
        {/* <Arena theme={theme} id="arena"/> */}
        <Contacto theme={theme} id="contacto"/>
      </ThemeProvider>
    </>
  );
}

export default App;
