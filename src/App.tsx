import { useState } from 'react';

import { Box, createTheme, CssBaseline, PaletteMode, Stack, ThemeProvider } from '@mui/material';
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components';

function App() {
  const [mode, setMode] = useState<PaletteMode>('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box bgcolor={'background.default'} color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
