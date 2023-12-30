import Header from '@/components/body/header/header';
import { ColorModeContext } from '@/lib/contexts/colorModeContext';
import { darkTheme } from '@/lib/themes/dark';
import { lightTheme } from '@/lib/themes/light';
import { createTheme, PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/system';
import { Inter } from '@next/font/google';
import React from 'react';
import Sidebar from './sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] });

const BodyComponent: React.FC = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => prevMode === "light" ? "dark" : "light");
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Header />
        <Sidebar />
      </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default BodyComponent;