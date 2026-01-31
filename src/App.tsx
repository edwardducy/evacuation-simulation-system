import { Box, Flex, Grid, Theme } from "@radix-ui/themes";
import Map from "./Map";
import Shelter from "./Shelter";

function App() {
  return (
    <Theme>
      {/* Sidebar.tsx */}
      <Grid columns={"1fr 3fr"} rows={"1"} className="h-screen w-screen">
        {/* Aside */}
        <Grid columns={"1fr 7fr"} rows={"1"}>
          <Box className="border-r border-r-neutral-200">
            <Flex justify={"center"} py={"5"}></Flex>
          </Box>
          <Flex
            direction={"column"}
            gap={"5"}
            p={"3"}
            className="border-r border-r-neutral-200"
          >
            <Shelter />
          </Flex>
        </Grid>
        {/* Main */}
        <Box>
          <Map />
        </Box>
      </Grid>
    </Theme>
  );
}

export default App;
