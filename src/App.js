import {
  createTheme,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import AllCard from "./components/AllCard";
import Title from "./components/Title";
import { green } from "@material-ui/core/colors";
import { motion } from "framer-motion";
const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(183, 100%, 15%)",
    },
    secondary: green,
  },

  typography: {
    fontFamily: "Space Mono",
  },
});

function App() {
  const matches = useMediaQuery("(max-width: 700px)");
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={6}
        style={{
          minHeight: "100vh",
          margin: "0",
          width: "100%",
          marginBottom: matches === true ? 30 : 0,
        }}
      >
        <Grid item style={{ paddingTop: matches === true ? 20 : 50 }}>
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: -300 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 60,
            }}
          >
            {" "}
            <Title />{" "}
          </motion.div>
        </Grid>
        <Grid item>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 1.2,
            }}
          >
            {" "}
            <AllCard />{" "}
          </motion.div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
