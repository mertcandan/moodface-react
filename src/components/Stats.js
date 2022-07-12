import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import HeadingButtons from "./HeadingButtons";
import { useSelector } from "react-redux";

const Stats = () => {
  const { lastTimestamp, interval, averageInterval } = useSelector(
    (state) => state.typing
  );
  return (
    <Box>
      <Stack
        sx={{ pt: 0 }}
        direction="row"
        spacing={0}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <HeadingButtons />
        <Stack sx={{ pt: 0 }} direction="column" spacing={0}>
          <Typography align={"right"}>{`Last Timestamp: ${Math.round(
            lastTimestamp
          )}`}</Typography>
          <Typography align={"right"}>{`Interval: ${Math.round(
            interval
          )}`}</Typography>
          <Typography align={"right"}>{`Average Interval: ${Math.round(
            averageInterval
          )}`}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Stats;
