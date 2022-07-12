import { Stack } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { useDispatch } from "react-redux";

const HeadingButtons = () => {
  const dispatch = useDispatch();

  return (
    <Stack sx={{ pt: 0 }} direction="row" spacing={0}>
      <Brightness4Icon
        fontSize={"large"}
        onClick={() => {
          dispatch({
            type: "TOGGLE_THEME_MODE",
          });
        }}
      />
      <DownloadForOfflineIcon
        fontSize={"large"}
        onClick={() => {
          window.print();
        }}
      />
    </Stack>
  );
};

export default HeadingButtons;
