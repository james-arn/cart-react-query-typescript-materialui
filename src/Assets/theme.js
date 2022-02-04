import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const primaryColor = "#ff5722"; //specific hex keys
const secondaryColor = "#f50057";
const dangerColor = red[900]; //in built shades in mUI

export const customTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: dangerColor,
    },
  },
  // Overrides:
  components: {
    // Name of the component want to override
    MuiButton: {
      styleOverrides: {
        // Name of the slot - not all muibuttons, just secondary colours
        secondary: {
          // not just all states, but specifically the hover state. now white
          "&:hover": {
            color: "white",
          },
        },
      },
    },
  },
});

// See:
// color: https://mui.com/customization/color/
// palette: https://mui.com/customization/palette/
// overriding components: https://mui.com/customization/theme-components/#global-style-overrides
