import React, { useState } from 'react';
import { Cover, Themes, Switch, Proyectos } from './components';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <Switch theme={theme} setTheme={setTheme} />
        <Cover theme={theme} />
        <Proyectos theme={theme} id="proyectos"/>
      </ThemeProvider>
    </>
  );
}

export default App;
