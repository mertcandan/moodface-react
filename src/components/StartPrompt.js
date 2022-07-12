import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const StartPrompt = () => {
  const { letterCount } = useSelector((state) => state.typing);
  if (letterCount) {
    return null;
  }
  return (
    <Typography sx={{ pt: 3 }} fontStyle={"italic"}>
      Start Typing..
    </Typography>
  );
};

export default StartPrompt;
