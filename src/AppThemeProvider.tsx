import React, { useMemo } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                "& textarea": {
                  resize: "both",
                },
              },
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
