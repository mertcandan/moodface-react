import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Copyright from "./components/Copyright";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import Heading from "./components/Heading";
import Stats from "./components/Stats";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StartPrompt from "./components/StartPrompt";
import MoodfaceWrapper from "./components/Moodface";

function App() {
  const { themeMode } = useSelector((state) => state.common);

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontFamily: ["Duru Sans", "cursive"].join(","),
    },
  });

  const dispatch = useDispatch();

  const detectKeyPress = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "TYPE_LETTER",
        payload: e,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("keypress", detectKeyPress, true);
  }, [detectKeyPress]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Heading />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stats />
          <Divider variant={"fullWidth"} />
          <Container sx={{ height: 500 }}>
            <StartPrompt />
            <MoodfaceWrapper />
          </Container>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}

export default App;
